"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { isValidPhoneNumber } from "libphonenumber-js";
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
import { isFiveDigitZip, serviceLocationFields, serviceMarkets, type ServiceMarket } from "@/lib/service-market";

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

function normalizePhone(phone: string): string {
  if (phone.trim().startsWith("+")) return phone.replace(/[^\d+]/g, "");
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return phone;
}

const selectClass =
  "h-12 w-full rounded-md border-2 border-border bg-background px-3 text-base focus:border-primary focus:outline-none";
const ATTEMPT_KEY = "crr_commercial_submission_v1";

export function CommercialAssessmentForm() {
  const [form, setForm] = useState(initialForm);
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
    });
  };

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

    const phone = normalizePhone(form.phone);
    if (!isValidPhoneNumber(phone, "US")) {
      setError("Enter a valid US phone number.");
      return;
    }
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
      });
    } finally {
      submitInFlightRef.current = false;
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-white p-8 text-center shadow-lg">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
        <h2 className="text-2xl font-bold text-slate-900">
          Project information received
        </h2>
        <p className="mt-3 text-slate-600">
          California Rate Relief saved your information for review. A matched
          commercial solar provider may contact you about the project. This is
          not a quote or approval.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={markStarted}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-10"
    >
      <fieldset
        disabled={submitting || hasUnconfirmedAttempt}
        className="contents"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="company-name">Company or organization</Label>
            <Input
              id="company-name"
              value={form.companyName}
              onChange={(e) => update("companyName", e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="property-type">Property type</Label>
            <select
              id="property-type"
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
            <Label htmlFor="property-control">
              Your control of the property
            </Label>
            <select
              id="property-control"
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
            <Label htmlFor="commercial-location">Project address or city</Label>
            <Input
              id="commercial-location"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="commercial-city">Project city</Label>
            <Input
              id="commercial-city"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              maxLength={80}
              autoComplete="address-level2"
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="commercial-market">Project state or district</Label>
            <select id="commercial-market" value={form.serviceMarket} onChange={(e) => update("serviceMarket", e.target.value as ServiceMarket)} required className={selectClass}>
              <option value="">Select project market</option>
              {serviceMarkets.map(([code, label]) => <option key={code} value={code}>{label}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="commercial-service-zip">Project ZIP code</Label>
            <Input
              id="commercial-service-zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              pattern="[0-9]{5}"
              maxLength={5}
              placeholder="90210"
              value={form.serviceZip}
              onChange={(e) =>
                update(
                  "serviceZip",
                  e.target.value.replace(/\D/g, "").slice(0, 5),
                )
              }
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="commercial-utility">Electric utility</Label>
            <Input
              id="commercial-utility"
              value={form.utilityProvider}
              onChange={(e) => update("utilityProvider", e.target.value)}
              placeholder="PG&E, SCE, SDG&E, municipal, or other"
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="commercial-bill">
              Typical monthly electric bill
            </Label>
            <select
              id="commercial-bill"
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
            <Label htmlFor="project-timeline">Project timing</Label>
            <select
              id="project-timeline"
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
            <Label htmlFor="commercial-contact-name">Contact name</Label>
            <Input
              id="commercial-contact-name"
              value={form.contactName}
              onChange={(e) => update("contactName", e.target.value)}
              required
              className="h-12"
              autoComplete="name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="commercial-phone">Phone</Label>
            <Input
              id="commercial-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              required
              className="h-12"
              autoComplete="tel"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="commercial-email">Email</Label>
            <Input
              id="commercial-email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              required
              className="h-12"
              autoComplete="email"
            />
          </div>
        </div>

        <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-600">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
            required
            className="mt-1 h-5 w-5 rounded border-slate-300"
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
          className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700"
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
      <p className="mt-3 text-center text-xs text-slate-500">
        Submitting does not create a quote, approval, or obligation.
      </p>
    </form>
  );
}
