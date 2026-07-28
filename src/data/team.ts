export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  specs: string[];
  bio: string;
  bioMore?: string;
  photo?: string;
  highlight?: boolean;
};

export const team: TeamMember[] = [
  {
    slug: "anna-plaskota-gladosz",
    name: "Anna Plaskota-Gładosz",
    role: "Położna · CDL · MBA",
    specs: ["Prowadzenie ciąży fizjologicznej", "Porada laktacyjna", "Planowanie ciąży"],
    bio: "Położna z ponad 14-letnim doświadczeniem, specjalistka w prowadzeniu ciąży fizjologicznej, Certyfikowany Doradca Laktacyjny. Zafascynowana opieką okołoporodową.",
    bioMore: "Edukację i profilaktykę stawia na pierwszym miejscu. Marzy o utworzeniu miejsca, w którym fizjologia kobiety byłaby szanowana, a jej instynkt macierzyński wspierany. Dom narodzin wraz z opieką okołoporodową to jej cel.",
    photo: "anna-plaskota-gladosz.jpg",
    highlight: true,
  },
  {
    slug: "anna-buczek",
    name: "Anna Buczek",
    role: "Położna - Edukator ds. laktacji",
    specs: ["Prowadzenie ciąży fizjologicznej", "Wizyty patronażowe", "Wymazy ginekologiczne"],
    bio: "Położna z ponad 7-letnim doświadczeniem, specjalizująca się w prowadzeniu ciąży fizjologicznej oraz opiece nad matką i dzieckiem w pierwszych tygodniach ich wspólnej drogi.",
    bioMore: "Pasjonatka naturalnego położnictwa, która swoją wiedzą i praktyką dzieliła się także ze studentami jako wykładowczyni na Uniwersytecie Rzeszowskim. W pracy łączy akademicką wiedzę z empatycznym, pełnym uważności podejściem do kobiety i noworodka.",
    photo: "anna-buczek.jpg",
  },
  {
    slug: "magdalena-golba",
    name: "Magdalena Golba",
    role: "Położna - CDL",
    specs: ["Wizyty patronażowe", "Porada laktacyjna", "Chustonoszenie"],
    bio: "Położna z dużym doświadczeniem w pracy w środowisku Położna, edukator ds. laktacji, certyfikowany doradca noszenia dzieci w chustach i nosidłach miękkich.",
    bioMore: "Opiekuje się pacjentkami w Gabinecie Położnej Środowiskowej w Połańcu. Przygotowuje pacjentki w ramach edukacji przedporodowej oraz przeprowadza wizyty patronażowe ze szczególnym wsparciem okresu laktacji. Towarzyszy podczas domowych narodzin.",
    photo: "magdalena-golba.jpg",
  },
  {
    slug: "artur-gladosz",
    name: "Artur Gładosz",
    role: "Fizjoterapeuta · MBA",
    specs: ["Fizjoterapia", "Zarządzanie placówką", "Kierownik placówki"],
    bio: "Kierownik placówki NZOZ Medi3. Fizjoterapeuta z doświadczeniem menedżerskim - odpowiada za organizację i rozwój poradni.",
    photo: "artur-gladosz2.png",
  },
  {
    slug: "barbara-pieklo",
    name: "dr Barbara Piekło",
    role: "Dietetyk kliniczny",
    specs: ["Dietetyka kliniczna", "Psychodietetyka", "Suplementacja w ciąży", "Interpretacja badań"],
    bio: "Dietetyk kliniczny i psychodietetyk - specjalizuje się w suplementacji oraz interpretacji badań laboratoryjnych w ciąży.",
    photo: "barbara-pieklo.jpg",
  },
  {
    slug: "katarzyna-soja-chydzinska",
    name: "mgr Katarzyna Soja-Chydzińska",
    role: "Fizjoterapeutka",
    specs: ["Fizjoterapia uroginekologiczna", "Kinesiotaping w ciąży"],
    bio: "Fizjoterapeutka uroginekologiczna - ekspertka w kinesiotapingu w ciąży i terapii dna miednicy.",
    photo: "katarzyna-soja-chydzinska.jpg",
  },
];
