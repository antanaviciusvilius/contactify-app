import { Contact } from "../types/Contact";
import { FiltersType } from "../types/FiltersType";

const filterHelper = (contacts: Contact[], filters: FiltersType | undefined): Contact[] => {
  if (!filters) return contacts;
  const { name, city, activity } = filters;
  return contacts?.filter((contact) => 
    nameFilter(`${contact.name} ${contact.surname}`, name) 
    && cityFilter(contact.city, city)
    && (activity ? contact.isActive === activity : true)
  );
};

const nameFilter = (firstString: string, secondString: string | undefined) => {
  if (!secondString) return true;
  return firstString.toLowerCase().includes(secondString.toLowerCase());
};

const cityFilter = (firstCity: string, secondCity: string | undefined) => {
  if (!firstCity || !secondCity || firstCity === '' || secondCity === '') return true;
  return firstCity === secondCity;
};

export { filterHelper };

