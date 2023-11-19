import axios from "axios";
import { useQuery } from "react-query";
import { Contact } from "../types/Contact";

const retrieveContactById = async (contactId: string) => {
  const response = await axios.get<Contact>(
      `http://frontend-task.m3tasite.net/api/contacts/${contactId}`
  );
  return response.data;
};

const useGetContactById = (contactId: string) => {
  return useQuery<Contact, Error>({
    queryKey: ['contacts', contactId],
    queryFn: () => retrieveContactById(contactId),
  });
};


export default useGetContactById;