export async function sendSMTPEmail(to: string, subject: string, body: string) {
  try {
    const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{
            email: to,
            name: "Blue Rose Nails and Beauty"
          }]
        }],
        from: {
          email: "forms@bluerosenailsandbeauty.co.nz",
          name: "Blue Rose Forms",
          domain: "bluerosenailsandbeauty.co.nz"
        },
        subject,
        content: [{
          type: 'text/html',
          value: body.replace(/\n/g, '<br>')
        }]
      })
    })

    const responseText = await response.text()
    console.log('MailChannels Response:', responseText)

    if (!response.ok) {
      throw new Error(`Email sending failed: ${responseText}`)
    }

    return { success: true }
  } catch (error) {
    console.error('SMTP Error:', error)
    throw error
  }
}
