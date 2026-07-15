import { SITE_URL } from '@/constants'
import { Metadata } from 'next'
import ContactForm from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'Contact | kingsleydaprime',
  description: 'Get in touch with Kingsley Ihemelandu — open to hiring, collaboration, or just a conversation worth having.',
  openGraph: {
    title: 'Contact | kingsleydaprime',
    description: 'Get in touch with Kingsley Ihemelandu — open to hiring, collaboration, or just a conversation worth having.',
    url: `${SITE_URL}/contact`,
    images: [{ url: '/og-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | kingsleydaprime',
    description: 'Get in touch with Kingsley Ihemelandu.',
    images: ['/og-image.webp'],
  },
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[var(--color-surface)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              Get In Touch
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-primary)] leading-tight">
              Let&apos;s Talk
            </h1>
            <p className="text-[var(--color-text-muted)] max-w-xl leading-relaxed">
              Whether you&apos;re looking to hire, collaborate, or just have a conversation worth having — send a message and I&apos;ll get back to you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-background)]">
        <div className="max-w-lg mx-auto px-6">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
