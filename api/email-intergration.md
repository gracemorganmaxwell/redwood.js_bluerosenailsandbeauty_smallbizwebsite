# Email Integration Documentation

## Overview
This feature implements form submission handling with email notifications using Supabase Edge Functions and MailChannels.

## Components

### 1. Edge Function (`api/supabase/functions/send-email/`)
- Handles form submissions
- Sends email notifications
- Stores submissions in database

#### Key Files:
- `index.ts`: Main edge function handler
- `smtp.ts`: Email sending logic using MailChannels

### 2. Email Service (`web/src/lib/emailService.js`)
Helper function to interact with the edge function from the frontend.

## How It Works

### Form Submission Flow:
1. User submits form (Contact/Gift Card/Newsletter)
2. Frontend validates and sends to Edge Function
3. Edge Function:
   - Validates payload
   - Sends email via MailChannels
   - Stores in database
4. Response returned to user

### Configuration Required:

#### 1. Environment Variables
```bash
# Supabase Console (Edge Functions -> Settings -> Secrets)
SMTP_PASSWORD=your_smtp_password
SUPABASE_URL=https://lzfzpdwbneaoqibmwqht.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Local Development (.env file)
Same as above
```

#### 2. DNS Records
Add to domain (bluerosenailsandbeauty.co.nz):
```
Type: TXT
Name: _mailchannels
Value: v=mc1
```

## Testing

### Test Edge Function:
```bash
curl -v --location --request POST 'https://lzfzpdwbneaoqibmwqht.supabase.co/functions/v1/send-email' \
--header 'Authorization: Bearer your_anon_key' \
--header 'Content-Type: application/json' \
--data '{
  "type": "contact",
  "name": "Test User",
  "email": "test@example.com",
  "message": "Test message",
  "recaptchaValue": "test-token"
}'
```

### Expected Payload Types:

```typescript
// Contact Form
{
  type: 'contact',
  name: string,
  email: string,
  message: string,
  recaptchaValue: string
}

// Gift Card Request
{
  type: 'giftcard',
  name: string,
  email: string,
  recipientName: string,
  giftType: string,
  monetaryAmount?: string,
  serviceType?: string,
  deliveryMethod: string,
  recipientAddress?: string,
  gifterAddress?: string,
  recipientEmail?: string,
  message?: string,
  recaptchaValue: string
}

// Newsletter Subscription
{
  type: 'subscription',
  name: string,
  email: string,
  recaptchaValue: string
}
```

## Deployment

1. Set environment variables in Supabase Console
2. Deploy edge function:
```bash
cd api
supabase functions deploy send-email
```

## Troubleshooting

### Common Issues:

1. 401 Unauthorized
   - Check JWT token in request
   - Verify environment variables

2. Email Sending Failed
   - Check MailChannels configuration
   - Verify DNS records
   - Check email formatting

3. Database Storage Failed
   - Check Supabase connection
   - Verify service role key

### Debugging:

1. Check Edge Function logs in Supabase Console
2. Use verbose curl for testing:
```bash
curl -v --location --request POST...
```

3. Monitor Network tab in browser DevTools

## Related Files

```
api/
├── supabase/
│   └── functions/
│       └── send-email/
│           ├── index.ts
│           └── smtp.ts
└── src/
    └── lib/
        └── emailService.js

web/
└── src/
    ├── components/
    │   ├── ContactFormComponent/
    │   ├── GiftRequestForm/
    │   └── Footer/
    └── lib/
        └── emailService.js
```


