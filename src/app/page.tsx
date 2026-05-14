const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

const cards = [
  {
    label: 'Frontend',
    value: 'Next.js 14',
  },
  {
    label: 'Backend',
    value: 'FastAPI',
  },
  {
    label: 'API URL',
    value: apiUrl,
  },
]

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '48px 20px',
      }}
    >
      <section
        style={{
          width: 'min(920px, 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 28,
          background: 'rgba(24,24,27,0.92)',
          padding: 32,
          boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
        }}
      >
        <p style={{ margin: 0, color: '#a1a1aa', letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: 12 }}>
          LaunchPad
        </p>
        <h1 style={{ margin: '12px 0 8px', fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          test-project-12345
        </h1>
        <p style={{ margin: 0, color: '#d4d4d8', fontSize: 18 }}>
          This is a test project
        </p>

        <div
          style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            marginTop: 28,
          }}
        >
          {cards.map((card) => (
            <article
              key={card.label}
              style={{
                borderRadius: 18,
                padding: 20,
                background: '#111113',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p style={{ margin: 0, color: '#a1a1aa', fontSize: 13 }}>{card.label}</p>
              <p style={{ margin: '8px 0 0', fontSize: 20, fontWeight: 600 }}>{card.value}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
