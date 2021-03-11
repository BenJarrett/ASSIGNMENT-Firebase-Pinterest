import { showBoards } from '../components/boards';
import { deleteBoard } from '../helpers/data/boardsData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A PIN
    if (e.target.id.includes('delete-pin--')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLOCKED DELETE PIN', e.target.id);
      }
    }
    // CLICK EVENT TO DELETE BOARD
    if (e.target.id.includes('delete-board--')) {
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--'[1]);
        deleteBoard(firebaseKey).then((boardsArray) => showBoards(boardsArray));
      }
    }
  });
};

export default domEvents;
