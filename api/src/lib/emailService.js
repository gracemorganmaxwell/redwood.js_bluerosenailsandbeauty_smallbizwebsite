import sgMail from '@sendgrid/mail'

const prepareEmailContent = ({type, data}) => {
  switch (type) {
    case 'contact':
      return  {
        subject: 'New Contact Form Submission',
        text: `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
        `
      }
    case 'giftcard':
      return {
        subject: 'New Gift Card Request',
        text: `
          Requester Name: ${data.name}
          Requester Email: ${data.email}
          Recipient Name: ${data.recipientName}
          Gift Type: ${data.giftType}
          ${data.monetaryAmount ? `Amount: ${data.monetaryAmount}` : ''}
          ${data.serviceType ? `Service: ${data.serviceType}` : ''}
          Delivery Method: ${data.deliveryMethod}
          ${data.recipientAddress ? `Recipient Address: ${data.recipientAddress}` : ''}
          ${data.gifterAddress ? `Gifter Address: ${data.gifterAddress}` : ''}
          ${data.recipientEmail ? `Recipient Email: ${data.recipientEmail}` : ''}
          Message: ${data.message}
        `
      }
    case 'subscription':
      return {
        subject: 'New Newsletter Subscription',
        text: `
          Name: ${data.name}
          Email: ${data.email}
        `
      }
    default:
      throw new Error(`unrecognized email request type "${type}"`)
  }
}

const prepareEmailMessage = ({ type, data }) => {
  return {
    to: process.env.NOTIFICATION_EMAIL_ADDRESS,
    from: process.env.SENDGRID_SENDER_EMAIL_ADDRESS,
    ...prepareEmailContent({ type, data })
  }
}

const sendEmailNotification = async ({ type, data }) => {
  console.log(`sendEmailNotification({ type: ${type}, data: ${data} })`)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const [response] = await sgMail.send(prepareEmailMessage({ type, data }))

  if (response.ok) {
    throw new Error(`Failed to send email notification: ${response.body}`)
  }

  return response.body
}

export { sendEmailNotification }
