import {
  subscriptions,
  subscription,
  createSubscription,
  updateSubscription,
  deleteSubscription,
} from "./subscriptions";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("subscriptions", () => {
  scenario("returns all subscriptions", async (scenario) => {
    const result = await subscriptions();

    expect(result.length).toEqual(Object.keys(scenario.subscription).length);
  });

  scenario("returns a single subscription", async (scenario) => {
    const result = await subscription({ id: scenario.subscription.one.id });

    expect(result).toEqual(scenario.subscription.one);
  });

  scenario("creates a subscription", async () => {
    const result = await createSubscription({
      input: { email: "String2571967" },
    });

    expect(result.email).toEqual("String2571967");
  });

  scenario("updates a subscription", async (scenario) => {
    const original = await subscription({
      id: scenario.subscription.one.id,
    });
    const result = await updateSubscription({
      id: original.id,
      input: { email: "String71431572" },
    });

    expect(result.email).toEqual("String71431572");
  });

  scenario("deletes a subscription", async (scenario) => {
    const original = await deleteSubscription({
      id: scenario.subscription.one.id,
    });
    const result = await subscription({ id: original.id });

    expect(result).toEqual(null);
  });
});
