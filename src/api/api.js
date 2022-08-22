import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUserApi = async data => {
  token.unset();
  const response = await axios.post('/users/signup', data);
  return response.data;
};

export const loginUserApi = async data => {
  token.unset();
  const response = await axios.post('users/login', data);
  return response.data;
};

export const logoutUserApi = async () => {
  const response = await axios.post('/users/logout');
  return response.data;
};

export const getCurrentUserApi = async userToken => {
  token.set(userToken);
  const response = await axios.get('/users/current');
  return response.data;
};

export const getContactsApi = async userToken => {
  token.set(userToken);
  const response = await axios('/contacts');
  return response.data;
};

export const addContactsApi = async item => {
  const response = await axios.post('/contacts', item);
  return response.data;
};

export const deleteContactApi = async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
};
