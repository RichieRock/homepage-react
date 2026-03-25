export enum LanguageLevel {
  NATIVE = "Native",
  FULL = "Full professional Proficiency",
  GOOD = "Good communication skills",
  BEGINNER = "Learning",
}

export interface Language {
  name: string;
  level: LanguageLevel;
}

export const languages: Language[] = [
  {
    name: "English",
    level: LanguageLevel.FULL,
  },
  {
    name: "Suomi",
    level: LanguageLevel.NATIVE,
  },
  {
    name: "Svenska",
    level: LanguageLevel.GOOD,
  },
  {
    name: "Français",
    level: LanguageLevel.GOOD,
  },
  {
    name: "中文 (Chinese)",
    level: LanguageLevel.BEGINNER,
  },
];
