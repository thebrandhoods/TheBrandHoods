import { z } from "zod";

export const serviceOptions = [
  "Branding",
  "Website",
  "SEO",
  "Social Media",
  "Google Ads",
  "Meta Ads",
  "Content",
  "Marketing Strategy",
  "Other",
] as const;

export const budgetOptions = [
  "Not sure yet",
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000+",
  "Retainer / monthly",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please add your name").max(80),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.email("Enter a valid email address").max(160),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a number we can reach you on")
    .max(24)
    .regex(/^[+()0-9\s-]+$/, "Numbers, spaces and + only"),
  website: z
    .string()
    .trim()
    .max(160)
    .optional()
    .or(z.literal("")),
  services: z.array(z.enum(serviceOptions)).max(9).default([]),
  budget: z.enum(budgetOptions).default("Not sure yet"),
  message: z
    .string()
    .trim()
    .min(20, "A little more detail helps us reply properly")
    .max(2000),
  /** Spam trap — must stay empty. */
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactValues = z.output<typeof contactSchema>;
