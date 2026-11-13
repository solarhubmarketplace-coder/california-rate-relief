'use client';

// The project address block shared by every residential form (residential lead
// contract, 12 Nov 2026): Street (Google Places suggestions when available,
// with "Enter my address by hand"), City, State shown as California, ZIP
// (checked against the California ZIP table, which also fills an empty City),
// and the detached-single-family question when the street has "Unit" or "#"
// or Google returns a subpremise.

import { useEffect, useId, useRef, useState } from 'react';
import { ERRORS, UNIT_DECLINED_MESSAGE, UNIT_QUESTION, needsUnitQuestion } from '@/lib/lead-contract';
import { caZipStatus, placesSelectionRequired, type ProjectAddressState } from '@/lib/project-address';
import { HAS_PLACES_KEY, usePlacesAddress, type PlacesSuggestion } from '@/lib/use-places-address';
import { useLeadGates, type GateFormKind } from '@/lib/lead-gates';

export type AddressField = 'street' | 'unit' | 'city' | 'zip';

const defaultInput =
  'mt-1 w-full rounded-lg border border-input bg-white px-3 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring';

export function ProjectAddressFields({
  value,
  onChange,
  errors = {},
  onClearError,
  disabled = false,
  formKind,
  eager = false,
  registerField,
  inputClassName = defaultInput,
  labelClassName = 'text-sm font-medium',
}: {
  value: ProjectAddressState;
  onChange: (next: ProjectAddressState) => void;
  errors?: Partial<Record<AddressField, string>>;
  onClearError?: (field: AddressField) => void;
  disabled?: boolean;
  formKind: GateFormKind;
  /** Start loading Places as soon as the block mounts (it sits on a step the visitor just opened). */
  eager?: boolean;
  registerField?: (field: AddressField, node: HTMLElement | null) => void;
  inputClassName?: string;
  labelClassName?: string;
}) {
  const uid = useId();
  const places = usePlacesAddress(formKind);
  const trackGate = useLeadGates(formKind);
  const valueRef = useRef(value);
  valueRef.current = value;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const [selectionError, setSelectionError] = useState('');
  const [listOpen, setListOpen] = useState(false);

  // valueRef is updated before onChange so two quick patches (a keystroke, then
  // the ZIP lookup) never merge onto a stale copy.
  const set = (patch: Partial<ProjectAddressState>) => {
    const next = { ...valueRef.current, ...patch };
    valueRef.current = next;
    onChangeRef.current(next);
  };

  const requestPlaces = places.request;
  useEffect(() => {
    if (eager) requestPlaces();
  }, [eager, requestPlaces]);

  // Mirror the Places status into the form state (it travels with the lead).
  useEffect(() => {
    if (valueRef.current.placesStatus !== places.status) {
      set({ placesStatus: places.status, source: valueRef.current.placeSelected ? 'places' : 'manual' });
    }
    // set reads refs only, so the status is the only dependency.
  }, [places.status]);

  const checkZip = async (zip: string) => {
    if (!/^\d{5}$/.test(zip)) {
      set({ zipKnown: null });
      return;
    }
    const status = await caZipStatus(zip);
    if (valueRef.current.zip !== zip) return; // the visitor kept typing
    const patch: Partial<ProjectAddressState> = { zipKnown: status.known };
    if (status.known && status.city && !valueRef.current.city.trim()) patch.city = status.city;
    set(patch);
  };

  const pick = async (suggestion: PlacesSuggestion) => {
    setListOpen(false);
    const result = await places.select(suggestion);
    if ('error' in result) {
      setSelectionError(
        result.error === 'details_failed'
          ? "We couldn't load that address. Pick it again, or choose \"Enter my address by hand\"."
          : ERRORS[result.error],
      );
      set({ street: suggestion.description.split(',')[0].trim(), placeSelected: false, placesUnitFlag: false, source: 'manual' });
      return;
    }
    setSelectionError('');
    onClearError?.('street');
    onClearError?.('city');
    onClearError?.('zip');
    const showUnit = needsUnitQuestion(result.street, result.unitFlag);
    set({
      street: result.street,
      city: result.city || valueRef.current.city,
      zip: result.zip,
      placeSelected: true,
      placesUnitFlag: result.unitFlag,
      source: 'places',
      unitAnswer: showUnit ? valueRef.current.unitAnswer : '',
      zipKnown: null,
    });
    void checkZip(result.zip);
  };

  const selectionRequired = placesSelectionRequired(places.status, HAS_PLACES_KEY);
  const showUnit = needsUnitQuestion(value.street, value.placesUnitFlag);
  const streetError = errors.street || selectionError;
  const errorId = (field: AddressField) => `${uid}-${field}-error`;
  const invalid = (field: AddressField) => Boolean(field === 'street' ? streetError : errors[field]);
  const inputClass = (field: AddressField) => `${inputClassName} ${invalid(field) ? 'border-destructive' : ''}`;
  const message = (field: AddressField, text?: string) =>
    text ? (
      <p id={errorId(field)} className="mt-1 text-sm font-medium text-destructive">
        {text}
      </p>
    ) : null;

  return (
    <fieldset
      className="grid min-w-0 gap-4 md:col-span-2 md:grid-cols-2"
      disabled={disabled}
      onFocusCapture={places.request}
    >
      <legend className="sr-only">Address of the home</legend>
      <div className="relative min-w-0 md:col-span-2">
        <label htmlFor={`${uid}-street`} className={labelClassName}>
          Street address of the home
        </label>
        <input
          id={`${uid}-street`}
          ref={(node) => registerField?.('street', node)}
          required
          type="text"
          maxLength={120}
          placeholder="123 Main St"
          autoComplete={places.status === 'active' ? 'off' : 'address-line1'}
          role={places.status === 'active' ? 'combobox' : undefined}
          aria-expanded={places.status === 'active' ? listOpen && places.suggestions.length > 0 : undefined}
          aria-controls={places.status === 'active' ? `${uid}-suggestions` : undefined}
          aria-autocomplete={places.status === 'active' ? 'list' : undefined}
          className={inputClass('street')}
          value={value.street}
          aria-invalid={invalid('street') || undefined}
          aria-describedby={streetError ? errorId('street') : `${uid}-street-help`}
          onChange={(e) => {
            const street = e.target.value;
            setSelectionError('');
            onClearError?.('street');
            const placesUnitFlag = value.placeSelected ? false : value.placesUnitFlag;
            const stillUnit = needsUnitQuestion(street, placesUnitFlag);
            set({
              street,
              // Editing a picked address voids the selection.
              placeSelected: false,
              placesUnitFlag,
              source: 'manual',
              unitAnswer: stillUnit ? value.unitAnswer : '',
            });
            if (!stillUnit) onClearError?.('unit');
            places.type(street);
            setListOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setListOpen(false);
          }}
        />
        {listOpen && places.suggestions.length > 0 && (
          <ul
            id={`${uid}-suggestions`}
            role="listbox"
            className="absolute z-50 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-border bg-white shadow-lg"
          >
            {places.suggestions.map((suggestion) => (
              <li key={suggestion.place_id} role="option" aria-selected={false}>
                <button
                  type="button"
                  onClick={() => void pick(suggestion)}
                  className="min-h-[44px] w-full border-b border-border px-4 py-3 text-left text-sm text-foreground last:border-b-0 hover:bg-muted"
                >
                  {suggestion.description}
                </button>
              </li>
            ))}
          </ul>
        )}
        {message('street', streetError)}
        <p id={`${uid}-street-help`} className="mt-1 text-xs text-muted-foreground">
          {selectionRequired
            ? value.placeSelected
              ? 'Address picked from the list.'
              : 'Start typing, then pick your address from the list.'
            : 'House number and street, for example 123 Main St. No apartment, suite, lot or PO box.'}
        </p>
        {selectionRequired && !value.placeSelected && (
          <button
            type="button"
            onClick={() => {
              places.chooseManual();
              setSelectionError('');
              onClearError?.('street');
            }}
            className="mt-1 inline-flex min-h-[44px] items-center text-sm font-semibold text-primary underline"
          >
            Enter my address by hand
          </button>
        )}
      </div>

      {showUnit && (
        <fieldset className="min-w-0 md:col-span-2">
          <legend className={labelClassName}>{UNIT_QUESTION}</legend>
          <div className="mt-1 grid grid-cols-2 gap-2">
            {(
              [
                ['yes', 'Yes'],
                ['no', 'No'],
              ] as const
            ).map(([answer, label], index) => (
              <label
                key={answer}
                className={`flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 text-base font-medium focus-within:ring-2 focus-within:ring-ring ${
                  value.unitAnswer === answer
                    ? 'border-primary bg-primary/10 text-primary'
                    : `${errors.unit ? 'border-destructive' : 'border-input'} bg-white text-foreground`
                }`}
              >
                <input
                  type="radio"
                  name={`${uid}-unit`}
                  value={answer}
                  checked={value.unitAnswer === answer}
                  aria-describedby={errors.unit ? errorId('unit') : undefined}
                  ref={index === 0 ? (node) => registerField?.('unit', node) : undefined}
                  onChange={() => {
                    set({ unitAnswer: answer });
                    onClearError?.('unit');
                    if (answer === 'no') trackGate('gate_unit_declined');
                  }}
                  className="h-4 w-4 accent-primary"
                />
                {label}
              </label>
            ))}
          </div>
          {value.unitAnswer === 'no' ? (
            <p role="status" className="mt-2 rounded-lg border border-status-warning/30 bg-status-warning/10 p-3 text-sm text-foreground">
              {UNIT_DECLINED_MESSAGE}
            </p>
          ) : (
            message('unit', errors.unit)
          )}
        </fieldset>
      )}

      <div className="min-w-0">
        <label htmlFor={`${uid}-city`} className={labelClassName}>
          City
        </label>
        <input
          id={`${uid}-city`}
          ref={(node) => registerField?.('city', node)}
          required
          type="text"
          maxLength={80}
          autoComplete="address-level2"
          className={inputClass('city')}
          value={value.city}
          aria-invalid={invalid('city') || undefined}
          aria-describedby={errors.city ? errorId('city') : undefined}
          onChange={(e) => {
            set({ city: e.target.value });
            onClearError?.('city');
          }}
        />
        {message('city', errors.city)}
      </div>

      <div className="grid min-w-0 grid-cols-2 gap-3">
        <div className="min-w-0">
          <label htmlFor={`${uid}-state`} className={labelClassName}>
            State
          </label>
          <input
            id={`${uid}-state`}
            type="text"
            readOnly
            tabIndex={-1}
            value="California"
            aria-describedby={`${uid}-state-help`}
            className={`${inputClassName} bg-muted text-muted-foreground`}
          />
          <p id={`${uid}-state-help`} className="sr-only">
            This form is for homes in California.
          </p>
        </div>
        <div className="min-w-0">
          <label htmlFor={`${uid}-zip`} className={labelClassName}>
            ZIP code
          </label>
          <input
            id={`${uid}-zip`}
            ref={(node) => registerField?.('zip', node)}
            required
            type="text"
            inputMode="numeric"
            pattern="[0-9]{5}"
            maxLength={5}
            autoComplete="postal-code"
            className={inputClass('zip')}
            value={value.zip}
            aria-invalid={invalid('zip') || undefined}
            aria-describedby={errors.zip ? errorId('zip') : undefined}
            onChange={(e) => {
              const zip = e.target.value.replace(/\D/g, '').slice(0, 5);
              set({ zip, zipKnown: null });
              onClearError?.('zip');
              void checkZip(zip);
            }}
          />
        </div>
      </div>
      {errors.zip && <div className="md:col-span-2">{message('zip', errors.zip)}</div>}
    </fieldset>
  );
}
