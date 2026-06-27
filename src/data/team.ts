export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  specs: string[];
  bio: string;
  photo?: string;
  highlight?: boolean;
};

export const team: TeamMember[] = [
  {
    slug: "anna-plaskota-gladosz",
    name: "Anna Plaskota-Gładosz",
    role: "Położna · CDL",
    specs: ["Prowadzenie ciąży fizjologicznej", "Szkoła Rodzenia", "Wsparcie laktacyjne"],
    bio: "Położna z ponad 10-letnim doświadczeniem, specjalistka w prowadzeniu ciąży fizjologicznej. Prowadzi konsultacje kliniczne i edukację przedporodową.",
    photo: "/team/anna-plaskota-gladosz.jpg",
    highlight: true,
  },
  {
    slug: "anna-buczek",
    name: "Anna Buczek",
    role: "Położna",
    specs: ["Edukacja położnych", "Koordynacja programów szkoleniowych"],
    bio: "Specjalistka w edukacji położnych i zarządzaniu projektami szkoleniowymi. Koordynuje programy rozwojowe dla medyków.",
    photo: "/team/anna-buczek.jpg",
  },
  {
    slug: "magdalena-golba",
    name: "Magdalena Golba",
    role: "Położna",
    specs: ["Szkolenia medyczne", "Warsztaty praktyczne", "Mentoring"],
    bio: "Ekspertka w szkoleniach medycznych i rozwoju kompetencji położnych. Prowadzi warsztaty praktyczne i sesje mentoringowe.",
    photo: "/team/magdalena-golba.jpg",
  },
  {
    slug: "artur-gladosz",
    name: "Artur Gładosz",
    role: "Fizjoterapeuta · MBA",
    specs: ["Fizjoterapia", "Zarządzanie placówką", "Kierownik placówki"],
    bio: "Kierownik placówki NZOZ Medi3. Fizjoterapeuta z doświadczeniem menedżerskim - odpowiada za organizację i rozwój poradni.",
    photo: "/team/artur-gladosz2.png",
  },
  {
    slug: "barbara-pieklo",
    name: "dr Barbara Piekło",
    role: "Dietetyk kliniczny",
    specs: ["Dietetyka kliniczna", "Psychodietetyka", "Suplementacja w ciąży", "Interpretacja badań"],
    bio: "Dietetyk kliniczny i psychodietetyk - specjalizuje się w suplementacji oraz interpretacji badań laboratoryjnych w ciąży.",
    photo: "/team/barbara-pieklo.jpg",
  },
  {
    slug: "kinga-niecko",
    name: "mgr Kinga Niećko",
    role: "Położna · NFZ",
    specs: ["Prowadzenie ciąży fizjologicznej", "Opieka w ramach NFZ"],
    bio: "Jedna z pierwszych w Małopolsce położnych prowadzących ciążę fizjologiczną w ramach umowy z NFZ.",
    photo: "/team/kinga-niecko.jpg",
  },
  {
    slug: "katarzyna-soja-chydzinska",
    name: "mgr Katarzyna Soja-Chydzińska",
    role: "Fizjoterapeutka",
    specs: ["Fizjoterapia uroginekologiczna", "Kinesiotaping w ciąży"],
    bio: "Fizjoterapeutka uroginekologiczna - ekspertka w kinesiotapingu w ciąży i terapii dna miednicy.",
    photo: "/team/katarzyna-soja-chydzinska.jpg",
  },
];
