import { Contact } from "../types/Contact";

const formatContactName = (contact: Contact) => {
  const surname = contact.surname?.[0] ? `${contact.surname?.[0]}.` : '';
  return `${contact.name} ${surname}`;
};

export default formatContactName;