const showPins = (array) => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  // WILL NEED TO ADD BUTTON
  array.forEach((item) => {
    document.querySelector('#content-container').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
    <a href="#"><h5 id="board-title--${item.firebaseKey}" class="card-title">${item.title}</h5></a>
    </div>
  </div>`;
  });
};

const noPins = () => {
  document.querySelector('#content-container').innerHTML = '<h1>You have no pins on this board.</h1>';
};

export { showPins, noPins };
