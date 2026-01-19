import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '1rem',
        color: '#2563eb'
      }}>
        Mentori Im
      </h1>
      <p style={{ 
        fontSize: '1.25rem', 
        marginBottom: '2rem',
        color: '#666'
      }}>
        Welcome to Mentori Im
      </p>
      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Link 
          href="/privacy-policy"
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
        >
          View Privacy Policy
        </Link>
        <Link 
          href="/contact-us"
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: '#10b981',
            color: 'white',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
        >
          Contact Us
        </Link>
      </div>
    </main>
  )
}
