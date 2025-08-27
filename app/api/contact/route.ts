// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // For now, we'll use a webhook service like Formspree or implement with SendGrid/Resend
    // This is a placeholder that logs the message and returns success
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    })

    // You can integrate with services like:
    // 1. Formspree (https://formspree.io)
    // 2. EmailJS (https://emailjs.com) 
    // 3. SendGrid API
    // 4. Resend API
    // 5. Netlify Forms

    return NextResponse.json(
      { message: 'Message received successfully. We will get back to you soon!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process your message' },
      { status: 500 }
    )
  }
}
