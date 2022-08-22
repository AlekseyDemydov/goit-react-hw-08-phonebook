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

export const registerUserApi = data => {
  token.unset();
  return axios.post('/users/signup', data).then(response => response.data);
};

export const loginUserApi = data => {
  token.unset();
  return axios.post('/users/login', data).then(response => response.data);
};

export const logoutUserApi = () => {
  return axios.post('/users/logout').then(response => response.data);
};

export const getCurrentUserApi = userToken => {
  token.set(userToken);
  return axios.get('/users/current').then(response => response.data);
};

export const getContactsApi = userToken => {
  token.set(userToken);
  return axios('/contacts').then(response => response.data);
};

export const addContactsApi = item => {
  return axios.post('/contacts', item).then(response => response.data);
};

export const deleteContactApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
