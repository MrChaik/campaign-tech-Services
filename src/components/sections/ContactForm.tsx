import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Controller, useForm } from "react-hook-form";
import { cn } from "../../lib/utils";
import {
  CONTACT_EMAIL,
  politicalContactSchema,
  ROLE_OPTIONS,
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
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="font-body text-sm text-white/70">
        {label}
        {required ? <RequiredMark /> : null}
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
    `Official email: ${data.officialEmail}`,
    `Phone / WhatsApp: ${data.phoneWhatsApp}`,
    `Organization / Campaign: ${data.organizationName}`,
    `Role: ${data.role}`,
    `Constituency / State / Region: ${data.targetRegion}`,
    `Services needed: ${data.servicesNeeded.join(", ")}`,
    `Upcoming election date: ${data.upcomingElectionDate?.trim() || "Not provided"}`,
  ];

  const subject = encodeURIComponent(
    `Campaign inquiry from ${data.fullName} (${data.organizationName})`,
  );
  const body = encodeURIComponent(lines.join("\n"));
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PoliticalContactFormData>({
    resolver: zodResolver(politicalContactSchema),
    defaultValues: {
      fullName: "",
      officialEmail: "",
      phoneWhatsApp: "",
      organizationName: "",
      targetRegion: "",
      servicesNeeded: [],
      upcomingElectionDate: "",
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
        <Field label="Full name" htmlFor="fullName" error={errors.fullName?.message} required>
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

        <Field
          label="Official email"
          htmlFor="officialEmail"
          error={errors.officialEmail?.message}
          required
        >
          <input
            id="officialEmail"
            type="email"
            autoComplete="email"
            className={inputClass(!!errors.officialEmail)}
            aria-invalid={!!errors.officialEmail}
            aria-required="true"
            {...register("officialEmail")}
          />
        </Field>

        <Field
          label="Phone / WhatsApp"
          htmlFor="phoneWhatsApp"
          error={errors.phoneWhatsApp?.message}
          required
        >
          <input
            id="phoneWhatsApp"
            type="tel"
            autoComplete="tel"
            className={inputClass(!!errors.phoneWhatsApp)}
            aria-invalid={!!errors.phoneWhatsApp}
            aria-required="true"
            {...register("phoneWhatsApp")}
          />
        </Field>

        <Field
          label="Organization / Campaign"
          htmlFor="organizationName"
          error={errors.organizationName?.message}
          required
        >
          <input
            id="organizationName"
            type="text"
            autoComplete="organization"
            className={inputClass(!!errors.organizationName)}
            aria-invalid={!!errors.organizationName}
            aria-required="true"
            {...register("organizationName")}
          />
        </Field>

        <Field label="Your role" htmlFor="role" error={errors.role?.message} required>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <select
                id="role"
                className={inputClass(!!errors.role)}
                aria-invalid={!!errors.role}
                aria-required="true"
                name={field.name}
                ref={field.ref}
                value={field.value ?? ""}
                onBlur={field.onBlur}
                onChange={field.onChange}
              >
                <option value="">Select a role</option>
                {ROLE_OPTIONS.map((role) => (
                  <option key={role} value={role} className="text-navy">
                    {role}
                  </option>
                ))}
              </select>
            )}
          />
        </Field>

        <Field
          label="Constituency / State / Region"
          htmlFor="targetRegion"
          error={errors.targetRegion?.message}
          required
        >
          <input
            id="targetRegion"
            type="text"
            className={inputClass(!!errors.targetRegion)}
            aria-invalid={!!errors.targetRegion}
            aria-required="true"
            {...register("targetRegion")}
          />
        </Field>

        <Field
          label="Upcoming election date (optional)"
          htmlFor="upcomingElectionDate"
          error={errors.upcomingElectionDate?.message}
          className="md:col-span-2 lg:col-span-1"
        >
          <input
            id="upcomingElectionDate"
            type="date"
            className={inputClass(!!errors.upcomingElectionDate)}
            {...register("upcomingElectionDate")}
          />
        </Field>
      </div>

      <fieldset className="mt-5">
        <legend className="font-body text-sm text-white/70">
          Services needed
          <RequiredMark />
        </legend>
        <Controller
          name="servicesNeeded"
          control={control}
          render={({ field }) => (
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_OPTIONS.map((service) => {
                const checked = field.value.includes(service);
                return (
                  <label
                    key={service}
                    className={cn(
                      "font-body flex cursor-pointer items-center gap-2.5 rounded-xl border px-3 py-2.5 text-sm text-white/80 transition-colors",
                      checked
                        ? "border-electric/50 bg-electric/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20",
                    )}
                  >
                    <input
                      type="checkbox"
                      className="size-4 accent-electric"
                      checked={checked}
                      onChange={(event) => {
                        field.onChange(
                          event.target.checked
                            ? [...field.value, service]
                            : field.value.filter((item) => item !== service),
                        );
                      }}
                    />
                    {service}
                  </label>
                );
              })}
            </div>
          )}
        />
        {errors.servicesNeeded?.message ? (
          <p className="font-body mt-1.5 text-xs text-red-400" role="alert">
            {errors.servicesNeeded.message}
          </p>
        ) : null}
      </fieldset>

      <div className="mt-6">
        <CTAButton type="submit" className="w-full sm:w-auto">
          Send message
        </CTAButton>
      </div>
    </form>
  );
}
