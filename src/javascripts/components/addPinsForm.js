import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#content-container').innerHTML = '';
  // document.querySelector('#add-button').innerHTML = '';
  // document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="title"> Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="Board Title" placeholder="Enter Board Title" required>
      </div>
      <div class="form-group">
      <label for="description">Description</label>
      <input type="text" class="form-control" id="description" aria-describedby="description" placeholder="Enter Description" required>
      </div>
      <div class="form-group">
        <label for="image-board">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <div class="form-group" id="select-board"></div>
      <button type="submit" id="submit-pin" class="btn btn-primary">Submit Pin</button>
    </form>`;
  selectBoard();
};
export default addPinForm;
