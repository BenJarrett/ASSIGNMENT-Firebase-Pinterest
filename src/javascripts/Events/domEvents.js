import addBoardForm from '../components/addBoardForm';
import { showBoards } from '../components/boards';
import { createBoard, deleteBoard } from '../helpers/data/boardsData';
import boardPinInfo from '../helpers/data/boardPinData';
import { showPins } from '../components/pins';
import addPinForm from '../components/addPinsForm';
import { createPin } from '../helpers/data/pinsData';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A PIN
    if (e.target.id.includes('delete-pin--')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLOCKED DELETE PIN', e.target.id);
      }
    }
    if (e.target.id.includes('view-pins')) {
      const boardId = e.target.id.split('--')[1];
      boardPinInfo(boardId).then((boardInfoObject) => {
        showPins(boardInfoObject.pins);
      });
    }
    // CLICK EVENT TO DELETE BOARD
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        e.preventDefault();
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoard(firebaseKey, uid).then((boardsArray) => showBoards(boardsArray));
      }
    }
    if (e.target.id.includes('create-board-btn')) {
      addBoardForm();
    }
    if (e.target.id.includes('create-pin-btn')) {
      addPinForm();
    }
    // click event for pins //
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        description: document.querySelector('#description').value,
        boards_Id: document.querySelector('#board').value,
        uid
      };
      createPin(pinObject, uid).then((pinArray) => showPins(pinArray));
    }
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObj = {
        image: document.querySelector('#image').value,
        title: document.querySelector('#title').value,
        uid
      };
      createBoard(boardObj, uid).then((boardsArray) => showBoards(boardsArray));
    }
  });
};

export default domEvents;
