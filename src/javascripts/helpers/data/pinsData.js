import axios from 'axios';
import firebaseConfig from '../apiKeys';

// API CALLS FOR PINS //
const dbUrl = firebaseConfig.databaseURL;

// GET PINS //
const getPins = (boardsId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="boards_id"&equalTo="${boardsId}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// DELETE PIN //
const deletePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => console.warn(response.data))
    .get((error) => reject(error));
});

export { getPins, deletePin };
