import { getSingleBoard } from './boardsData';
import { getBoardPins } from './pinsData';

const boardPinInfo = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const boardPins = getBoardPins(boardId);
  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinResponse]) => {
      resolve({ board: boardResponse, pins: boardPinResponse });
    })
    .catch((error) => reject(error));
});

export default boardPinInfo;
