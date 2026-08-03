import { useMemo, useState } from 'react';

type Room = {
  id: string;
  title: string;
  subtitle: string;
  genre: string;
  duration: string;
  difficulty: string;
};

const rooms: Room[] = [
  {
    id: 'forbidden-archive',
    title: 'L’Archivio Proibito',
    subtitle: 'Una villa ottocentesca custodisce un segreto che non vuole essere trovato.',
    genre: 'Horror psicologico',
    duration: '60 min',
    difficulty: 'Intermedia',
  },
  {
    id: 'coming-soon',
    title: 'Prossima esperienza',
    subtitle: 'Una nuova escape room cinematografica è in progettazione.',
    genre: 'In arrivo',
    duration: '—',
    difficulty: '—',
  },
];

export function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'library' | 'profile'>('home');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const content = useMemo(() => {
    if (activeTab === 'library') {
      return (
        <section className="library" aria-labelledby="library-title">
          <div className="section-heading">
            <p>CATALOGO</p>
            <h2 id="library-title">Scegli la tua prossima fuga</h2>
          </div>
          <div className="room-grid">
            {rooms.map((room, index) => (
              <article className={`room-card room-card-${index + 1}`} key={room.id}>
                <div className="room-card__veil" />
                <div className="room-card__content">
                  <span>{room.genre}</span>
                  <h3>{room.title}</h3>
                  <p>{room.subtitle}</p>
                  <div className="room-meta">
                    <b>{room.duration}</b>
                    <b>{room.difficulty}</b>
                  </div>
                  <button disabled={room.id === 'coming-soon'} onClick={() => setSelectedRoom(room)}>
                    {room.id === 'coming-soon' ? 'In arrivo' : 'Esamina la stanza'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      );
    }

    if (activeTab === 'profile') {
      return (
        <section className="profile-panel">
          <p className="eyebrow">PROFILO GIOCATORE</p>
          <h2>Il tuo percorso in EscapeApp</h2>
          <div className="stats-grid">
            <div><strong>0</strong><span>Escape completate</span></div>
            <div><strong>0</strong><span>Finali scoperti</span></div>
            <div><strong>0h</strong><span>Tempo di gioco</span></div>
          </div>
        </section>
      );
    }

    return (
      <>
        <section className="hero">
          <div className="hero__ambient" />
          <div className="hero__copy">
            <p className="eyebrow">IMMERSIVE ESCAPE ROOM EXPERIENCE</p>
            <h1>Non guardare una stanza.<br />Entraci.</h1>
            <p className="hero__description">
              Escape room narrative, scene cinematografiche, audio immersivo e un sistema dinamico che reagisce al tuo modo di giocare.
            </p>
            <div className="hero__actions">
              <button className="primary" onClick={() => setActiveTab('library')}>Esplora le escape room</button>
              <button className="secondary" onClick={() => setSelectedRoom(rooms[0])}>Scopri la prima storia</button>
            </div>
          </div>
          <aside className="hero__status">
            <span>PROGETTO IN PRE-PRODUZIONE</span>
            <strong>Vertical slice 01</strong>
            <p>La prima esperienza sarà “L’Archivio Proibito”.</p>
          </aside>
        </section>

        <section className="pillars">
          <article><span>01</span><h2>Scena dominante</h2><p>L’interfaccia scompare e lascia spazio all’ambiente.</p></article>
          <article><span>02</span><h2>Enigmi fisici</h2><p>Oggetti, meccanismi e indizi esistono dentro la scena.</p></article>
          <article><span>03</span><h2>Director System</h2><p>Ritmo, suoni ed eventi cambiano in base al giocatore.</p></article>
          <article><span>04</span><h2>Mobile-first</h2><p>Touch, vibrazione, safe area e PWA fin dall’inizio.</p></article>
        </section>
      </>
    );
  }, [activeTab]);

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setActiveTab('home')}>
          <strong>ESCAPEAPP</strong>
          <small>IMMERSIVE ESCAPE ROOMS</small>
        </button>
        <nav aria-label="Navigazione principale">
          <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Home</button>
          <button className={activeTab === 'library' ? 'active' : ''} onClick={() => setActiveTab('library')}>Escape room</button>
          <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>Profilo</button>
        </nav>
      </header>

      <div className="content">{content}</div>

      <nav className="mobile-nav" aria-label="Navigazione mobile">
        <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Home</button>
        <button className={activeTab === 'library' ? 'active' : ''} onClick={() => setActiveTab('library')}>Stanze</button>
        <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>Profilo</button>
      </nav>

      {selectedRoom && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="room-dialog-title">
          <button className="modal__backdrop" aria-label="Chiudi" onClick={() => setSelectedRoom(null)} />
          <article className="modal__card">
            <button className="modal__close" onClick={() => setSelectedRoom(null)} aria-label="Chiudi">×</button>
            <p className="eyebrow">PRIMA ESCAPE ROOM</p>
            <h2 id="room-dialog-title">{selectedRoom.title}</h2>
            <p>{selectedRoom.subtitle}</p>
            <dl>
              <div><dt>Durata</dt><dd>{selectedRoom.duration}</dd></div>
              <div><dt>Difficoltà</dt><dd>{selectedRoom.difficulty}</dd></div>
              <div><dt>Finali</dt><dd>3</dd></div>
            </dl>
            <button className="primary" disabled>Vertical slice in preparazione</button>
          </article>
        </div>
      )}
    </main>
  );
}
