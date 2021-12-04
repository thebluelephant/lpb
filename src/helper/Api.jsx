const axios = require('axios');
const baseURL = process.env.REACT_APP_API_URL;

export const fetchHomepageData = () => {
  return axios.get(`${baseURL}/api/homepage`)
    .then(response => response.data.data.attributes)
    .catch(error => {
      throw error;
    });
};

export const fetchContactPageData = () => {
  return axios.get(`${baseURL}/api/contact-page`)
    .then(response => response.data.data.attributes)
    .catch(error => {
      throw error;
    });
};

export const fetchMenu = () => {
  return axios.get(`${baseURL}/api/courses`)
    .then(response => response.data.data)
    .catch(error => {
      throw error;
    });
};

export const fetchMenuPrice = () => {
  return axios.get(`${baseURL}/api/menu-page`)
    .then(response => {
      const res = response.data.data.attributes
      const prices = {
        menu_price: res.menu_price,
        starter_price: res.starter_price,
        main_price: res.main_price,
        cheese_price: res.cheese_price,
        dessert_price: res.dessert_price
      }
      return prices
    })
    .catch(error => {
      throw error;
    });
};

export const fetchWines = () => {
  return axios.get(`${baseURL}/api/wines`)
    .then(response => response.data.data)
    .catch(error => {
      throw error;
    });
};

export const fetchCellarDescription = () => {
  return axios.get(`${baseURL}/api/wine-page`)
    .then(response => response.data.data.attributes)
    .catch(error => {
      throw error;
    });
};

