# Event Manager Backend

Archiv der Bachelorarbeit von Robin Richard Prause, Studiengang Medieninformatik, Technische Hochschule Mittelhessen (Friedberg), November 2023.

**Titel:** Experimentelle Bearbeitung von Möglichkeiten und Grenzen für Webentwickler durch aktuelle chatbasierte KI-Modelle

Die Arbeit und der Code in diesem Repository wurden 2023 vollständig mit chatbasierten KI-Modellen erzeugt. Der Praxisversuch war prompt-basiert: der Code entstand durch Prompts und Rückfragen an das Modell, nicht durch klassisches Schreiben von Hand. Dieses Repo ist der unveränderte Backend-Stand vom Herbst 2023 und wird nicht weiterentwickelt.

Die vollständige Arbeit (96 Seiten): [docs/Bachelorarbeit_Robin_Prause.pdf](docs/Bachelorarbeit_Robin_Prause.pdf)

Referent: Dipl.-Ing. Benjamin Einert. Korreferent: Prof. Dr.-Ing. Nicolas Stein. Betreuung bei Randstad Digital Germany AG: Nicolas Wombacher.

## Was hier liegt

NestJS-Backend (TypeScript, MongoDB über Mongoose) für einen Event-Manager. Module:

- Events, inklusive Zuordnung von Staff, Lines und Business Units
- Staff und CSV-Import
- Lines und Business Units
- Feedback und Votes

Login, Dashboard und die übrige Oberfläche gehören zur Webanwendung aus der Arbeit und liegen nicht in diesem Repository.

## Lokal starten

```bash
npm install
cp .env.example .env
```

In `.env` eine eigene MongoDB eintragen, danach `npm run start:dev`. Der globale Prefix im Code ist `api`. Der Bootstrap in `src/main.ts` ist der Stand von 2023.

## Zugangsdaten

Die aktuelle Fassung enthält keine Datenbank-Zugangsdaten. Ältere Commits können noch eine damals eingecheckte `.env` enthalten. Diese Zugangsdaten gelten als kompromittiert und dürfen nicht verwendet werden.
