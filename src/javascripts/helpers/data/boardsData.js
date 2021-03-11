import axios from 'axios';
// import { get } from 'jquery';
import firebaseConfig from '../apiKeys';

// API CALLS FOR PINS //
const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS //
const getBoards = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// DELETE BOARD //
const deleteBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards().then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
  // REFRESH DOM WILL BOARDS EXCLUDING THE ONE WE DELETED //
});

export { getBoards, deleteBoard };
