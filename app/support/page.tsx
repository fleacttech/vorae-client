import Link from 'next/link'

export const metadata = {
  title: 'Support - Mentori Im',
  description: 'Get help and support for Mentori Im application',
}

export default function Support() {
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
        Support
      </h1>

      <p style={{ marginBottom: '2rem', color: '#666' }}>
        Welcome to the Mentori Im support center. Find answers to common questions or contact us for assistance.
      </p>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          marginTop: '2rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Frequently Asked Questions
        </h2>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '1.25rem',
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
            color: '#333'
          }}>
            How do I get started?
          </h3>
          <p style={{ marginBottom: '1rem', textAlign: 'justify', color: '#555' }}>
            Download the Mentori Im app from the App Store and follow the on-screen instructions to create your account and get started.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '1.25rem',
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
            color: '#333'
          }}>
            I forgot my password. How can I reset it?
          </h3>
          <p style={{ marginBottom: '1rem', textAlign: 'justify', color: '#555' }}>
            On the login screen, tap &quot;Forgot Password&quot; and follow the instructions sent to your registered email address.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '1.25rem',
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
            color: '#333'
          }}>
            How do I update my profile information?
          </h3>
          <p style={{ marginBottom: '1rem', textAlign: 'justify', color: '#555' }}>
            Go to Settings in the app menu, then select Profile to update your information.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '1.25rem',
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
            color: '#333'
          }}>
            The app is not working properly. What should I do?
          </h3>
          <p style={{ marginBottom: '1rem', textAlign: 'justify', color: '#555' }}>
            Try closing and reopening the app. If the issue persists, make sure you have the latest version installed from the App Store. If problems continue, please contact our support team.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '1.25rem',
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
            color: '#333'
          }}>
            How do I delete my account?
          </h3>
          <p style={{ marginBottom: '1rem', textAlign: 'justify', color: '#555' }}>
            Go to Settings → Account → Delete Account. Please note that this action is permanent and cannot be undone.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          marginTop: '2rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Still Need Help?
        </h2>
        <p style={{ marginBottom: '1.5rem', textAlign: 'justify', color: '#555' }}>
          If you couldn&apos;t find the answer you&apos;re looking for, our support team is here to help. Contact us and we&apos;ll get back to you as soon as possible.
        </p>
        <Link
          href="/contact-us"
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.2s',
            textDecoration: 'none'
          }}
        >
          Contact Support
        </Link>
      </section>

      <section style={{
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid #e5e7eb'
      }}>
        <h2 style={{
          fontSize: '1.75rem',
          marginTop: '2rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Contact Information
        </h2>
        <div style={{
          backgroundColor: '#eff6ff',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          border: '1px solid #bfdbfe'
        }}>
         
          <p style={{ color: '#1e3a8a', marginBottom: '0.75rem' }}>
            <strong>Response Time:</strong> We typically respond within 24-48 hours
          </p>
          <p style={{ color: '#1e3a8a' }}>
            <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
          </p>
        </div>
      </section>

      <section style={{
        marginTop: '2rem',
        paddingTop: '2rem',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <Link
            href="/contact-us"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2563eb',
              color: 'white',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'background-color 0.2s',
              textDecoration: 'none'
            }}
          >
            Contact Us
          </Link>
          <Link
            href="/privacy-policy"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6b7280',
              color: 'white',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'background-color 0.2s',
              textDecoration: 'none'
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6b7280',
              color: 'white',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'background-color 0.2s',
              textDecoration: 'none'
            }}
          >
            Home
          </Link>
        </div>
      </section>
    </div>
  )
}
