export const site = {
  name: "Medi3",
  tagline: "Poradnie medyczne",
  phone: "881 489 851",
  phoneTel: "+48881489851",
  email: "poradnie@medi3.pl",
  city: "Mielec / Rzeszów (Podkarpackie)",
  social: {
    instagram: "https://www.instagram.com/szkolarodzenia.mielec/",
    facebook: "https://www.facebook.com/polozne.medi3",
  },
  offices: [
    {
      key: "smoczka",
      name: "Gabinet Smoczka",
      address: "ul. Wyszyńskiego 4A/7",
      hint: "Centrum Medyczne Smoczka",
      map: "https://maps.app.goo.gl/siMucC1Sknxyfc8d6",
    },
    {
      key: "korczaka",
      name: "Nowy Gabinet Korczaka",
      address: "ul. Korczaka 1A (LIBRA)",
      hint: "wjazd od ul. Czecha, gabinet nr 5 (I piętro)",
      map: "https://maps.app.goo.gl/zUK8VLPiQ4eFng359",
    },
  ],
  foundation: {
    name: "Fundacja Medi3",
    seat: "ul. Leśna 3, 39-300 Mielec",
    nip: "8172190396",
    regon: "381526310",
    krs: "0000752061",
  },
  bank: {
    recipient: "Fundacja Medi3",
    address: "ul. Leśna 3/1, 39-300 Mielec",
    accounts: [
      {
        key: "szkola-rodzenia",
        label: "Szkoła Rodzenia — osoba towarzysząca",
        description: "Wpłaty za uczestnictwo osoby towarzyszącej w Szkole Rodzenia",
        number: "62 1750 1312 6887 6097 2424 6830",
        bankName: null,
      },
      {
        key: "medykalni",
        label: "Szkolenia Medykalni",
        description: "Wpłaty za szkolenia z projektu Medykalni",
        number: "17 1750 1312 6887 7387 9978 2101",
        bankName: null,
      },
      {
        key: "ogolne",
        label: "Konto ogólne",
        description: "Wpłaty ogólne i darowizny",
        number: "81 1870 1045 2078 1051 1376 0001",
        bankName: "Nest Bank",
        swift: "NESBPLPW",
        iban: "PL81 1870 1045 2078 1051 1376 0001",
      },
    ],
    zrzutka: {
      url: "https://zrzutka.pl/6ze4nt",
      note: "Zrzutka.pl będzie prosiła o darowiznę na koszt obsługi (ok. 10–20%) — nie jest obowiązkowa. Można odznaczyć opcję dodatkowych opłat. Opcja \"ukryj moje dane\" działa — jako organizator i tak widzimy dane wpłacającego.",
    },
  },
} as const;

export const forms = {
  ciaza: "https://docs.google.com/forms/d/e/1FAIpQLSfYnmiptLnLFVWL_hDN0E8EWql9slNDenl24lbtFt9NFlmiYA/viewform",
  laktacyjna: "https://docs.google.com/forms/d/e/1FAIpQLSc3ofCMikOoJnfbVHAV_unzVjAILnuHyYrfoQK3vZ4gSnd1OQ/viewform",
  ogolny: "https://forms.gle/9MA7CVvsHRSknCUN9",
  pierwszaPomoc: "https://forms.gle/aFMJ8Biu3zF4K5eU6",
} as const;

export const resources = {
  kalkulatorTygodnia: "https://docs.google.com/spreadsheets/d/1UA6FgKizeIb2n9QNxxi8FSHY77-Mfi0nQyEWfsOjJis/edit?gid=0#gid=0",
  kalkulatorWagi: "https://docs.google.com/spreadsheets/d/1XAu_j_AGfoDjccgrW0SQZpa2y8oGPOD-NWIhcJu7A6I/edit?gid=0#gid=0",
  planPorodu: "https://docs.google.com/document/d/1dfaZXu9gaOuM0cXdrm9JleRkneBF9yqwBwJGxpgVKZ8/edit?usp=sharing",
  kalendarz: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3TrviKSZtlGnWBk8DieeqAZss8WlwbJXBUKuvmfrIL8rmROwaaRIRsfW7nOchbu5Vrb5AWp1Sb",
  medykalni: "https://medykalni.pl/",
} as const;
