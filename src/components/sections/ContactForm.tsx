import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { cn } from "../../lib/utils";
import {
  CONTACT_EMAIL,
  politicalContactSchema,
  SERVICE_OPTIONS,
  type PoliticalContactFormData,
} from "../../lib/politicalContactSchema";
import CTAButton from "../ui/CTAButton";

const inputClass = (invalid?: boolean) =>
  cn(
    "font-body w-full rounded-xl border bg-white/[0.04] px-3.5 py-2.5 text-sm text-white outline-none transition-colors",
    "placeholder:text-white/35 [color-scheme:dark]",
    invalid
      ? "border-red-400/70 focus:border-red-400"
      : "border-white/10 focus:border-electric/70",
  );

function RequiredMark() {
  return (
    <span className="ml-0.5 text-red-500" aria-hidden="true">
      *
    </span>
  );
}

function Field({
  label,
  htmlFor,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="font-body text-sm text-white/70">
        {label}
        <RequiredMark />
      </label>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p className="font-body mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function buildMailto(data: PoliticalContactFormData) {
  const lines = [
    `Full name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Mobile number: ${data.mobile}`,
    `Service: ${data.service}`,
  ];

  const subject = encodeURIComponent(`Service inquiry from ${data.fullName}`);
  const body = encodeURIComponent(lines.join("\n"));
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PoliticalContactFormData>({
    resolver: zodResolver(politicalContactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      service: undefined,
    },
  });

  const onSubmit = (data: PoliticalContactFormData) => {
    window.location.href = buildMailto(data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-cyan/25 bg-white/[0.04] px-6 py-10 text-center sm:px-10"
        role="status"
      >
        <CheckCircle2 className="mx-auto size-10 text-cyan" strokeWidth={1.75} aria-hidden="true" />
        <p className="font-display mt-4 text-2xl font-semibold text-white">
          Opening your email app
        </p>
        <p className="font-body mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/60">
          Send the message to {CONTACT_EMAIL} to complete your inquiry.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 lg:p-8"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        <Field label="Full name" htmlFor="fullName" error={errors.fullName?.message}>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={inputClass(!!errors.fullName)}
            aria-invalid={!!errors.fullName}
            aria-required="true"
            {...register("fullName")}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass(!!errors.email)}
            aria-invalid={!!errors.email}
            aria-required="true"
            {...register("email")}
          />
        </Field>

        <Field label="Mobile number" htmlFor="mobile" error={errors.mobile?.message}>
          <input
            id="mobile"
            type="tel"
            autoComplete="tel"
            className={inputClass(!!errors.mobile)}
            aria-invalid={!!errors.mobile}
            aria-required="true"
            {...register("mobile")}
          />
        </Field>

        <Field label="Service" htmlFor="service" error={errors.service?.message}>
          <select
            id="service"
            className={inputClass(!!errors.service)}
            aria-invalid={!!errors.service}
            aria-required="true"
            defaultValue=""
            {...register("service")}
          >
            <option value="" className="text-navy">
              Select a service
            </option>
            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service} className="text-navy">
                {service}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <CTAButton type="submit" className="w-full sm:w-auto">
          Send message
        </CTAButton>
      </div>
    </form>
  );
}
