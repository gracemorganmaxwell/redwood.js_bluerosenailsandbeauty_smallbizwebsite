const notificationEmailAddress = process.env.REDWOOD_ENV_NOTIFICATION_EMAIL_ADDRESS;

const sendEmailNotification = async (type, data) => {
  try {
    const response = await fetch('https://lzfzpdwbneaoqibmwqht.supabase.co/functions/v1/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        type,
        to: notificationEmailAddress,
        ...data
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Failed to send email notification: ${errorData.message}`)
    }

    return response.json()
  } catch (error) {
    console.error('Email notification error:', error)
    throw error
  }
}

export { sendEmailNotification }
