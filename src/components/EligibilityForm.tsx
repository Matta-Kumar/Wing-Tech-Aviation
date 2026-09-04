"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import ReCAPTCHA from "react-google-recaptcha";

const inputClass =
  "mt-2 w-full rounded-sm border border-hairline bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-slate/60 focus:border-navy focus:outline-none";
const labelClass = "block text-sm font-medium text-charcoal";
const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export default function EligibilityForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const recaptchaToken = recaptchaRef.current?.getValue() ?? undefined;
    if (recaptchaSiteKey && !recaptchaToken) {
      setStatus("error");
      setErrorMessage("Please complete the reCAPTCHA check.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "eligibility",
          studentName: data.get("studentName"),
          mobile: data.get("mobile"),
          email: data.get("email"),
          dob: data.get("dob"),
          city: data.get("city"),
          yearOfPassing: data.get("yearOfPassing"),
          board: data.get("board"),
          preferredProgramme: data.get("preferredProgramme"),
          physics: data.get("physics"),
          mathematics: data.get("mathematics"),
          chemistry: data.get("chemistry"),
          percentage: data.get("percentage"),
          recaptchaToken,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      recaptchaRef.current?.reset();
    }
  }

  if (status === "success") {
    return (
      <div className={className}>
        <p className="text-sm text-charcoal">
          Thank you — your eligibility submission has been received. Our
          counselling team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="studentName">
            Student Name
          </label>
          <input
            className={inputClass}
            type="text"
            id="studentName"
            name="studentName"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="mobile">
            Mobile Number
          </label>
          <input
            className={inputClass}
            type="tel"
            id="mobile"
            name="mobile"
            autoComplete="tel"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            className={inputClass}
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="dob">
            Date of Birth
          </label>
          <input className={inputClass} type="date" id="dob" name="dob" />
        </div>
        <div>
          <label className={labelClass} htmlFor="city">
            City
          </label>
          <input
            className={inputClass}
            type="text"
            id="city"
            name="city"
            autoComplete="address-level2"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="yearOfPassing">
            Year of Passing
          </label>
          <input
            className={inputClass}
            type="text"
            id="yearOfPassing"
            name="yearOfPassing"
            inputMode="numeric"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="board">
            Board
          </label>
          <input className={inputClass} type="text" id="board" name="board" />
        </div>
        <div>
          <label className={labelClass} htmlFor="preferredProgramme">
            Preferred Programme
          </label>
          <select
            className={inputClass}
            id="preferredProgramme"
            name="preferredProgramme"
            defaultValue=""
          >
            <option value="" disabled>
              Select a programme
            </option>
            <option value="cpl">Commercial Pilot Licence (CPL)</option>
            <option value="ame">
              Aircraft Maintenance Engineering (AME)
            </option>
            <option value="cabin-crew">Cabin Crew</option>
            <option value="airport-management">
              Airport Management &amp; Operations
            </option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="physics">
            Physics
          </label>
          <input
            className={inputClass}
            type="text"
            id="physics"
            name="physics"
            placeholder="Marks / percentage"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="mathematics">
            Mathematics
          </label>
          <input
            className={inputClass}
            type="text"
            id="mathematics"
            name="mathematics"
            placeholder="Marks / percentage"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="chemistry">
            Chemistry
          </label>
          <input
            className={inputClass}
            type="text"
            id="chemistry"
            name="chemistry"
            placeholder="Marks / percentage"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="percentage">
            Percentage
          </label>
          <input
            className={inputClass}
            type="text"
            id="percentage"
            name="percentage"
            placeholder="Overall percentage"
          />
        </div>
      </div>

      {recaptchaSiteKey && (
        <div className="mt-6">
          <ReCAPTCHA sitekey={recaptchaSiteKey} ref={recaptchaRef} />
        </div>
      )}

      {status === "error" && (
        <p className="mt-6 text-sm text-danger">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-navy-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit"}
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>
    </form>
  );
}
