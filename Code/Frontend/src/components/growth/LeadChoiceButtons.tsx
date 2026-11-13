'use client';

import { useId } from 'react';

export interface ChoiceOption {
  id: string;
  label: string;
}

/**
 * A required single-choice question answered with buttons, never typed.
 * Radio inputs underneath, so keyboard and screen readers get a real radio
 * group; the visual language matches the homeowner Yes/No buttons.
 * Shared by SolarInquiry and OfferRequest (lead contract v2).
 */
export function LeadChoiceButtons({
  legend,
  name,
  options,
  value,
  onChange,
  error,
  disabled,
  columns = 'grid-cols-2',
  className = '',
  firstRef,
}: {
  legend: string;
  /** Form field name; also the FormData key on uncontrolled forms. */
  name: string;
  options: readonly ChoiceOption[];
  value: string;
  onChange: (id: string) => void;
  error?: string;
  disabled?: boolean;
  columns?: string;
  className?: string;
  firstRef?: (node: HTMLElement | null) => void;
}) {
  const uid = useId();
  const errorId = `${uid}-${name}-error`;
  return (
    <fieldset className={`min-w-0 ${className}`} disabled={disabled}>
      <legend className="text-sm font-medium">{legend}</legend>
      <div className={`mt-1 grid gap-2 ${columns}`}>
        {options.map((option, index) => (
          <label
            key={option.id}
            className={`flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 text-center text-base font-medium focus-within:ring-2 focus-within:ring-ring ${
              value === option.id
                ? 'border-primary bg-primary/10 text-primary'
                : `${error ? 'border-destructive' : 'border-input'} bg-white text-foreground`
            }`}
          >
            <input
              type="radio"
              name={`${uid}-${name}`}
              value={option.id}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
              aria-describedby={error ? errorId : undefined}
              ref={index === 0 && firstRef ? firstRef : undefined}
              className="h-4 w-4 accent-primary"
            />
            {option.label}
          </label>
        ))}
      </div>
      {/* Hidden mirror so a plain FormData read sees the choice. */}
      <input type="hidden" name={name} value={value} />
      {error && (
        <p id={errorId} className="mt-1 text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </fieldset>
  );
}
