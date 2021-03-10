const showBoards = (arr) => {
  document.querySelector('#content-container').innerHTML = '';
  // WILL NEED TO ADD BUTTON
  arr.forEach((item) => {
    document.querySelector('#content-container').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-board-btn--${item.firebaseKey}">Edit Board</button>
      <button class="btn btn-danger" id="delete-board--${item.firebaseKey}">Delete Book</button>
    </div>
  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#content-container').innerHTML = '<h1>No Items</h1>';
};

export { showBoards, emptyBoards };
