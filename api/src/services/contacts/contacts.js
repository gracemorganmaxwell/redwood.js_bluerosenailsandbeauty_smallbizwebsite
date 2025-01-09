import { db } from "src/lib/db";
import { sendEmailNotification } from "src/lib/emailService";

export const contacts = () => {
  return db.contact.findMany();
};

export const contact = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  });
};

export const createContact = async ({ input }) => {
  const cont = await db.contact.create({
    data: input,
  });
  await sendEmailNotification(
    'contact',
    input,
  );
  return cont;
};

export const updateContact = ({ id, input }) => {
  return db.contact.update({
    data: input,
    where: { id },
  });
};

export const deleteContact = ({ id }) => {
  return db.contact.delete({
    where: { id },
  });
};
