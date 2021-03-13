import { showBoards } from '../components/boards';
import { deleteBoard } from '../helpers/data/boardsData';

const domEvents = (userId) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A PIN
    if (e.target.id.includes('delete-pin--')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLOCKED DELETE PIN', e.target.id);
      }
    }
    // CLICK EVENT TO DELETE BOARD
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        e.preventDefault();
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoard(firebaseKey, userId).then((boardsArray) => showBoards(boardsArray));
      }
    }
  });
};

export default domEvents;
