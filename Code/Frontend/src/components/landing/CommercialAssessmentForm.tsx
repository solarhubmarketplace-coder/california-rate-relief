"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { trackEvent } from "@/components/GoogleAnalyticsClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { captureFirstTouch, getFirstTouch } from "@/lib/attribution";
import {
  getOrCreateSubmissionAttempt,
  intakeAttribution,
  submitIntake,
  type IntakePayload,
} from "@/lib/intake";
import { isFiveDigitZip, serviceLocationFields, selectableServiceMarkets, type ServiceMarket } from "@/lib/service-market";
import { CTA_COPY } from "@/lib/cta-intent";
import { US_PHONE_HINT, formatUsPhoneInput, isValidUsPhone, toE164Us, usPhoneError } from "@/lib/phone";

interface CommercialFormData {
  companyName: string;
  propertyType: string;
  propertyControl: string;
  location: string;
  city: string;
  serviceZip: string;
  serviceMarket: ServiceMarket | "";
  utilityProvider: string;
  monthlyBillRange: string;
  projectTimeline: string;
  contactName: string;
  phone: string;
  email: string;
  consent: boolean;
}

const initialForm: CommercialFormData = {
  companyName: "",
  propertyType: "",
  propertyControl: "",
  location: "",
  city: "",
  serviceZip: "",
  serviceMarket: "",
  utilityProvider: "",
  monthlyBillRange: "",
  projectTimeline: "",
  contactName: "",
  phone: "",
  email: "",
  consent: false,
};

const selectClass =
  "h-12 w-full rounded-md border-2 border-border bg-background px-3 text-base focus:border-primary focus:outline-none";
const ATTEMPT_KEY = "crr_commercial_submission_v1";

export interface CommercialAssessmentFormProps {
  defaultMarket?: ServiceMarket | '';
  defaultUtility?: string;
  /**
   * Set to embed the form inline on a content page: it then renders inside
   * <section id={sectionId}> with its own h2 and intro, and every field id is
   * prefixed with sectionId so it cannot collide with the page. Omitted, the
   * form renders bare, exactly as on /commercial-assessment.
   */
  sectionId?: string;
  /** h2 above the inline form. Default: CTA_COPY.commercial.formHeading. */
  heading?: string;
  /** Sentence under the h2. Default: CTA_COPY.commercial.formIntro. */
  intro?: string;
  /** Classes for the outermost element (the section when inline). */
  className?: string;
}

export function CommercialAssessmentForm({
  defaultMarket = '',
  defaultUtility = '',
  sectionId,
  heading,
  intro,
  className = '',
}: CommercialAssessmentFormProps = {}) {
  const inline = Boolean(sectionId);
  // Field ids stay exactly as they were on /commercial-assessment; inline
  // copies are prefixed so a page can hold the form without id collisions.
  const fid = (name: string) => (sectionId ? `${sectionId}-${name}` : name);
  // New analytics param on the existing events: where the form was placed.
  const placement = inline ? "inline" : "page";
  const [phoneError, setPhoneError] = useState("");
  const rootRef = useRef<HTMLElement | null>(null);
  const [form, setForm] = useState({
    ...initialForm,
    serviceMarket: defaultMarket,
    utilityProvider: defaultUtility,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [hasUnconfirmedAttempt, setHasUnconfirmedAttempt] = useState(false);
  const startedRef = useRef(false);
  const submitInFlightRef = useRef(false);
  const attemptRef = useRef<{ id: string; payload: IntakePayload } | null>(
    null,
  );
  const trackedSuccessIdsRef = useRef(new Set<string>());

  useEffect(() => {
    captureFirstTouch();
    try {
      const saved = JSON.parse(sessionStorage.getItem(ATTEMPT_KEY) || "null");
      if (
        saved?.id &&
        saved.payload?.submission_id === saved.id &&
        saved.payload.segment === "commercial" &&
        saved.form &&
        Object.keys(initialForm).every(
          (key) =>
            typeof saved.form[key] ===
            typeof initialForm[key as keyof CommercialFormData],
        )
      ) {
        attemptRef.current = { id: saved.id, payload: saved.payload };
        setForm(saved.form);
        setHasUnconfirmedAttempt(true);
        setError(
          "Your previous request was not confirmed. Retry the same information.",
        );
      }
    } catch {
      /* Storage is optional; retries still work in this document. */
    }
  }, []);

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    const touch = getFirstTouch();
    trackEvent("commercial_form_start", {
      landing_page: touch?.landing_page ?? "unknown",
      landing_page_type: touch?.landing_page_type ?? "unknown",
      placement,
      section_id: sectionId ?? "none",
    });
  };

  // commercial_form_view (new): the denominator for commercial_form_start, so
  // an inline placement on a content page can be compared with the page form.
  useEffect(() => {
    const node = rootRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        const touch = getFirstTouch();
        trackEvent("commercial_form_view", {
          landing_page_type: touch?.landing_page_type ?? "unknown",
          placement,
          section_id: sectionId ?? "none",
        });
        observer.disconnect();
      },
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [placement, sectionId]);

  const update = (field: keyof CommercialFormData, value: string | boolean) => {
    if (submitInFlightRef.current) return;
    markStarted();
    if (hasUnconfirmedAttempt) {
      setError(
        "Retry the same information, or start a new submission before editing.",
      );
      return;
    }
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (submitInFlightRef.current) return;
    setError("");

    // E.164 for a valid US number — the same string the old normalizer sent
    // and the backend's normalizePhone stores.
    const phoneMessage = usPhoneError(form.phone);
    if (phoneMessage) {
      setPhoneError(phoneMessage);
      document.getElementById(fid("commercial-phone"))?.focus();
      return;
    }
    const phone = toE164Us(form.phone) ?? form.phone;
    if (!form.consent) {
      setError("Confirm contact consent before submitting.");
      return;
    }
    if (!form.serviceMarket || !isFiveDigitZip(form.serviceZip)) {
      setError("Select a project market and enter a 5-digit project ZIP code.");
      return;
    }
    if (!form.city.trim()) {
      setError("Enter the city for the project address.");
      return;
    }

    submitInFlightRef.current = true;
    setSubmitting(true);
    const touch = getFirstTouch();

    try {
      const attempt = getOrCreateSubmissionAttempt<IntakePayload>(
        attemptRef.current,
        (submissionId) => ({
          submission_id: submissionId,
          segment: "commercial",
          contact: {
            name: form.contactName.trim(),
            phone,
            email: form.email.trim(),
            address: form.location.trim(),
          },
          qualification_data: {
            company_name: form.companyName.trim(),
            property_type: form.propertyType,
            property_control: form.propertyControl,
            location: form.location.trim(),
            // utility_provider stays the answer the visitor typed. The ZIP-derived
            // territory is recorded next to it under derived_utility so the two can
            // disagree visibly instead of one silently replacing the other.
            utility_provider: form.utilityProvider.trim(),
            monthly_bill_range: form.monthlyBillRange,
            project_timeline: form.projectTimeline,
            ...serviceLocationFields(form.serviceMarket as ServiceMarket, form.serviceZip, form.city, form.utilityProvider),
          },
          attribution: intakeAttribution(touch),
          consent: {
            status: "opted_in",
            timestamp: new Date().toISOString(),
          },
        }),
      );
      attemptRef.current = attempt;
      try {
        sessionStorage.setItem(
          ATTEMPT_KEY,
          JSON.stringify({ ...attempt, form }),
        );
      } catch {
        /* Memory fallback. */
      }
      const result = await submitIntake(attempt.payload);
      if (!result.data?.lead_id || result.data.submission_id !== attempt.id) {
        throw new Error(
          "Storage was not confirmed. Retry the same information.",
        );
      }

      if (
        !result.data.duplicate &&
        !trackedSuccessIdsRef.current.has(attempt.id)
      ) {
        trackEvent("generate_lead", {
          segment: "commercial",
          landing_page: attempt.payload.attribution.landing_page ?? "unknown",
          landing_page_type:
            attempt.payload.attribution.landing_page_type ?? "unknown",
          property_type: form.propertyType,
          bill_bracket: form.monthlyBillRange,
          placement,
        });
        trackedSuccessIdsRef.current.add(attempt.id);
      }
      try {
        sessionStorage.removeItem(ATTEMPT_KEY);
      } catch {
        /* API deduplicates retries. */
      }
      setHasUnconfirmedAttempt(false);
      attemptRef.current = null;
      setSuccess(true);
    } catch (cause) {
      // A validation rejection occurs before storage. Other errors may follow a
      // successful write, so retain the exact UUID and payload for safe retries.
      const validation = (cause as { statusCode?: number })?.statusCode === 400;
      if (validation) {
        attemptRef.current = null;
        try {
          sessionStorage.removeItem(ATTEMPT_KEY);
        } catch {
          /* Memory cleared. */
        }
      }
      setHasUnconfirmedAttempt(!validation);
      setError(
        validation && cause instanceof Error
          ? cause.message
          : "Your request was not confirmed as received. Please try again.",
      );
      trackEvent("form_submit_error", {
        segment: "commercial",
        landing_page_type: touch?.landing_page_type ?? "unknown",
        placement,
      });
    } finally {
      submitInFlightRef.current = false;
      setSubmitting(false);
    }
  };

  const SuccessHeading = inline ? "h3" : "h2";
  const content = success ? (
    <div
      role="status"
      className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg"
    >
      <CheckCircle className="mx-auto mb-4 h-12 w-12 text-status-success" aria-hidden="true" />
      <SuccessHeading className="text-2xl font-bold text-foreground">
        Project information received
      </SuccessHeading>
      <p className="mt-3 text-muted-foreground">
        California Rate Relief saved your information for review. A matched
        commercial solar provider may contact you about the project. This is
        not a quote or approval.
      </p>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit}
      onFocus={markStarted}
      className="rounded-2xl border border-border bg-card p-6 shadow-xl md:p-10"
    >
      <fieldset
        disabled={submitting || hasUnconfirmedAttempt}
        className="contents"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor={fid("company-name")}>Company or organization</Label>
            <Input
              id={fid("company-name")}
              value={form.companyName}
              onChange={(e) => update("companyName", e.target.value)}
              required
              autoComplete="organization"
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={fid("property-type")}>Property type</Label>
            <select
              id={fid("property-type")}
              value={form.propertyType}
              onChange={(e) => update("propertyType", e.target.value)}
              required
              className={selectClass}
            >
              <option value="">Select property type</option>
              <option value="warehouse">Warehouse or distribution</option>
              <option value="manufacturing">
                Manufacturing or industrial facility
              </option>
              <option value="office">Office</option>
              <option value="retail">Retail</option>
              <option value="multifamily">Multifamily</option>
              <option value="agricultural">Agricultural</option>
              <option value="school_or_nonprofit">
                School, church, or nonprofit
              </option>
              <option value="other">Other commercial property</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor={fid("property-control")}>
              Your control of the property
            </Label>
            <select
              id={fid("property-control")}
              value={form.propertyControl}
              onChange={(e) => update("propertyControl", e.target.value)}
              required
              className={selectClass}
            >
              <option value="">Select one</option>
              <option value="owner">Owner</option>
              <option value="authorized_representative">
                Authorized owner representative
              </option>
              <option value="tenant_with_authority">
                Tenant with project authority
              </option>
              <option value="property_manager">Property manager</option>
              <option value="other_or_unsure">Other or unsure</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor={fid("commercial-location")}>Project address or city</Label>
            <Input
              id={fid("commercial-location")}
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              required
              autoComplete="street-address"
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={fid("commercial-city")}>Project city</Label>
            <Input
              id={fid("commercial-city")}
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              maxLength={80}
              autoComplete="address-level2"
              required
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={fid("commercial-market")}>Project state or district</Label>
            <select id={fid("commercial-market")} value={form.serviceMarket} onChange={(e) => update("serviceMarket", e.target.value as ServiceMarket)} required className={selectClass}>
              <option value="">Select project market</option>
              {selectableServiceMarkets.map(([code, label]) => <option key={code} value={code}>{label}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor={fid("commercial-service-zip")}>Project ZIP code</Label>
            <Input
              id={fid("commercial-service-zip")}
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              pattern="[0-9]{5}"
              value={form.serviceZip}
              onChange={(e) =>
                update(
                  "serviceZip",
                  e.target.value.replace(/\D/g, "").slice(0, 5),
                )
              }
              required
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={fid("commercial-utility")}>Electric utility</Label>
            <Input
              id={fid("commercial-utility")}
              value={form.utilityProvider}
              onChange={(e) => update("utilityProvider", e.target.value)}
              placeholder="PG&E, SCE, SDG&E, municipal, or other"
              required
              autoComplete="off"
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={fid("commercial-bill")}>
              Typical monthly electric bill
            </Label>
            <select
              id={fid("commercial-bill")}
              value={form.monthlyBillRange}
              onChange={(e) => update("monthlyBillRange", e.target.value)}
              required
              className={selectClass}
            >
              <option value="">Select a range</option>
              <option value="under_2500">Under $2,500</option>
              <option value="2500_9999">$2,500–$9,999</option>
              <option value="10000_24999">$10,000–$24,999</option>
              <option value="25000_49999">$25,000–$49,999</option>
              <option value="50000_plus">$50,000+</option>
              <option value="unknown">Not sure</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor={fid("project-timeline")}>Project timing</Label>
            <select
              id={fid("project-timeline")}
              value={form.projectTimeline}
              onChange={(e) => update("projectTimeline", e.target.value)}
              required
              className={selectClass}
            >
              <option value="">Select timing</option>
              <option value="0_3_months">Within 3 months</option>
              <option value="3_6_months">3–6 months</option>
              <option value="6_12_months">6–12 months</option>
              <option value="12_plus_months">More than 12 months</option>
              <option value="researching">Researching options</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor={fid("commercial-contact-name")}>Contact name</Label>
            <Input
              id={fid("commercial-contact-name")}
              value={form.contactName}
              onChange={(e) => update("contactName", e.target.value)}
              required
              className="h-12 text-base"
              autoComplete="name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={fid("commercial-phone")}>Phone</Label>
            <Input
              id={fid("commercial-phone")}
              type="tel"
              inputMode="tel"
              maxLength={20}
              value={form.phone}
              onChange={(e) => {
                const phone = formatUsPhoneInput(e.target.value);
                update("phone", phone);
                if (phoneError && isValidUsPhone(phone)) setPhoneError("");
              }}
              onBlur={() => {
                if (form.phone) setPhoneError(usPhoneError(form.phone));
              }}
              required
              aria-invalid={Boolean(phoneError) || undefined}
              aria-describedby={fid("commercial-phone-help")}
              className={`h-12 text-base ${phoneError ? "border-destructive" : ""}`}
              autoComplete="tel"
            />
            <p
              id={fid("commercial-phone-help")}
              className={`text-xs ${phoneError ? "font-medium text-destructive" : "text-muted-foreground"}`}
            >
              {phoneError || US_PHONE_HINT}
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor={fid("commercial-email")}>Email</Label>
            <Input
              id={fid("commercial-email")}
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              required
              className="h-12 text-base"
              autoComplete="email"
              autoCapitalize="none"
              spellCheck={false}
            />
          </div>
        </div>

        <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted-foreground">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
            required
            className="mt-1 h-5 w-5 rounded border-input"
          />
          <span>
            I authorize California Rate Relief and a matched commercial solar
            provider to contact me about this project using the phone and email
            I provided.
          </span>
        </label>
      </fieldset>

      {error && (
        <div
          role="alert"
          className="mt-4 rounded-lg bg-destructive/10 p-3 text-sm text-destructive"
        >
          <p>{error}</p>
          {hasUnconfirmedAttempt && (
            <Button
              type="button"
              variant="outline"
              className="mt-3 w-full"
              onClick={() => {
                attemptRef.current = null;
                try {
                  sessionStorage.removeItem(ATTEMPT_KEY);
                } catch {
                  /* Memory cleared. */
                }
                setHasUnconfirmedAttempt(false);
                setError("");
              }}
            >
              Start a new submission with edits
            </Button>
          )}
        </div>
      )}

      <Button
        type="submit"
        disabled={submitting}
        className="mt-6 h-12 w-full text-base"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending project information...
          </>
        ) : (
          "Request a commercial project review"
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Submitting does not create a quote, approval, or obligation.
      </p>
    </form>
  );

  if (!inline) {
    return (
      <div ref={(node) => { rootRef.current = node; }} className={className || undefined}>
        {content}
      </div>
    );
  }
  return (
    <section
      ref={(node) => { rootRef.current = node; }}
      id={sectionId}
      aria-labelledby={fid("heading")}
      className={`scroll-mt-24 ${className}`}
    >
      <h2 id={fid("heading")} className="text-2xl font-bold text-foreground">
        {heading ?? CTA_COPY.commercial.formHeading}
      </h2>
      <p className="mb-6 mt-2 text-foreground/80">
        {intro ?? CTA_COPY.commercial.formIntro}
      </p>
      {content}
    </section>
  );
}
