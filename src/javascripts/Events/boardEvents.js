// import showPins from '../components/pins';
import { showPins } from '../components/pins';
import getPins from '../helpers/data/pinsData';

const displayPins = (i) => {
  document.querySelectorAll('.card-title')[i].addEventListener('click', (e) => {
    e.preventDefault();
    getPins(e.target.id).then((pins) => showPins(pins));
  });
};

export default displayPins;
