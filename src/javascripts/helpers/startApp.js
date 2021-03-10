import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navagationBar';
import { emptyBoards, showBoards } from '../components/boards';
import getBoards from './data/boardsData';
import displayPins from '../Events/boardEvents';
// import getPins from './data/pinsData';
// import { showPins, noPins } from '../components/pins';

const startApp = (user) => {
  domBuilder(user.uid);
  navBar();
  document.querySelector('#create-board-nav').innerHTML = '<a class="nav-link" href="#">Create Board</a>';
  logoutButton();
  getBoards(user.uid).then((boards) => {
    if (boards.length) {
      showBoards(boards);
      for (let i = 0; i < boards.length; i += 1) {
        displayPins(i);
      }
    } else {
      emptyBoards();
    }
  });
  // getPins(user.uid).then((pins) => {
  //   if (pins.length) {
  //     showPins(pins);
  //   } else {
  //     noPins();
  //   }
  // });
};

export default startApp;
