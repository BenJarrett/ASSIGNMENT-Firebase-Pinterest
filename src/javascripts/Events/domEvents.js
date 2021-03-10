// const domEvents = (uid) => {
//   document.querySelector('body').addEventListener('click', (e) => {
//     if (e.target.id.includes('author-name-title')) {
//       const authorId = e.target.id.split('--')[1];
//       authorBookInfo(authorId).then((authorInfoObject) => {
//         showBooks(authorInfoObject.books);
//         authorInfo(authorInfoObject.author);
//       });
//     }
//   }
