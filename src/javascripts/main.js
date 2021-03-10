// USE WITH FIREBASE AUTH
// import firebase from 'firebase/app';
// import 'firebase/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import checkLoginStatus from './helpers/auth';

const init = () => {
  checkLoginStatus();
};

init();
