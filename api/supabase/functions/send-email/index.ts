// supabase/functions/send-email/index.ts
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { sendSMTPEmail } from './smtp.ts'

interface EmailBase {
  type: 'contact' | 'giftcard' | 'subscription'
  name: string
  email: string
  message?: string
  recaptchaValue: string
}

interface ContactEmail extends EmailBase {
  type: 'contact'
}

interface GiftCardEmail extends EmailBase {
  type: 'giftcard'
  recipientName: string
  giftType: string
  monetaryAmount?: string
  serviceType?: string
  deliveryMethod: string
  recipientAddress?: string
  gifterAddress?: string
  recipientEmail?: string
}

interface SubscriptionEmail extends EmailBase {
  type: 'subscription'
}

type EmailPayload = ContactEmail | GiftCardEmail | SubscriptionEmail

function prepareEmailContent(payload: EmailPayload): { subject: string, body: string } {
  switch (payload.type) {
    case 'contact':
      return {
        subject: 'New Contact Form Submission',
        body: `
          Name: ${payload.name}
          Email: ${payload.email}
          Message: ${payload.message}
        `
      }
    case 'giftcard':
    case 'giftcard':
      return {
        subject: 'New Gift Card Request',
        body: `
          Requester Name: ${payload.name}
          Requester Email: ${payload.email}
          Recipient Name: ${payload.recipientName}
          Gift Type: ${payload.giftType}
          ${payload.monetaryAmount ? `Amount: ${payload.monetaryAmount}` : ''}
          ${payload.serviceType ? `Service: ${payload.serviceType}` : ''}
          Delivery Method: ${payload.deliveryMethod}
          ${payload.recipientAddress ? `Recipient Address: ${payload.recipientAddress}` : ''}
          ${payload.gifterAddress ? `Gifter Address: ${payload.gifterAddress}` : ''}
          ${payload.recipientEmail ? `Recipient Email: ${payload.recipientEmail}` : ''}
          Message: ${payload.message}
        `
      }
    case 'subscription':
    case 'subscription':
      return {
        subject: 'New Newsletter Subscription',
        body: `
          Name: ${payload.name}
          Email: ${payload.email}
        `
      }
  }
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const payload: EmailPayload = await req.json()

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Prepare and send email
    const { subject, body } = prepareEmailContent(payload)

    const emailResult = await sendSMTPEmail(
      'bluerosenailsandbeauty@gmail.com',
      subject,
      body
    )

    if (!emailResult.success) {
      throw new Error('Failed to send email')
    }

    // Store in database
    await storeInDatabase(supabaseClient, payload)

    return new Response(
      JSON.stringify({ message: 'Form submitted successfully' }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    )
  }
})

async function storeInDatabase(supabase: any, payload: EmailPayload) {
  const now = new Date().toISOString()

  switch (payload.type) {
    case 'contact':
      await supabase.from('Contact').insert([{
        name: payload.name,
        email: payload.email,
        message: payload.message,
        recaptcha_value: payload.recaptchaValue,
        created_at: now
      }])
      break

    case 'giftcard':
      await supabase.from('GiftCardRequest').insert([{
        name: payload.name,
        email: payload.email,
        message: payload.message,
        recipient_name: payload.recipientName,
        gift_type: payload.giftType,
        monetary_amount: payload.monetaryAmount,
        service_type: payload.serviceType,
        delivery_method: payload.deliveryMethod,
        recipient_address: payload.recipientAddress,
        gifter_address: payload.gifterAddress,
        recipient_email: payload.recipientEmail,
        recaptcha_value: payload.recaptchaValue,
        created_at: now
      }])
      break

    case 'subscription':
      await supabase.from('Subscription').insert([{
        name: payload.name,
        email: payload.email,
        recaptcha_value: payload.recaptchaValue,
        subscribed_at: now
      }])
      break
  }
}
