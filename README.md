# medi3

Projekt frontendowy oparty na [Astro](https://astro.build) + Tailwind CSS 4.

---

## Krok 1 — Zainstaluj potrzebne programy

Instaluj po kolei. Każdy instalator pobierasz, klikasz dwukrotnie i przechodzisz przez kreatora (domyślne opcje są ok).

### Node.js

Pobierz z [nodejs.org](https://nodejs.org) — wersja LTS (zielony przycisk). Plik ma rozszerzenie `.msi`.

> **Ważne:** instalator zapyta o uprawnienia administratora — kliknij Tak, inaczej instalacja się nie powiedzie.

### Git

Pobierz z [git-scm.com/download/win](https://git-scm.com/download/win). Domyślne opcje w kreatorze są ok — po prostu klikaj Next i Install.

### Visual Studio Code

Pobierz z [code.visualstudio.com](https://code.visualstudio.com).

---

## Krok 2 — Sprawdź czy Node.js i Git działają

Po instalacji otwórz **nowe** okno PowerShell:

- Kliknij przycisk Start → wpisz `PowerShell` → Enter.

Wpisz kolejno i naciśnij Enter po każdej linii:

```powershell
node -v
npm -v
git --version
```

Każda komenda powinna wyświetlić numer wersji. Jeśli wyświetla błąd — wróć do kroku 1 i zainstaluj jeszcze raz.

---

## Krok 3 — Skonfiguruj Git (tylko raz, na początku)

W tym samym oknie PowerShell wpisz kolejno — **zastąp `Twoje Imię` i `twoj@email.com` swoimi prawdziwymi danymi** (tymi których używasz na GitHubie):

```powershell
git config --global user.name "Twoje Imię"
git config --global user.email "twoj@email.com"
git config --global core.autocrlf input
```

> To ustawienie robi się tylko raz — nie musisz tego powtarzać przy kolejnych projektach.

---

## Krok 4 — Pobierz projekt na swój komputer

Zdecyduj, w którym folderze chcesz trzymać projekt, np. `C:\Projekty`. Możesz go utworzyć ręcznie w Eksploratorze plików.

Następnie w PowerShell przejdź do tego folderu i sklonuj repo:

```powershell
cd C:\Projekty
git clone https://github.com/PatrickPinace/medi3.git
cd medi3
npm install
```

> `npm install` pobiera wszystkie zależności projektu — może to chwilę potrwać, poczekaj aż się skończy.

---

## Krok 5 — Otwórz projekt w VS Code

```powershell
code .
```

> Kropka na końcu oznacza "otwórz bieżący folder". VS Code otworzy się z projektem.

VS Code zaproponuje instalację rekomendowanych rozszerzeń — kliknij **Install All**. Jeśli nie zaproponuje, zainstaluj ręcznie każde z listy poniżej: Extensions (ikona po lewej stronie) → wpisz nazwę → Install.

| Rozszerzenie | ID | Do czego służy |
| :----------- | :- | :------------- |
| Astro | `astro-build.astro-vscode` | obsługa plików `.astro` — wymagane |
| Tailwind CSS IntelliSense | `bradlc.vscode-tailwindcss` | autocomplete klas Tailwind |
| Prettier | `esbenp.prettier-vscode` | automatyczne formatowanie kodu |
| Error Lens | `usernamehehe.errorlens` | błędy widoczne od razu w kodzie |
| Git Graph | `mhutchie.git-graph` | wizualny podgląd historii git |

---

## Krok 6 — Uruchom serwer deweloperski

W terminalu wewnątrz VS Code (menu Terminal → New Terminal) wpisz:

```powershell
npm run dev
```

Zobaczysz coś takiego:

```
 astro  v5.x.x ready in ...ms

 ┃ Local    http://localhost:4321/
```

Otwórz przeglądarkę i wejdź na [http://localhost:4321](http://localhost:4321) — powinna się pokazać strona projektu.

> Serwer działa dopóki nie zamkniesz terminala. Zmiany w kodzie odświeżają się automatycznie w przeglądarce.

Aby zatrzymać serwer: kliknij w terminal i naciśnij **Ctrl+C**.

---

## Krok 7 — Wgrywanie zmian do repo (git)

Gdy zmodyfikujesz pliki i chcesz zapisać zmiany w repozytorium, wykonaj w terminalu kolejno:

```powershell
git add .
git commit -m "Opis co zmieniłem"
git push
```

- `git add .` — zaznacza wszystkie zmienione pliki do zapisania
- `git commit -m "..."` — zapisuje zmiany lokalnie z opisem co zrobiłeś
- `git push` — wysyła zmiany na GitHub

> Przy pierwszym `git push` GitHub może poprosić o logowanie — zaloguj się przez przeglądarkę, która się otworzy.

---

## Komendy do codziennej pracy

| Komenda           | Co robi                                         |
| :---------------- | :---------------------------------------------- |
| `npm run dev`     | Uruchamia serwer deweloperski (localhost:4321)  |
| `npm run build`   | Buduje wersję produkcyjną do folderu `./dist/`  |
| `npm run preview` | Podgląd zbudowanej wersji lokalnie              |
| `git add .`       | Zaznacza zmiany do commita                      |
| `git commit -m ""` | Zapisuje zmiany z opisem                       |
| `git push`        | Wysyła zmiany na GitHub                         |
| `git pull`        | Pobiera najnowsze zmiany z GitHub               |
