export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type GiftCardRequest {
    id: Int!
    name: String!
    email: String!
    message: String!
    recipientName: String
    giftType: String
    deliveryMethod: String
    address: String
    gifterAddress: String
    createdAt: DateTime!
  }

  type Subscription {
    id: Int!
    name: String!
    email: String!
    subscribedAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @requireAuth(roles: ["admin", "business_owner"])
    contact(id: Int!): Contact @requireAuth(roles: ["admin", "business_owner"])
    giftCardRequests: [GiftCardRequest!]!
      @requireAuth(roles: ["admin", "business_owner"])
    giftCardRequest(id: Int!): GiftCardRequest
      @requireAuth(roles: ["admin", "business_owner"])
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
    recaptchaValue: String!
  }

  input CreateGiftCardRequestInput {
    name: String!
    email: String!
    message: String!
    recipientName: String!
    giftType: String!
    deliveryMethod: String!
    recipientAddress: String
    gifterAddress: String
    recipientEmail: String
    recaptchaValue: String!
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
  }

  input UpdateGiftCardRequestInput {
    name: String
    email: String
    message: String
    recipientName: String
    giftType: String
    deliveryMethod: String
    address: String
    gifterAddress: String
  }

  input CreateSubscriptionInput {
    name: String!
    email: String!
    recaptchaValue: String!
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
    updateContact(id: Int!, input: UpdateContactInput!): Contact!
      @requireAuth(roles: ["admin", "business_owner"])
    deleteContact(id: Int!): Contact!
      @requireAuth(roles: ["admin", "business_owner"])

    createGiftCardRequest(input: CreateGiftCardRequestInput!): GiftCardRequest!
      @skipAuth
    updateGiftCardRequest(
      id: Int!
      input: UpdateGiftCardRequestInput!
    ): GiftCardRequest! @requireAuth(roles: ["admin", "business_owner"])
    deleteGiftCardRequest(id: Int!): GiftCardRequest!
      @requireAuth(roles: ["admin", "business_owner"])

    createSubscription(input: CreateSubscriptionInput!): Subscription! @skipAuth
  }
`
