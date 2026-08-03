# Architettura tecnica

## Moduli principali

- **App Shell** — home, libreria, profilo, impostazioni e navigazione.
- **Scene Manager** — caricamento, uscita e transizioni tra ambientazioni.
- **Game State** — stato globale della partita e prerequisiti.
- **Puzzle Engine** — definizioni, validazione, tentativi e risoluzione.
- **Inventory System** — raccolta, selezione, combinazione e utilizzo oggetti.
- **Dialogue Manager** — narrazione, sottotitoli e registrazioni.
- **Audio Manager** — musica, ambiente, effetti e voce su bus separati.
- **Director System** — selezione controllata degli eventi dinamici.
- **Save System** — salvataggio automatico locale con versionamento.
- **Accessibility Manager** — preferenze visive, sonore e di movimento.

## Struttura prevista

```text
src/
  app/
  features/
    auth/
    library/
    profile/
    settings/
  game/
    audio/
    director/
    inventory/
    puzzles/
    save/
    scenes/
    state/
  shared/
    components/
    hooks/
    types/
    utils/
```

## Modello dei contenuti

Le escape room non devono essere codificate direttamente nei componenti. Ogni esperienza sarà descritta da manifesti TypeScript/JSON contenenti:

- metadati;
- scene;
- hotspot;
- oggetti;
- prerequisiti;
- puzzle;
- dialoghi;
- eventi;
- finali;
- asset desktop e mobile.

## Prestazioni

- caricamento iniziale limitato alla shell e alla copertina;
- preload solo della scena successiva;
- immagini AVIF/WebP con più risoluzioni;
- audio compresso e caricato per capitolo;
- riduzione automatica particelle e shader su dispositivi deboli;
- modalità qualità Bassa, Media, Alta e Automatica.

## Salvataggi

Ogni salvataggio contiene versione schema, escape room, scena, timer, inventario, puzzle, eventi visti, preferenze e timestamp. Le migrazioni devono preservare le partite dopo gli aggiornamenti.