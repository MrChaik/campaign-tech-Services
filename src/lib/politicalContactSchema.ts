import { z } from "zod";

export const SERVICE_OPTIONS = [
  "WhatsApp / IRM",
  "Bulk SMS",
  "Voice / IVR",
  "Custom Solutions",
  "Websites & Apps",
  "Automation & Analytics",
  "Campaign Command Centers",
  "Digital Forms & Surveys",
  "Campaign Data Platforms",
  "AI Calling",
  "AI Chat & Assistants",
  "AI Content & Communication",
  "AI Sentiment & Feedback",
  "AI Data Intelligence",
  "AI Workflow Automation",
  "AI Voice & IVR",
] as const;

const requiredText = z.string().trim().min(1, "This field is required");

export const politicalContactSchema = z.object({
  fullName: requiredText,
  email: requiredText.email("Please enter a valid email address"),
  mobile: requiredText.min(8, "Enter a valid mobile number"),
  service: z.enum(SERVICE_OPTIONS, {
    errorMap: () => ({ message: "This field is required" }),
  }),
});

export type PoliticalContactFormData = z.infer<typeof politicalContactSchema>;

function readContactEnv(value: string | undefined, fallback: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

export const CONTACT_EMAIL = readContactEnv(
  import.meta.env.VITE_CONTACT_EMAIL,
  "abhijit@my-leader.in",
);

export const CONTACT_MOBILE = readContactEnv(
  import.meta.env.VITE_CONTACT_MOBILE,
  "8977238573",
);
