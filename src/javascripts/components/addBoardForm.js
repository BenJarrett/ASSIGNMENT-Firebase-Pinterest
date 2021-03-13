const addBoardForm = () => {
  document.querySelector('#content-container').innerHTML = '';
  // document.querySelector('#add-button').innerHTML = '';
  // document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-board-form" class="mb-4">
      <div class="form-group">
        <label for="title">Book Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="Board Title" placeholder="Enter Board Title" required>
      </div>
      <div class="form-group">
        <label for="image-board">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <button type="submit" id="submit-board" class="btn btn-primary">Submit Board</button>
    </form>`;
  // selectBoard();
};
export default addBoardForm;
