# COMPLIANCE REPORT — GDPR & ePrivacy (Garante Privacy)

**Perimetro analizzato:** `./Hydrogen/` (`index.html`, `about.html`, `contact.html`, `works.html`, `policy.html`, `main.js`, `style.css`)
**Data audit:** 2026-11-13

## 1. Esito Scansione Tecnica

| Categoria | Risultato | Dettaglio |
| :--- | :--- | :--- |
| **Cookie di profilazione / marketing** | Assenti (0) | Nessun `document.cookie`, nessun pixel pubblicitario, nessun tracker. |
| **Analytics di terze parti** | Assenti (0) | Nessun Google Analytics, Tag Manager, Hotjar o script di telemetria. |
| **Font esterni** | Assenti (0) | Nessuna chiamata a `fonts.googleapis.com` o `fonts.gstatic.com`. Tipografia di sistema locale (`system-ui`, `-apple-system`, `Helvetica Neue`, `ui-monospace`). |
| **Mappe / Iframe embed** | Assenti (0) | Nessun iframe Google Maps o embed esterni. |
| **CDN tecniche funzionali** | Presenti (2) | `cdnjs.cloudflare.com` (GSAP 3.12.5, ScrollTrigger) e `cdn.jsdelivr.net` (Lenis 1.0.42) per il solo rendering delle animazioni e dello scroll. |
| **Web Storage (`localStorage`)** | Tecnico / Rimosso | `contact_last_submit` in `main.js` era usato solo per rate-limiting client-side sul form AJAX; il nuovo `contact.html` usa invio diretto `mailto:` senza persistenza o invio a endpoint terzi. |

## 2. Valutazione Normativa (GDPR UE 2016/679 & Linee Guida Garante 10/06/2021)

- Secondo le **Linee Guida cookie e altri strumenti di tracciamento** del Garante per la Protezione dei Dati Personali (10 giugno 2021) e la Direttiva ePrivacy 2002/58/CE:
  - L'uso esclusivo di strumenti tecnici strettamente necessari all'erogazione del servizio (senza profilazione, né cookie analitici di terze parti non anonimizzati, né embed terzi) **non richiede l'acquisizione del consenso preventivo** e quindi **non richiede un cookie banner**.
  - È sufficiente la presenza dell'informativa estesa accessibile dal footer di ogni pagina (`policy.html`).

## 3. Azioni Implementate

1. **Zero Cookie Banner invasivi**: confermata l'assenza di banner bloccanti, coerente con il design editoriale e la normativa vigente.
2. **Link uniforme in Footer**: tutte le pagine (`index.html`, `about.html`, `contact.html`, `works.html`) espongono nella barra inferiore del footer unificato il link diretto `PRIVACY & COOKIE POLICY` verso `policy.html`.
3. **Form contatti privacy-first**: `contact.html` utilizza validazione client-side e apertura diretta `mailto:antoniodelvecchio1970@gmail.com`, evitando la trasmissione automatica di dati personali a server intermediari terzi.
