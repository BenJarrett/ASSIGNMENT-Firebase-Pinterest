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

export default getPins;
