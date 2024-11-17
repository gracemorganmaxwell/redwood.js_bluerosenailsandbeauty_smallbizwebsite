import { db } from "src/lib/db";

export const giftCardRequests = () => {
  return db.giftCardRequest.findMany();
};

export const giftCardRequest = ({ id }) => {
  return db.giftCardRequest.findUnique({
    where: { id },
  });
};

export const createGiftCardRequest = ({ input }) => {
  return db.giftCardRequest.create({
    data: input,
  });
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
