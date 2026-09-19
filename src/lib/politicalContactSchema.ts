import { z } from "zod";

export const ROLE_OPTIONS = [
  "Candidate",
  "Campaign Manager / Director",
  "Digital / Media Director",
  "Party Official / Strategist",
  "Agency / Consultant",
  "Other",
] as const;

export const SERVICE_OPTIONS = [
  "AI Calling",
  "WhatsApp / IRM",
  "Bulk SMS",
  "Voice / IVR",
  "Websites & Apps",
  "Automation & Analytics",
] as const;

const requiredText = z.string().trim().min(1, "This field is required");

export const politicalContactSchema = z.object({
  fullName: requiredText,
  officialEmail: requiredText.email("Please enter a valid official email address"),
  phoneWhatsApp: requiredText.min(8, "Enter a valid phone or WhatsApp number"),
  organizationName: requiredText,
  role: z.enum(ROLE_OPTIONS, {
    errorMap: () => ({ message: "This field is required" }),
  }),
  targetRegion: requiredText,
  servicesNeeded: z.array(z.string()).min(1, "This field is required"),
  upcomingElectionDate: z.string().optional(),
});

export type PoliticalContactFormData = z.infer<typeof politicalContactSchema>;

export const CONTACT_EMAIL = "chaitanykumara4349@gmail.com";
