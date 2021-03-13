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
// Get all board pins //
const getBoardPins = (boardsId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="boards_Id"&equalTo="${boardsId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// Get single Pin //
const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
// Create Pin //;
const createPin = (pinObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json`, pinObj).then((response) => {
    const body = { firebaseKey: response.data.name };
    axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body).then(() => {
      getBoardPins(pinObj.boards_Id).then((pinsArray) => resolve(pinsArray));
    });
  })
    .catch((error) => reject(error));
});

// DELETE PIN //
// const deletePin = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
//     .then((response) => console.warn(response.data))
//     .get((error) => reject(error));
// });

export {
  getPins, getBoardPins, createPin, getSinglePin
};
