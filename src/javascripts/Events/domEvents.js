const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-pin--')) {
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        console.warn(firebaseKey);
      }
    }
  });
};

export default domEvents;
