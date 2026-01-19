export const metadata = {
  title: 'Privacy Policy - Mentori Im',
  description: 'Privacy Policy for Mentori Im application',
}

export default function PrivacyPolicy() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem 1rem',
      lineHeight: '1.8',
      color: '#333'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '1rem',
        color: '#1a1a1a',
        borderBottom: '2px solid #2563eb',
        paddingBottom: '0.5rem'
      }}>
        Privacy Policy
      </h1>
      
      <p style={{ marginBottom: '1.5rem', color: '#666' }}>
        <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          marginTop: '2rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          1. Introduction
        </h2>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          Welcome to Mentori Im (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring you have a positive experience on our application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          marginTop: '2rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          2. Information We Collect
        </h2>
        <h3 style={{
          fontSize: '1.25rem',
          marginTop: '1.5rem',
          marginBottom: '0.75rem',
          color: '#333'
        }}>
          2.1 Information You Provide
        </h3>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          We may collect information that you provide directly to us, including but not limited to:
        </p>
        <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Name and contact information</li>
          <li style={{ marginBottom: '0.5rem' }}>Email address</li>
          <li style={{ marginBottom: '0.5rem' }}>Profile information</li>
          <li style={{ marginBottom: '0.5rem' }}>Any other information you choose to provide</li>
        </ul>

        <h3 style={{
          fontSize: '1.25rem',
          marginTop: '1.5rem',
          marginBottom: '0.75rem',
          color: '#333'
        }}>
          2.2 Automatically Collected Information
        </h3>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          When you use our application, we may automatically collect certain information, including:
        </p>
        <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Device information (model, operating system, unique device identifiers)</li>
          <li style={{ marginBottom: '0.5rem' }}>Usage data and analytics</li>
          <li style={{ marginBottom: '0.5rem' }}>IP address</li>
          <li style={{ marginBottom: '0.5rem' }}>Location data (if permitted)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          marginTop: '2rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          3. How We Use Your Information
        </h2>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          We use the information we collect to:
        </p>
        <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Provide, maintain, and improve our services</li>
          <li style={{ marginBottom: '0.5rem' }}>Process transactions and send related information</li>
          <li style={{ marginBottom: '0.5rem' }}>Send you technical notices and support messages</li>
          <li style={{ marginBottom: '0.5rem' }}>Respond to your comments and questions</li>
          <li style={{ marginBottom: '0.5rem' }}>Monitor and analyze trends and usage</li>
          <li style={{ marginBottom: '0.5rem' }}>Detect, prevent, and address technical issues</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          marginTop: '2rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          4. Information Sharing and Disclosure
        </h2>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
        </p>
        <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>With your consent</li>
          <li style={{ marginBottom: '0.5rem' }}>To comply with legal obligations</li>
          <li style={{ marginBottom: '0.5rem' }}>To protect our rights and safety</li>
          <li style={{ marginBottom: '0.5rem' }}>With service providers who assist us in operating our application</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          marginTop: '2rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          5. Data Security
        </h2>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          marginTop: '2rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          6. Your Rights
        </h2>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>The right to access your personal information</li>
          <li style={{ marginBottom: '0.5rem' }}>The right to correct inaccurate information</li>
          <li style={{ marginBottom: '0.5rem' }}>The right to delete your information</li>
          <li style={{ marginBottom: '0.5rem' }}>The right to object to processing</li>
          <li style={{ marginBottom: '0.5rem' }}>The right to data portability</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          marginTop: '2rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          7. Children&apos;s Privacy
        </h2>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          Our application is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          marginTop: '2rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          8. Changes to This Privacy Policy
        </h2>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <a
            href="/contact-us"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2563eb',
              color: 'white',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
          >
            Contact Us
          </a>
          <a
            href="/"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6b7280',
              color: 'white',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
          >
            Home
          </a>
        </div>
      </section>
    </div>
  )
}
