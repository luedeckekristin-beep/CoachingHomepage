# CLAUDE.md — Briefing für Claude Code

> Dieses File liest Claude Code automatisch beim Start. Es enthält alles, was beim Bauen und Anpassen dieser Homepage relevant ist. Nicht löschen, nicht massiv kürzen — bei Änderungen an Tonalität, Design oder Struktur hier aktualisieren.

---

## Project: Coaching-Homepage Kristin Lüdecke

**Domain:** kristinluedecke.de (Annahme — Domain wird separat registriert)
**Sprache:** Deutsch
**Framework:** Astro + Tailwind CSS
**Hosting (geplant):** Cloudflare Pages (oder Netlify)
**Owner:** Kristin Lüdecke, Coach in München

---

## 1. Mission der Seite

In einer Zeile: **Authentisch zeigen, wer Kristin als Coach ist, und Erstgespräch-Anfragen generieren.**

Die Seite ist eine ruhige, einladende Visitenkarte für ein Coaching-Business im Aufbau. Sie muss seriös wirken (für Empfehlungs-Besucher, die Kristin googeln), persönlich wirken (Coaching ist Beziehung), und gefunden werden (Google + KI-Assistenten wie ChatGPT/Claude/Perplexity).

**Wichtig:** Das ist KEINE Hustle-Coach-Homepage. Keine Pricing-Tabellen, keine Countdown-Timer, keine schreienden CTAs, keine Stockfoto-Lächeln, keine Spirit-Ästhetik. Wenn ein Vorschlag in diese Richtung geht, gegensteuern.

---

## 2. Tonalität (gilt für ALLE Texte)

- **Natürlich, menschlich, nah** — nicht wie eine KI
- **Weich und klar, einladend** — ruhig, kein „bold", keine Aktivierungs-Aggressivität
- **Direkt, kein Bullshit** — kein Corporate-Sprech, keine aufgeblasenen Versprechen
- **Casual, nicht polished** — gesprächig, nicht abgeschliffen
- **Du-Form überall** (auch in Buttons, FAQs, Microcopy)
- **Wiedererkennbares Wording:** „vorwärtsgerichtete Kräfte", „Begleiterin", „nächster Schritt", „eigener Weg"
- **No-Gos sprachlich:**
  - Spirituelles Vokabular („Energie", „Universum", „manifestieren") — wenn überhaupt, dann sehr sparsam und umschrieben
  - Business-Sprech („Skills", „Performance", „ROI", „skalieren")
  - Therapie-Sprache („Trigger", „Trauma", „innere Anteile")
  - Aufzählungs-Wahnsinn — Prosa schlägt Bullet-List, außer bei funktionalem Wiedererkennen (z. B. Anlässe-Liste auf Coaching-Seite)
  - Emoji-Flut — keine Emojis im Fließtext, höchstens dezent in Microcopy

---

## 3. Design-DNA

Basis: Der bestehende Coaching-Flyer (April 2026) — siehe `/02_texte/`-Notizen oder Project-Files.

### Farben

```css
/* Primärfarbe — Tiefes, gedämpftes Grün (vom Flyer) */
--color-primary: #2A4A3F;        /* Hauptgrün — Headlines auf Hellem, Button-Hintergrund */
--color-primary-dark: #1F3830;   /* Hover-State, dunklere Bereiche */
--color-primary-light: #3D6353;  /* Sekundär-Akzent, Hover bei Links */

/* Hintergrund — Warmes Beige (vom Flyer) */
--color-bg: #EAEBE0;             /* Haupt-Hintergrund — sanftes Salbei-Beige */
--color-bg-card: #F5F5EE;        /* Hellere Karten (Stärken-Boxen) */
--color-bg-white: #FBFBF8;       /* Sehr helle Bereiche, fast weiß */

/* Text */
--color-text: #1A2D26;           /* Haupt-Text auf Hellem */
--color-text-soft: #4A5751;      /* Sekundär-Text, Captions */
--color-text-on-dark: #F5F5EE;   /* Text auf grünem Hintergrund */

/* Akzent — sehr sparsam einsetzen */
--color-accent: #C9A961;         /* Gedecktes warmes Senf-Gelb für besondere Hervorhebungen, OPTIONAL */
```

### Typografie

```css
/* Überschriften — elegante, ruhige Serif (entspricht Flyer-Charakter) */
font-family-heading: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;

/* Fließtext — klare, gut lesbare Sans-Serif */
font-family-body: 'Inter', 'Helvetica Neue', system-ui, sans-serif;

/* Italics-Akzent — z. B. das Wort „Veränderung" in Headlines */
.italic-accent { font-style: italic; }
```

**Schriftgrößen-System (responsive):**
- Hero-Headline: 2.5rem mobile / 4rem desktop
- Section-Headline: 1.75rem mobile / 2.5rem desktop
- Body: 1rem mobile / 1.125rem desktop
- Großzügige Zeilenhöhe (1.6 für Body)

### Layout-Prinzipien

- **Viel Weißraum.** Lieber ein Element zu wenig als zu viel.
- **Karten-Optik** für die drei Stärken-Bausteine (Klarheit gewinnen / Stärken erkennen / Lösungsräume schaffen) — runde Ecken, dezenter Rand oder hellerer Hintergrund.
- **Klare Hierarchie:** Eyebrow (klein, uppercase, lettering-spacing) → Headline (groß, Serif) → Subline (mittel, Sans) → Body.
- **Mobile-first.** Die Seite muss auf dem Handy genauso gut funktionieren wie am Laptop.
- **Bilder dezent.** Bis Kristins Portrait hochgeladen ist: einfacher abgerundeter Platzhalter (Kreis oder weiches Quadrat) mit Beschriftung „Foto wird hochgeladen".

### Was die Seite NICHT sein darf

- Keine Animationen, die ablenken
- Keine Auto-Slider, keine Karussells
- Keine Pop-ups (kein Newsletter-Pop-up, kein Cookie-Banner solange möglich)
- Keine knalligen Akzentfarben
- Keine Riesen-CTAs

---

## 4. Seitenstruktur

```
src/
├── pages/
│   ├── index.astro          → Startseite (Headline: "Wenn etwas in dir nach Veränderung fragt.")
│   ├── ueber-mich.astro     → Über mich (Person + Werdegang + Warum Coaching)
│   ├── mein-coaching.astro  → Mein Coaching (Was, Wie, Für wen)
│   ├── kontakt.astro        → Kontakt + Erstgespräch
│   ├── impressum.astro      → Pflichtseite (Platzhalter)
│   └── datenschutz.astro    → Pflichtseite (Platzhalter)
├── layouts/
│   └── BaseLayout.astro     → Header, Footer, Meta-Daten, Schema.org
├── components/
│   ├── Hero.astro
│   ├── StrengthCard.astro   → Eine der drei Karten (Klarheit / Stärken / Lösung)
│   ├── CTABlock.astro       → Grüner Schluss-CTA-Block (wie im Flyer)
│   ├── Header.astro
│   └── Footer.astro
├── styles/
│   └── global.css           → CSS-Variablen, Reset, Basis-Typografie
└── assets/
    └── kristin-portrait.jpg → Wird von Kristin hochgeladen (vorerst Platzhalter)
```

**Navigation oben rechts (auf allen Seiten):**
Über mich · Mein Coaching · Kontakt

**Footer (auf allen Seiten):**
Impressum · Datenschutz · LinkedIn · © Kristin Lüdecke 2026

---

## 5. SEO-Setup (technisch)

### Meta-Daten pro Seite

Jede Seite hat in der `BaseLayout.astro` über Slots/Props:
- `title` — z. B. „Coaching München — Kristin Lüdecke"
- `description` — 140–160 Zeichen, mit Hauptkeyword + Nutzen-Ansage
- `og:title`, `og:description`, `og:image`, `og:url` (Open Graph für LinkedIn/Social)
- `twitter:card` (Twitter/X-Vorschau, falls relevant)
- `lang="de"` auf `<html>`

### Strukturierte Daten (JSON-LD)

Im `<head>` von `BaseLayout.astro` einbauen:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kristin Lüdecke",
  "jobTitle": "Lösungsorientierte Coach",
  "url": "https://kristinluedecke.de",
  "image": "https://kristinluedecke.de/portrait.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "München",
    "addressCountry": "DE"
  },
  "sameAs": [
    "[LinkedIn-URL eintragen]"
  ],
  "knowsLanguage": ["de", "en"],
  "alumniOf": "SolutionSurfers"
}
```

Plus auf der Startseite zusätzlich `ProfessionalService` mit Servicegebiet München, online verfügbar, Sprachen Deutsch/Englisch.

### Sitemap & Robots

- `sitemap.xml` — automatisch via `@astrojs/sitemap`-Integration
- `robots.txt` — erlaubt alles, verweist auf Sitemap

---

## 6. LLM-Auffindbarkeit

LLMs wie ChatGPT, Claude, Perplexity zitieren Personen, wenn:
- Klare, faktendichte Selbstbeschreibung vorhanden ist
- Strukturierte Daten gepflegt sind
- Konsistenz zwischen Homepage, LinkedIn, anderen Plattformen besteht

Beim Schreiben jedes Texts: **eine zitierbare Kernaussage** pro Abschnitt. Nicht „mein Coaching ist vielfältig", sondern „Ich bin lösungsorientierte Coach in München. Ich begleite Menschen bei beruflichen und privaten Veränderungen — online und vor Ort, auf Deutsch und Englisch."

---

## 7. Was im aktuellen Stand erlaubt ist / nicht erlaubt ist

✅ **Erlaubt:**
- Astro-Komponenten erweitern, refactoren, sauber halten
- Tailwind-Utility-Klassen verwenden
- CSS-Variablen für Farben aus diesem File übernehmen
- Bei Unklarheiten: kommentieren, Kristin fragen
- Auf existierende Markdown-Texte in `/02_texte/` zurückgreifen

❌ **Nicht erlaubt ohne Rücksprache:**
- Tonalität abändern (siehe Abschnitt 2)
- Design-Farben oder Typografie radikal verändern
- Tracking-Tools, Analytics, Cookies einbinden (Cookie-Banner-Pflicht!)
- Neue Drittanbieter einbinden (kostet Datenschutz-Aufwand)
- Pricing-Tabellen, Hustle-Optik, Spirit-Ästhetik

---

## 8. Nächste Schritte (Backlog)

- Foto integrieren (Kristin lädt im Project hoch)
- Domain real registrieren (kristinluedecke.de prüfen)
- Hosting deployen (Cloudflare Pages empfohlen)
- Impressum mit echten Daten füllen
- Datenschutzerklärung über Generator erstellen
- AGB anlegen (separater Schritt)
- LinkedIn-URL eintragen (Schema.org + Footer)

---

**Stand: 26.04.2026 — Version 1.0**
