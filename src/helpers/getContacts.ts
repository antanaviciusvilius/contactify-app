import axios from "axios";
import { useQuery } from "react-query";
import { Contact } from "../types/Contact";

const retrieveContacts = async () => {
  const response = await axios.get<Contact[]>(
      "http://frontend-task.m3tasite.net/api/contacts"
  );
  return response.data;
};

const useGetContacts = () => {
  return useQuery<Contact[], Error>("contacts", retrieveContacts);
};

export default useGetContacts;