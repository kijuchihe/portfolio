import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EMAIL } from '@/constants'

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact Form <onboarding@resend.dev>',
    to: EMAIL,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })

  if (error) {
    console.error('Failed to send contact email', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
