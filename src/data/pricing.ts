export type PriceItem = {
  name: string;
  price?: string;
  note?: string;
  nfz?: boolean;
};

export type PriceCategory = {
  slug: string;
  name: string;
  intro?: string;
  items: PriceItem[];
};

// TODO: uzupełnić aktualne kwoty (pole `price`). "-" oznacza placeholder.
export const pricing: PriceCategory[] = [
  {
    slug: "poloznictwo",
    name: "Położnictwo i opieka okołoporodowa",
    intro: "Świadczenia w ramach NFZ - bez skierowania. Płatne wizyty komercyjne dla osób spoza puli NFZ.",
    items: [
      { name: "Wizyta położnej w ciąży (NFZ)", price: "bezpłatnie", nfz: true },
      { name: "Wizyta patronażowa po porodzie (NFZ)", price: "bezpłatnie", nfz: true },
      { name: "Konsultacja położnej - komercyjnie", price: "-" },
      { name: "Porada laktacyjna w gabinecie", price: "-" },
      { name: "Porada laktacyjna z dojazdem", price: "-" },
    ],
  },
  {
    slug: "szkola-rodzenia",
    name: "Szkoła Rodzenia",
    intro: "Cykl zajęć grupowych i indywidualnych - przygotowanie do porodu i pierwszych tygodni z dzieckiem.",
    items: [
      { name: "Szkoła Rodzenia - pełny cykl (NFZ)", price: "bezpłatnie", nfz: true },
      { name: "Pojedyncze zajęcia tematyczne - komercyjnie", price: "-" },
      { name: "Konsultacja indywidualna z położną", price: "-" },
    ],
  },
  {
    slug: "fizjoterapia",
    name: "Fizjoterapia",
    intro: "Diagnostyka i terapia - uroginekologia, okres okołoporodowy, niemowlęta, dorośli.",
    items: [
      { name: "Konsultacja fizjoterapeutyczna (pierwsza wizyta)", price: "-" },
      { name: "Wizyta terapeutyczna - dorośli", price: "-" },
      { name: "Wizyta terapeutyczna - niemowlęta", price: "-" },
      { name: "Fizjoterapia uroginekologiczna", price: "-" },
    ],
  },
  {
    slug: "neurologopeda",
    name: "Neurologopeda",
    intro: "Wczesna diagnostyka i wsparcie rozwoju mowy oraz karmienia.",
    items: [
      { name: "Konsultacja neurologopedyczna", price: "-" },
      { name: "Wizyta terapeutyczna", price: "-" },
    ],
  },
  {
    slug: "szkolenia",
    name: "Szkolenia i wydarzenia",
    items: [
      { name: "Pierwsza Pomoc Noworodka i Niemowlęcia - 11.06.2026", price: "-" },
    ],
  },
];
