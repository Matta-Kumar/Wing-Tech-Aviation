import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  formType: "contact";
  name: string;
  mobile: string;
  email: string;
  city: string;
  preferredProgramme: string;
  message: string;
  recaptchaToken?: string;
};

type EligibilityPayload = {
  formType: "eligibility";
  studentName: string;
  mobile: string;
  email: string;
  dob: string;
  city: string;
  yearOfPassing: string;
  board: string;
  preferredProgramme: string;
  physics: string;
  mathematics: string;
  chemistry: string;
  percentage: string;
  recaptchaToken?: string;
};

type Payload = ContactPayload | EligibilityPayload;

const PROGRAMME_LABELS: Record<string, string> = {
  cpl: "Commercial Pilot Licence (CPL)",
  ame: "Aircraft Maintenance Engineering (AME)",
  "cabin-crew": "Cabin Crew",
  "airport-management": "Airport Management & Operations",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderRows(fields: [string, string][]) {
  return fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#5B6472;white-space:nowrap;">${escapeHtml(
          label
        )}</td><td style="padding:6px 0;color:#242424;">${escapeHtml(
          value || "—"
        )}</td></tr>`
    )
    .join("");
}

async function verifyRecaptcha(token: string | undefined, remoteIp?: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  // Not configured yet — don't block submissions while the site key is
  // pending from Google's reCAPTCHA admin console.
  if (!secret) return true;

  if (!token) return false;

  const params = new URLSearchParams({ secret, response: token });
  if (remoteIp) params.set("remoteip", remoteIp);

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error("reCAPTCHA verification failed:", err);
    return false;
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO?.split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (!apiKey || !to?.length) {
    console.error(
      "Form submission received but RESEND_API_KEY or CONTACT_EMAIL_TO is not configured."
    );
    return NextResponse.json(
      { ok: false, error: "Form submissions are not configured yet." },
      { status: 503 }
    );
  }

  let payload: Payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  if (
    !payload ||
    (payload.formType !== "contact" && payload.formType !== "eligibility")
  ) {
    return NextResponse.json(
      { ok: false, error: "Invalid form type." },
      { status: 400 }
    );
  }

  const remoteIp = request.headers.get("x-forwarded-for")?.split(",")[0].trim();
  const recaptchaOk = await verifyRecaptcha(payload.recaptchaToken, remoteIp);
  if (!recaptchaOk) {
    return NextResponse.json(
      { ok: false, error: "reCAPTCHA verification failed. Please try again." },
      { status: 400 }
    );
  }

  const programme = PROGRAMME_LABELS[payload.preferredProgramme] ?? payload.preferredProgramme;

  let subject: string;
  let rows: [string, string][];

  if (payload.formType === "contact") {
    if (!payload.name || !payload.mobile || !payload.email) {
      return NextResponse.json(
        { ok: false, error: "Name, mobile and email are required." },
        { status: 400 }
      );
    }
    subject = `New enquiry from ${payload.name}`;
    rows = [
      ["Name", payload.name],
      ["Mobile", payload.mobile],
      ["Email", payload.email],
      ["City", payload.city],
      ["Preferred Programme", programme],
      ["Message", payload.message],
    ];
  } else {
    if (!payload.studentName || !payload.mobile || !payload.email) {
      return NextResponse.json(
        { ok: false, error: "Student name, mobile and email are required." },
        { status: 400 }
      );
    }
    subject = `New eligibility submission from ${payload.studentName}`;
    rows = [
      ["Student Name", payload.studentName],
      ["Mobile", payload.mobile],
      ["Email", payload.email],
      ["Date of Birth", payload.dob],
      ["City", payload.city],
      ["Year of Passing", payload.yearOfPassing],
      ["Board", payload.board],
      ["Preferred Programme", programme],
      ["Physics", payload.physics],
      ["Mathematics", payload.mathematics],
      ["Chemistry", payload.chemistry],
      ["Percentage", payload.percentage],
    ];
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL ?? "Wing Tech Aviation <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject,
      html: `<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">${renderRows(
        rows
      )}</table>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send your submission. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Form submission failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your submission. Please try again." },
      { status: 500 }
    );
  }
}
