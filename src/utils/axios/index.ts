import axios from 'axios';

const AHA_URL = 'https://avl-frontend-exam.herokuapp.com/api';

export const API_SUB_URL = {
  USER_ALL: '/users/all',
  USER_FRIENDS: '/users/friends',
  TAGS: '/tags',
};

const instance = axios.create({
  baseURL: AHA_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
