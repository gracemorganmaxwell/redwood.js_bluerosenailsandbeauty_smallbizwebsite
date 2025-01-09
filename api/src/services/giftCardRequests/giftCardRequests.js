import { db } from "src/lib/db";
import { sendEmailNotification } from "src/lib/emailService";

export const giftCardRequests = () => {
  return db.giftCardRequest.findMany();
};

export const giftCardRequest = ({ id }) => {
  return db.giftCardRequest.findUnique({
    where: { id },
  });
};

export const createGiftCardRequest = async ({ input }) => {
  const gcr = await db.giftCardRequest.create({
    data: input,
  });
  await sendEmailNotification('giftcard', input);
  return gcr;
};

export const updateGiftCardRequest = ({ id, input }) => {
  return db.giftCardRequest.update({
    data: input,
    where: { id },
  });
};

export const deleteGiftCardRequest = ({ id }) => {
  return db.giftCardRequest.delete({
    where: { id },
  });
};
