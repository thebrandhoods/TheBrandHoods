import { Archivo, Geist, Instrument_Serif } from "next/font/google";

/** Body + UI sans. */
export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

/** Display face — heavy, uppercase, tight. Does the visual work. */
export const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

/** Editorial accent used sparingly for flourishes and pull quotes. */
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const fontVariables = [
  geistSans.variable,
  archivo.variable,
  instrumentSerif.variable,
].join(" ");
