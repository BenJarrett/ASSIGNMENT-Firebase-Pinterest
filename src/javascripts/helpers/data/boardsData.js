import axios from 'axios';
// import { get } from 'jquery';
import firebaseConfig from '../apiKeys';

// API CALLS FOR PINS //
const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS //
const getBoards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// DELETE BOARD //
const deleteBoard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards(uid).then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
  // REFRESH DOM WILL BOARDS EXCLUDING THE ONE WE DELETED //
});

// Create Board //
const createBoard = (boardObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json`, boardObj).then((response) => {
    const body = { firebaseKey: response.data.name };
    axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body).then(() => {
      getBoards(uid).then((boardsArray) => resolve(boardsArray));
    });
  })
    .catch((error) => reject(error));
});

// Get Single Board //
const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${boardId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getBoards, deleteBoard, createBoard, getSingleBoard
};
