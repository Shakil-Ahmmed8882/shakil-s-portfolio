export type TSocialId = "github" | "linkedin" | "facebook" | "email";

export type TSocial = {
  id: TSocialId;
  label: string;
  href: string;
};

export const socialLinks: TSocial[] = [
  { id: "github", label: "GitHub", href: "https://github.com/shakilahmmed8882" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/shakilahmmed8882" },
  { id: "facebook", label: "Facebook", href: "https://facebook.com/shakilahmmed8882" },
  { id: "email", label: "Email", href: "mailto:shakilahmmed8882@gmail.com" },
];
