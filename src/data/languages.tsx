export enum LanguageLevel {
  NATIVE = 'Native',
  FULL = 'Full professional Proficiency',
  GOOD = 'Good communication skills',
}

export interface Language {
  name: string
  level: LanguageLevel
}

export const languages: Language[] = [
  {
    name: 'English',
    level: LanguageLevel.FULL,
  },
  {
    name: 'Finnish',
    level: LanguageLevel.NATIVE,
  },
  {
    name: 'Swedish',
    level: LanguageLevel.GOOD,
  },
  {
    name: 'French',
    level: LanguageLevel.GOOD,
  },
]
