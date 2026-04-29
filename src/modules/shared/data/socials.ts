export type TSocialId = "github" | "linkedin" | "facebook" | "email";

export type TSocial = {
  id: TSocialId;
  label: string;
  href: string;
};

export const CONTACT_EMAIL = "shakilahmmed8882@gmail.com";

export const socialLinks: TSocial[] = [
  { id: "github", label: "GitHub", href: "https://github.com/Shakil-Ahmmed8882" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/shakil--ahmmed/" },
  { id: "facebook", label: "Facebook", href: "https://web.facebook.com/shakil.ahmmed.206406" },
  { id: "email", label: "Email", href: `mailto:${CONTACT_EMAIL}` },
];
