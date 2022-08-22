import axios from 'axios';

axios.defaults.baseURL = 'https://62fe718c41165d66bfc03bcd.mockapi.io/contacts';

export const getContactsApi = () => {
  return axios('/contacts').then(response => response.data);
};

export const addContactsApi = item => {
  return axios.post('/contacts', item).then(response => response.data);
};

export const deleteContactApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
