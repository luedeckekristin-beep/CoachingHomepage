# Kristin Lüdecke — Coaching-Homepage

Astro-Projekt für die Coaching-Homepage von Kristin Lüdecke.

## Setup

Voraussetzung: Node.js 20+ und npm.

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Lokal entwickeln (öffnet http://localhost:4321)
npm run build    # Produktiv-Build erstellen
npm run preview  # Build lokal testen
```

## Wichtige Dateien

- `CLAUDE.md` — Briefing für Claude Code. Liest Claude beim Bauen automatisch. Bei Änderungen an Tonalität, Design, Struktur hier aktualisieren.
- `astro.config.mjs` — Astro-Konfiguration (Site-URL, Integrationen)
- `tailwind.config.mjs` — Design-Tokens (Farben, Schriften)
- `src/styles/global.css` — Basis-Styles, Schrift-Imports
- `src/layouts/BaseLayout.astro` — Basis-Layout mit Header, Footer, SEO, Schema.org
- `src/pages/*.astro` — Die einzelnen Seiten

## Vor Launch zwingend

- [ ] Echtes Foto in `src/assets/kristin-portrait.jpg` ablegen und Platzhalter in den Pages austauschen
- [ ] `impressum.astro` mit echten Daten füllen
- [ ] `datenschutz.astro` über Generator (eRecht24) finalisieren
- [ ] LinkedIn-URL im Header und Schema.org-Block eintragen
- [ ] `kristinluedecke.de` als Domain registrieren oder Site-URL in `astro.config.mjs` anpassen
- [ ] `robots.txt` ggf. anpassen, wenn andere Domain
- [ ] Hosting deployen (Cloudflare Pages oder Netlify empfohlen)
