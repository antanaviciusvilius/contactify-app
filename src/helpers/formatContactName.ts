import { Contact } from "../types/Contact";

const formatContactName = (contact: Contact) => {
  return `${contact.name} ${contact.surname[0]}.`;
};

export default formatContactName;