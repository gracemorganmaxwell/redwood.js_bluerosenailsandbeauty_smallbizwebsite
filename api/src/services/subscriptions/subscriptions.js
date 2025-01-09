import { db } from "src/lib/db";
import { sendEmailNotification } from "src/lib/emailService";

export const subscriptions = () => {
  return db.subscription.findMany();
};

export const subscription = ({ id }) => {
  return db.subscription.findUnique({
    where: { id },
  });
};

export const createSubscription = async ({ input }) => {
  try
  {
    const sub = await db.subscription.create({
      data: input,
    });
    await sendEmailNotification('subscription', input);
    return sub;
  }
  catch (error)
  {
    console.error(JSON.stringify(error))
    throw error
  }
};

export const updateSubscription = ({ id, input }) => {
  return db.subscription.update({
    data: input,
    where: { id },
  });
};

export const deleteSubscription = ({ id }) => {
  return db.subscription.delete({
    where: { id },
  });
};
