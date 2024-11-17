import React, { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Form, FormError, FieldError, Label, TextField, SelectField, TextAreaField } from '@redwoodjs/forms'
import { gql, useMutation } from '@redwoodjs/web'

import SubmitButton from 'src/components/FormSubmitBtnComponent/FormSubmitBtnComponent'
import HeadingComponent from 'src/components/HeadingComponent/HeadingComponent'
import FormBottomPrivacyCopy from 'src/components/PrivacyPolicyMessageComponent/PrivacyPolicyMessageComponent'

const CREATE_GIFT_CARD_REQUEST = gql`
  mutation CreateGiftCardRequestMutation($input: CreateGiftCardRequestInput!) {
    createGiftCardRequest(input: $input) {
      id
    }
  }
`

const GiftCardRequestComponent = () => {
  const [createGiftCardRequest, { loading, error }] = useMutation(
    CREATE_GIFT_CARD_REQUEST,
    {
      onCompleted: () => {
        alert('Thank you for your gift card request!')
      },
      onError: (error) => {
        console.error(error)
        alert('There was an error submitting your request.')
      },
    }
  )
  const recaptchaRef = useRef(null)

  const onSubmit = async (data) => {
    // Execute the reCAPTCHA v3
    const token = await recaptchaRef.current.executeAsync()
    if (!token) {
      alert('reCAPTCHA verification failed. Please try again.')
      return
    }

    await createGiftCardRequest({
      variables: {
        input: {
          ...data,
          recaptchaValue: token,
        },
      },
    })
  }

  return (
    <>
      <br />
      <main className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md">
        <HeadingComponent title="Gift Card Request Form" />
        <Form onSubmit={onSubmit} error={error} className="space-y-4">
          <FormError
            error={error}
            className="form-error rounded bg-red-100 p-4 text-red-600"
          />

          <div>
            <Label
              name="name"
              className="block text-left text-gray-700"
              errorClassName="text-red-600 text-left"
            >
              Full Name:
            </Label>
            <TextField
              name="name"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500 text-left w-full rounded border p-2"
              autoComplete="name"
            />
            <FieldError name="name" className="text-right text-red-600" />
          </div>

          <div>
            <Label
              name="email"
              className="block text-left text-gray-700"
              errorClassName="text-red-600 text-left"
            >
              Email Address:
            </Label>
            <TextField
              name="email"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{
                required: true,
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: 'Invalid email address',
                },
              }}
              errorClassName="border-red-500 text-left w-full rounded border p-2"
              autoComplete="email"
            />
            <FieldError name="email" className="text-red-600" />
          </div>

          <div>
            <Label
              name="message"
              className="block text-left text-gray-700"
              errorClassName="text-red-600 text-left"
            >
              Message:
            </Label>
            <TextAreaField
              name="message"
              className="mt-1 h-32 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500 text-left w-full rounded border p-2"
              autoComplete="off"
            />
            <FieldError name="message" className="text-red-600" />
          </div>

          {/* Additional Fields for Gift Card Request */}
          <div>
            <Label
              name="recipientName"
              className="block text-left text-gray-700"
              errorClassName="text-red-600 text-left"
            >
              Recipient&apos;s Name:
            </Label>
            <TextField
              name="recipientName"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500 text-left w-full rounded border p-2"
              autoComplete="off"
            />
            <FieldError name="recipientName" className="text-red-600" />
          </div>

          <div>
            <Label
              name="giftType"
              className="block text-left text-gray-700"
              errorClassName="text-red-600 text-left"
            >
              Gift Card Type:
            </Label>
            <SelectField
              name="giftType"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500 text-left w-full rounded border p-2"
            >
              <option value="">Select Gift Card Type</option>
              <option value="Monetary">Monetary</option>
              <option value="Service">Service</option>
            </SelectField>
            <FieldError name="giftType" className="text-red-600" />
          </div>

          <div>
            <Label
              name="deliveryMethod"
              className="block text-left text-gray-700"
              errorClassName="text-red-600 text-left"
            >
              Delivery Method:
            </Label>
            <SelectField
              name="deliveryMethod"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500 text-left w-full rounded border p-2"
            >
              <option value="">Select Delivery Method</option>
              <option value="E_Gift">E-Gift</option>
              <option value="Physical">Physical</option>
              <option value="BuyersPhysical">Buyer&apos;s Physical</option>
            </SelectField>
            <FieldError name="deliveryMethod" className="text-red-600" />
          </div>

          {/* Conditionally Render Address Fields Based on Delivery Method */}
          <div>
            <Label
              name="address"
              className="block text-left text-gray-700"
              errorClassName="text-red-600 text-left"
            >
              Recipient&apos;s Address:
            </Label>
            <TextField
              name="address"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500 text-left w-full rounded border p-2"
              autoComplete="off"
            />
            <FieldError name="address" className="text-red-600" />
          </div>

          <div>
            <Label
              name="gifterAddress"
              className="block text-left text-gray-700"
              errorClassName="text-red-600 text-left"
            >
              Purchaser&apos;s Address:
            </Label>
            <TextField
              name="gifterAddress"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500 text-left w-full rounded border p-2"
              autoComplete="off"
            />
            <FieldError name="gifterAddress" className="text-red-600" />
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.REDWOOD_ENV_RECAPTCHA_SITE_KEY}
              size="invisible"
              ref={recaptchaRef}
            />
          </div>

          <SubmitButton label="Request Gift Card" loading={loading} />
          <FormBottomPrivacyCopy />
        </Form>
      </main>
      <br />
    </>
  )
}

export default GiftCardRequestComponent
