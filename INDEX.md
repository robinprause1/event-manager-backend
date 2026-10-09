# Index

Scan-Karte für dieses Archiv. Reicht für Überblick, Kennzahlen und Dateisuche. Die PDF ist der Volltext.

## Fakten

| Feld | Wert |
| --- | --- |
| Art | Bachelorarbeit, Archiv, Stand Herbst 2023 |
| Autor | Robin Richard Prause |
| Hochschule | Technische Hochschule Mittelhessen, Campus Friedberg |
| Studiengang | Medieninformatik |
| Datum | November 2023 |
| Titel | Experimentelle Bearbeitung von Möglichkeiten und Grenzen für Webentwickler durch aktuelle chatbasierte KI-Modelle |
| Sprache | Deutsch |
| Entstehung | Arbeit und Code vollständig mit chatbasierten KI-Modellen |
| Versuch | Prompt-basiertes Entwickeln, ChatGPT mit GPT-4, Regel „No Coding“ (Kap. 5.2.1) |
| Anwendung | Event-Manager für Mitarbeitende, Lines und Business Units |
| Backend | NestJS 10, TypeScript, MongoDB über Mongoose. Liegt in diesem Repo |
| Frontend | Nuxt/Vue. In der Arbeit beschrieben, nicht in diesem Repo |
| Betreuung | Dipl.-Ing. Benjamin Einert (Referent), Prof. Dr.-Ing. Nicolas Stein (Korreferent), Nicolas Wombacher (Randstad Digital Germany AG) |
| Volltext | [docs/Bachelorarbeit_Robin_Prause.pdf](docs/Bachelorarbeit_Robin_Prause.pdf), 96 PDF-Seiten |
| Seitenlage | Arbeitseite N = PDF-Seite N+10. Seite 1 beginnt auf PDF-Seite 11 |

## Lesereihenfolge

1. Diese Datei.
2. [README.md](README.md), wenn der Repo-Kontext oder der lokale Start fehlt.
3. Die Kapitelzeile unten, dann die genannte PDF-Seite, wenn ein Abschnitt im Wortlaut gebraucht wird.
4. Die Modulzeile unten, dann die genannte Datei, wenn der Code gebraucht wird.

## Ergebnis in Kürze

Der Versuch hat eine Webanwendung ohne manuelles Schreiben von Code erzeugt. Der Effizienzfaktor liegt auf einer Skala von 0 bis 1.

Formel aus Kap. 6.1.1, fünf gleich gewichtete Terme:

```text
1/5 * (
  antwortlaenge / (promptlaenge + antwortlaenge)
  + ziel_erreicht          # 0 oder 1
  + 1 / (1 + rueckfragen)
  + ausgabequalitaet / 5   # Qualität 1 bis 5
  + 1 / (1 + prompt_aenderungen)
)
```

Qualitätsskala: 1 funktioniert nicht oder mehr als fünf Rückfragen. 5 funktioniert und deckt alle Anforderungen.

Gemessene Werte aus Kap. 6 und 8:

| Bereich | Prompts | Zeilen Code | Zeilen je Prompt | Effizienzfaktor |
| --- | ---: | ---: | ---: | ---: |
| Planung | | | | 0,97 |
| Backend | 45 | 1051 | 23 | 0,92 |
| Frontend | 151 | 2439 | 16 | 0,86 |
| Konfiguration | | | | 0,62 |

Weitere Befunde, jeweils mit Kapitel:

- Backend liegt vorn. Effizienz mal Zeilen je Prompt: Backend 21,16, Frontend 13,76 (6.2.3).
- Die meisten Prompts liegen zwischen 0,75 und 1 (8.1).
- Ab einer bis zwei Rückfragen bleibt der Faktor über 0,8. Danach fällt er stark (6.2.4).
- Prompt ohne Baustein: 0,88. Mit Prompt Brick: 0,86. Angereicherter Kontext wiegt schwerer als ein Baustein (6.2.8).
- Stärkste Bausteine: „The module should be plug and play“ und „Act as X“. „Lets think step by step“ liegt bei 0,72, unter dem Schnitt (6.2.6).
- Am häufigsten genutzt: „I cannot write any code myself...“ (6.2.5).
- Ganze Anwendungen ohne manuelles Coden sind möglich. In Teams mit laufenden Änderungen bleibt der Nutzen beim Grundgerüst (6.3.6).
- Nachträgliche Dateiänderungen, Coding-Richtlinien, seltene Features, Bugs und Updates drücken den Faktor. Konfiguration leidet an veralteten Framework-Versionen, hier NestJS und Nuxt (6.3.4, 7.4).
- Empfehlung der Arbeit: KI für Architektur, Planung und Gerüst. Entwickler für Prüfung, aktuelle Versionen, Design und Änderungen (8.1, 8.2).

## Kapitel

| Kapitel | Arbeit | PDF | Enthält |
| --- | ---: | ---: | --- |
| 1 Einleitung | 1 | 11 | Motivation, Problem, Ziel: prompt-based, auf eigenes Coden verzichten |
| 2 Stand der Technik | 7 | 17 | Daten, Ethik, ChatGPT, Bard, Copilot, GPT-Engineer, UIZard, verwandte Arbeiten |
| 3 Grundlagen | 23 | 33 | KI, ML, DL, Lernarten, neuronale Netze, LLMs, Daten |
| 4 Verfahrensauswahl | 33 | 43 | Warum ChatGPT, Event-Manager, Architektur, Prompt Engineering |
| 5 Generierung und Analyse | 43 | 53 | Features, No-Coding-Regel, Bewertung der Codequalität |
| 6 Auswertung | 57 | 67 | Effizienzfaktor, KPIs, aufgetretene Grenzen |
| 7 Ergebnisse | 69 | 79 | Evaluation, Vergleich mit klassischer Entwicklung |
| 8 Zusammenfassung | 73 | 83 | Retrospektive, Ausblick Technik und Entwicklerrolle |
| Glossar | 77 | 87 | Kurzbegriffe |
| Literatur | 79 | 89 | Quellen, Stand der Abrufe 2023 |

Features der Anwendung, Kap. 5.1: Login, Events, Staff, Lines, Business Units, Feedback, Votes, Dashboard. Login und Dashboard sind Oberfläche und liegen nicht im Backend.

Codequalität laut Kap. 5.4: Dateien sollen nach der Generierung unbearbeitet bleiben, damit der Chat-Kontext stimmt. Error-Handling im Backend bleibt dadurch dünn.

## Backend-Dateien

Globales Prefix: `api` (`src/main.ts`). MongoDB-URI aus `DB_USERNAME` und `DB_PASSWORD` (`src/app.module.ts`).

| Pfad | Route | Aufgabe |
| --- | --- | --- |
| `src/app.module.ts` | | Modulgraph und Datenbank |
| `src/main.ts` | | Bootstrap, CORS, Prefix `api` |
| `src/MODULE_event/` | `event` | CRUD, Staff direkt sowie über Line und Business Unit zuordnen |
| `src/MODULE_staff/` | `staff` | CRUD Mitarbeiter |
| `src/MODULE_staff_import/` | `staff-import` | `POST upload`, CSV |
| `src/MODULE_line/` | `line` | Anlegen und Lesen |
| `src/MODULE_business-unit/` | `business-unit` | Anlegen und Lesen |
| `src/MODULE_bUAssoc/` | `business-unit-association` | Lines einer Unit, Staff einer Line oder Unit |
| `src/MODULE_eventAssoc/` | `event-association` | Events eines Staff oder einer Line |
| `src/MODULE_event_feedback/` | `feedback` | Anlegen, Lesen je Event |
| `src/MODULE_vote/` | `vote` | Anlegen, Votes eines Events, Update je Event und Staff |

Pro Modul liegen `*.module.ts`, `*.controller.ts`, `*.service.ts` und, wo es ein Schema gibt, `*.model.ts`.

## Nicht in diesem Repo

Frontend (Nuxt/Vue, Stores, Seiten), Login, Dashboard, die Airtable-Auswertung, die Prompt-Protokolle und die Abbildungen. Deren Beschreibung steht in Kap. 5 und 6 der PDF.

## Snapshot

Der Bootstrap in `src/main.ts` erzeugt den Anwendungskontext und ruft kein `listen` auf. Das ist der Stand von 2023.

Die aktuelle Fassung enthält keine `.env`. Ältere Commits können eine damals eingecheckte Datei mit Datenbankzugang enthalten. Diese Zugangsdaten gelten als kompromittiert.
