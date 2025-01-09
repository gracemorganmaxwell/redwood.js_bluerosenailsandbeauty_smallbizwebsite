import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  SelectField,
  TextAreaField,
  useForm,
} from '@redwoodjs/forms'
import { gql, useMutation } from '@redwoodjs/web'
import CurrencyInput from 'react-currency-input-field'
import { toast } from '@redwoodjs/web/toast'

import SubmitButton from 'src/components/FormSubmitBtnComponent/FormSubmitBtnComponent'

import FormBottomPrivacyCopy from 'src/components/PrivacyPolicyMessageComponent/PrivacyPolicyMessageComponent'

const CREATE_GIFT_CARD_REQUEST = gql`
  mutation CreateGiftCardRequestMutation($input: CreateGiftCardRequestInput!) {
    createGiftCardRequest(input: $input) {
      id
      __typename
    }
  }
`

const GiftRequestForm = () => {
  const formMethods = useForm()
  const { reset } = formMethods

  const [createGiftCardRequest, { loading, error }] = useMutation(
    CREATE_GIFT_CARD_REQUEST,
    {
      onCompleted: () => {
        toast.success('👌 Thank you for your gift card request! 😁 We will be in touch soon.💙')
        reset()
      },
      onError: (error) => {
        console.error(error)
        toast.error('There was an error submitting your message.😳😳 Please refresh the page and try again.')
      },
    }
  )
  const recaptchaRef = useRef(null)
  const [giftType, setGiftType] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState('')
  const [serviceType, setServiceType] = useState('')
  const [monetaryAmount, setMonetaryAmount] = useState('')

  const onSubmit = async (data) => {
    try {
      const token = await recaptchaRef.current.executeAsync()
      if (!token) {
        toast.error('reCAPTCHA verification failed. Please try again.')
        return
      }

      await createGiftCardRequest({
        variables: {
          input: {
            ...data,
            monetaryAmount,
            recaptchaValue: token,
          },
        },
      })

      toast.success('👌 Thank you for your gift card request! 😁 We will be in touch soon.💙')
      reset()
    } catch (error) {
      console.error(error)
      toast.error('There was an error submitting your request. Please try again.')
    }
  }

  return (
    <Form
      onSubmit={onSubmit}
      error={error}
      className="space-y-6"
      formMethods={formMethods}
    >
      <FormError
        error={error}
        className="form-error rounded-md bg-red-100 p-4 text-red-600"
      />

      <div className="text-left text-darkBlue">
        <Label
          name="name"
          className="block text-lg font-medium"
          errorClassName="text-red-600"
        >
          Full Name:
        </Label>
        <TextField
          name="name"
          className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-darkBlue"
          validation={{ required: true }}
          errorClassName="border-red-500 text-red-600"
          autoComplete="name"
        />
        <FieldError name="name" className="text-red-600 mt-1" />
      </div>

      <div className="text-left text-darkBlue">
        <Label
          name="email"
          className="block text-lg font-medium"
          errorClassName="text-red-600"
        >
          Email Address:
        </Label>
        <TextField
          name="email"
          className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-darkBlue"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: 'Invalid email address',
            },
          }}
          errorClassName="border-red-500 text-red-600"
          autoComplete="email"
        />
        <FieldError name="email" className="text-red-600 mt-1" />
      </div>

      <div className="text-left text-darkBlue">
        <Label
          name="message"
          className="block text-lg font-medium"
          errorClassName="text-red-600"
        >
          Message:
        </Label>
        <TextAreaField
          name="message"
          className="mt-1 h-32 w-full rounded-md border border-gray-300 p-2 focus:border-darkBlue"
          validation={{ required: true }}
          errorClassName="border-red-500 text-red-600"
          autoComplete="off"
        />
        <FieldError name="message" className="text-red-600 mt-1" />
      </div>

      <div className="text-left text-darkBlue">
        <Label
          name="recipientName"
          className="block text-lg font-medium"
          errorClassName="text-red-600"
        >
          Recipient's Name:
        </Label>
        <TextField
          name="recipientName"
          className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-darkBlue"
          validation={{ required: true }}
          errorClassName="border-red-500 text-red-600"
        />
        <FieldError name="recipientName" className="text-red-600 mt-1" />
      </div>

      <div className="text-left text-darkBlue">
        <Label
          name="giftType"
          className="block text-lg font-medium"
          errorClassName="text-red-600"
        >
          Gift Card Type:
        </Label>
        <SelectField
          name="giftType"
          value={giftType}
          onChange={(e) => setGiftType(e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-darkBlue"
          validation={{ required: true }}
          errorClassName="border-red-500 text-red-600"
        >
          <option value="">Select Gift Card Type</option>
          <option value="Monetary">Monetary</option>
          <option value="Service">Service</option>
        </SelectField>
        <FieldError name="giftType" className="text-red-600 mt-1" />
      </div>

      {giftType === 'Monetary' && (
        <div className="text-left text-darkBlue">
          <Label
            name="amount"
            htmlFor="amount-input"
            className="block text-lg font-medium"
            errorClassName="text-red-600"
          >
            Amount:
          </Label>
          <CurrencyInput
            id="amount-input"
            name="amount"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-darkBlue"
            onValueChange={(value) => setMonetaryAmount(value)}
            placeholder="$50"
            allowDecimals={false}
            prefix="$"
          />
          <FieldError name="amount" className="text-red-600 mt-1" />
        </div>
      )}
      {giftType === 'Service' && (
        <div className="text-left text-darkBlue">
          <Label
            name="serviceType"
            className="block text-lg font-medium"
            errorClassName="text-red-600"
          >
            Service Type:
            Please specify the service(s) you are requesting from the available{' '}
            <a
              href="/treatments"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              treatment options
            </a>
            .
          </Label>
          <TextField
            name="serviceType"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-darkBlue"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            validation={{ required: true }}
            errorClassName="border-red-500 text-red-600"
            autoComplete="off"
            placeholder="e.g. Nails, Brows, etc."
          />
          <FieldError name="serviceType" className="text-red-600 mt-1" />
        </div>
      )}

      <div className="text-left text-darkBlue">
        <Label
          name="deliveryMethod"
          className="block text-lg font-medium"
          errorClassName="text-red-600"
        >
          Delivery Method:
        </Label>
        <SelectField
          name="deliveryMethod"
          value={deliveryMethod}
          onChange={(e) => setDeliveryMethod(e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-darkBlue"
          validation={{ required: true }}
          errorClassName="border-red-500 text-red-600"
        >
          <option value="">Select Delivery Method</option>
          <option value="E_Gift">E-Gift</option>
          <option value="Physical">Physical</option>
          <option value="BuyersPhysical">Buyer&apos;s Physical</option>
        </SelectField>
        <FieldError name="deliveryMethod" className="text-red-600 mt-1" />
      </div>
      {deliveryMethod === 'Physical' && (
        <div className="text-left text-darkBlue">
          <Label
            name="recipientAddress"
            className="block text-lg font-medium"
            errorClassName="text-red-600"
          >
            Recipient&apos;s Address:
          </Label>
          <TextField
            name="recipientAddress"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-darkBlue"
            validation={{ required: true }}
            errorClassName="border-red-500 text-red-600"
            autoComplete="off"
          />
          <FieldError name="recipientAddress" className="text-red-600 mt-1" />
        </div>
      )}
      {deliveryMethod === 'BuyersPhysical' && (
        <div className="text-left text-darkBlue">
          <Label
            name="gifterAddress"
            className="block text-lg font-medium"
            errorClassName="text-red-600"
          >
            Purchaser&apos;s Address:
          </Label>
          <TextField
            name="gifterAddress"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-darkBlue"
            validation={{ required: true }}
            errorClassName="border-red-500 text-red-600"
            autoComplete="off"
          />
          <FieldError name="gifterAddress" className="text-red-600 mt-1" />
        </div>
      )}
      {deliveryMethod === 'E_Gift' && (
        <div className="text-left text-darkBlue">
          <Label
            name="recipientEmail"
            className="block text-lg font-medium"
            errorClassName="text-red-600"
          >
            Recipient&apos;s Email:
          </Label>
          <TextField
            name="recipientEmail"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-darkBlue"
            validation={{ required: true }}
            errorClassName="border-red-500 text-red-600"
            autoComplete="off"
          />
          <FieldError name="recipientEmail" className="text-red-600 mt-1" />
        </div>
      )}

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
  )
}

export default GiftRequestForm
