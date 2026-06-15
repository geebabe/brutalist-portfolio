import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(20),
  honeypot: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Honeypot check - silently ignore spam
    if (body.honeypot) {
      return NextResponse.json({ ok: true })
    }

    // Validate
    const data = schema.parse(body)

    // Send email
    const response = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'delivered@resend.dev',
      subject: `New message from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (response.error) {
      return NextResponse.json({ ok: false, error: response.error }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }
}
