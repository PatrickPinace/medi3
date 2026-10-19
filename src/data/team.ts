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
    slug: "katarzyna-kulis",
    name: "Katarzyna Kulis",
    role: "Położna",
    specs: ["Porody domowe", "Opieka okołoporodowa"],
    bio: "Położna pracująca w zespole położnych przyjmujących porody domowe. Wspiera kobiety w czasie ciąży, porodu i połogu.",
    photo: "katarzyna-kulis.jpg",
  },
  {
    slug: "aleksandra-kludka-galeza",
    name: "Aleksandra Kłudka-Gałęza",
    role: "Położna",
    specs: ["Opieka w ciąży i połogu", "Wizyty domowe", "Pierwsze tygodnie macierzyństwa"],
    bio: "Położna z doświadczeniem zdobytym na oddziale ginekologiczno-położniczym i noworodkowym, wspierająca kobiety w okresie ciąży, połogu i pierwszych tygodniach macierzyństwa.",
    bioMore: "W swojej pracy patrzy na kobietę i dziecko holistycznie, z szacunkiem do fizjologii, indywidualnych potrzeb i decyzji każdej mamy. Stale poszerza swoją wiedzę i umiejętności, aby zapewniać opiekę opartą na aktualnej wiedzy, a jednocześnie pełną uważności i empatii. Podczas wizyt domowych szczególnie zależy jej na tworzeniu atmosfery spokoju i bezpieczeństwa. Wierzy, że dobra opieka położnej to nie tylko wiedza i doświadczenie, ale także obecność, wsparcie i budowanie w kobiecie zaufania do siebie oraz własnego ciała.",
    photo: "aleksandra-kludka-galeza.jpg",
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
    slug: "paulina-dzialo",
    name: "Paulina Działo",
    role: "Dietetyk kliniczny · Trener personalny",
    specs: ["Dietetyka kliniczna", "Żywienie kobiet w ciąży i dzieci", "Program „Moje Zdrowie”"],
    bio: "Dietetyk kliniczny, trener personalny i instruktor fitness. Ukończyła studia magisterskie z dietetyki oraz studia podyplomowe z dietetyki pediatrycznej i przygotowania pedagogicznego.",
    bioMore: "W swojej pracy pomaga budować zdrowe nawyki żywieniowe i dopasowuje zalecenia do potrzeb oraz codziennego życia każdej osoby. Łączy wiedzę z zakresu dietetyki i aktywności fizycznej, stawiając na indywidualne podejście i praktyczne rozwiązania. Szczególnie bliska jest jej tematyka żywienia kobiet w ciąży, dzieci i rodzin. Współpracuje z Fundacją Medi3, gdzie prowadzi wizyty podsumowujące w ramach programu „Moje Zdrowie”. Podczas spotkań pomaga pacjentom lepiej zrozumieć wyniki badań i przekłada je na praktyczne zalecenia dotyczące codziennego odżywiania oraz zdrowych nawyków.",
    photo: "paulina-dzialo.jpg",
  },
  {
    slug: "katarzyna-soja-chydzinska",
    name: "mgr Katarzyna Soja-Chydzińska",
    role: "Fizjoterapeutka",
    specs: ["Fizjoterapia uroginekologiczna", "Kinesiotaping w ciąży"],
    bio: "Fizjoterapeutka uroginekologiczna - ekspertka w kinesiotapingu w ciąży i terapii dna miednicy.",
    photo: "katarzyna-soja-chydzinska.jpg",
  },
  {
    slug: "julia-rodzinka-trybuszek",
    name: "Julia Rodzinka-Trybuszek",
    role: "Fizjoterapeutka · Instruktor fitness dla kobiet w ciąży",
    specs: ["Fizjoterapia uroginekologiczna", "Prawidłowy rozwój dziecka"],
    bio: "Magister fizjoterapii oraz certyfikowany instruktor fitness Państwowej Akademii Kultury i Sportu. Pasjonatka fizjoterapii uroginekologicznej.",
    bioMore: "Jej zawodowe zainteresowania obejmują kompleksową opiekę nad kobietą na różnych etapach życia, również w ciąży i okresie okołoporodowym oraz prawidłowy rozwój dziecka. W codziennej pracy łączy aktualną wiedzę medyczną, zdobywaną podczas licznych szkoleń, z indywidualnym, pełnym empatii i wsparcia podejściem do pacjentek.",
    photo: "julia-rodzinka-trybuszek.jpg",
  },
];
