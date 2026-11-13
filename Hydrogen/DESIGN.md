# DESIGN.md — Antonio Del Vecchio (ADV Studio) Design System Tokens

Questo documento definisce i token visivi estratti da `./Hydrogen/tailwind.config.js`, `./Hydrogen/src/input.css` e `./Hydrogen/style.css`. Tutte le pagine (`index.html`, `about.html`, `contact.html`, `works.html`, `policy.html`) devono condividere rigorosamente la stessa tipografia, scala, palette e architettura di spaziature.

## 1. Palette Cromatica

### Superfici Dark (Index, Menu Overlay, Contact, Footer)
- `--bg-primary-dark`: `#0A0A0A` (`heroDark`) / `#0E0E0E` (superficie editoriale profonda)
- `--bg-overlay`: `#070707` (menu fullscreen & archive teaser)
- `--bg-elevated-dark`: `#121212` (`accentDark`) / `#141414` (card e pannelli)
- `--border-dark`: `rgba(255, 255, 255, 0.10)` / `#262626` (`border-neutral-800`)
- `--border-subtle-dark`: `rgba(255, 255, 255, 0.05)`

### Superfici Light (About, Works, Policy)
- `--bg-primary-light`: `#FFFFFF` (`lightBg`)
- `--bg-paper-warm`: `#F5F3EF` (carta calda opzionale per dettagli / contrasti editoriali)
- `--border-light`: `rgba(0, 0, 0, 0.10)` / `#E5E5E5`

### Testo & Gerarchia
- **Su sfondo Dark**:
  - Primario: `#FFFFFF`
  - Secondario: `#D4D4D4` (`neutral-300`) / `rgba(255, 255, 255, 0.70)`
  - Muted / Metadata: `#A3A3A3` (`neutral-400`, contrasto WCAG AA >= 4.5:1 su `#0E0E0E`)
  - Discreto / Copyright: `#737373` (`neutral-500`)
- **Su sfondo Light**:
  - Primario: `#000000` / `#0A0A0A`
  - Secondario: `#525252` (`neutral-600`)
  - Muted: `#737373` (`neutral-500`)

### Accenti Editoriali (Uso parsimonioso)
- `--accent-warm`: `#E2A066` (ambra/ocra editoriale per hover discreti)
- `--accent-sand`: `#F5E6D3`
- **Divieti**: Nessuno sfondo arancione full-page, nessun box arancione `fixed/sticky`, nessun glow neon.

## 2. Tipografia (Identica su tutte le pagine)

- **Sans Primario (`font-sans`)**: `system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif` (zero Google Fonts, privacy-by-design).
- **Mono Metadata (`font-mono`)**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` (usato esclusivamente per etichette tecniche, indici `01/03`, coordinate e copyright).
- **Tracking**:
  - Display / Titoli: `-0.025em` (`tracking-tight`) fino a `-0.05em` (`tracking-tighter`)
  - Metadata / Nav: `0.18em` (`tracking-widest`) / `0.25em` (`tracking-ultra`)
- **Scala Tipografica**:
  - Hero / Page Display `<h1>`: `clamp(40px, 8vw, 96px)` / `41px` mobile → `72px–96px` desktop (`font-light` o `font-black` a seconda del contesto, `leading-[0.95]`–`leading-[1.08]`)
  - Manifesto / Statement: `clamp(22px, 3.5vw, 42px)`, `font-light`, `leading-[1.35]`
  - Section Heading `<h2>`: `24px–36px` (`text-2xl` / `text-3xl`), `font-medium` / `font-bold`
  - Body Prose: `15px–17px` (`text-[15px] md:text-[17px]`), `leading-relaxed` (`1.625`–`1.85`), max-width `65ch`
  - Metadata / Labels: `11px–12px` (`text-xs` / `text-[11px]`), `font-mono uppercase tracking-widest`

## 3. Layout & Spaziature

- **Container**: `max-w-7xl mx-auto` (`1280px`)
- **Padding orizzontale**: `px-6 sm:px-8 lg:px-20`
- **Ritmo verticale sezioni**: `py-20 sm:py-28 lg:py-32`
- **Motion & Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (curva organica Swiss-editorial), transizioni CSS `150ms–350ms`, supporto `prefers-reduced-motion: reduce`.
- **Reveal**: Elementi marcati `data-reveal` visibili a riposo se JS non attivo o ridotto movimento, animati con transizione verticale morbida all'ingresso nel viewport.

## 4. Localizzazione & Identità Unica

- **Sede unica**: Napoli — Operativo a livello internazionale (`Via O. Fragnito 54, 80131 Napoli (NA), Italy`)
- **Contatto diretto**: `antoniodelvecchio1970@gmail.com`
- **Dati fiscali**: `P. IVA 07004201211`
