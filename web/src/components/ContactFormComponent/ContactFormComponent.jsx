import React, { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  useForm,
} from '@redwoodjs/forms'
import { gql, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FormSubmitBtnComponent from 'src/components/FormSubmitBtnComponent/FormSubmitBtnComponent'
import FormBottomPrivacyCopy from 'src/components/PrivacyPolicyMessageComponent/PrivacyPolicyMessageComponent'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactFormComponent = () => {
  const formMethods = useForm()
  const { reset } = formMethods

  const [createContact, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('👌 Thank you for your message! 😁 We will be in touch soon.💙')
      reset()
    },
    onError: (error) => {
      console.error(error)
      toast.error('There was an error submitting your message.😳😳 Please refresh the page and try again')
    },
  })
  const recaptchaRef = useRef(null)

  const onSubmit = async (data) => {
    try {
      const token = await recaptchaRef.current.executeAsync()
      if (!token) {
        toast.error('👀 reCAPTCHA verification failed. Please try again. 😏')
        return
      }

      await createContact({
        variables: {
          input: {
            ...data,
            recaptchaValue: token,
          },
        },
      })

      toast.success('👌 Thank you for your message! 😁 We will be in touch soon.💙')
      reset()
    } catch (error) {
      console.error(error)
      toast.error('There was an error submitting your message. Please try again.')
    }
  }

  return (
    <>
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

        {/* Full Name Field */}
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

        {/* Email Address Field */}
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

        {/* Message Field */}
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

        {/* ReCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey={process.env.REDWOOD_ENV_RECAPTCHA_SITE_KEY}
            size="invisible"
            ref={recaptchaRef}
          />
        </div>

        {/* Submit Button */}
        <FormSubmitBtnComponent label="Send Message" loading={loading} />

        {/* Privacy Policy */}
        <FormBottomPrivacyCopy />
      </Form>
    </>
  )
}

export default ContactFormComponent
