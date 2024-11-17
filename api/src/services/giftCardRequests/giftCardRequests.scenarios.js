export const standard = defineScenario({
  giftCardRequest: {
    one: {
      data: {
        message: "String",
        recipient_name: "String",
        gift_type: "String",
        delivery_method: "String",
        address: "String",
        gifter_address: "String",
      },
    },
    two: {
      data: {
        message: "String",
        recipient_name: "String",
        gift_type: "String",
        delivery_method: "String",
        address: "String",
        gifter_address: "String",
      },
    },
  },
});
