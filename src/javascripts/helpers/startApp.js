import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navagationBar';
import { emptyBoards, showBoards } from '../components/boards';
import { getBoards } from './data/boardsData';
import displayPins from '../Events/boardEvents';
import domEvents from '../Events/domEvents';
// import getPins from './data/pinsData';
// import { showPins, noPins } from '../components/pins';

const startApp = (user) => {
  console.warn(user.uid);
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
  domEvents(user.uid);
  // getPins(user.uid).then((pins) => {
  //   if (pins.length) {
  //     showPins(pins);
  //   } else {
  //     noPins();
  //   }
  // });
};

export default startApp;
