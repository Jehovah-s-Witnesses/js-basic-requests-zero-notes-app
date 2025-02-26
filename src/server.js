// const textareaElement = document.querySelector('textarea');
// const formElement = document.querySelector('form');
// const noteContainer = document.querySelector('.col-8.offset-2');
//
// //get data from server
// function getDataFromAPI() {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://localhost:4400/api/v1/notes');
//   xhr.onload = function () {
//     if (xhr.status.toString().startsWith('2')) {
//       const notes = JSON.parse(xhr.response);
//       notes.forEach((note) => addNoteToUI(note));
//     }
//   };
//   xhr.send();
// }
//
// getDataFromAPI();
//
// //add note html/css
// /**
//  *
//  * @param {Object} note
//  * @param {string} note.id
//  * @param {string} note.text
//  */
// function addNoteToUI(note) {
//   const newCard = document.createElement('div');
//   newCard.classList.add('card', 'mb-4');
//   newCard.dataset.id = note.id;
//   newCard.innerHTML = `
//   <h5 class="card-header">${note.text}</h5>
//   <div class="card-body">
//     <button class="btn btn-danger">Delete</button>
// </div>
//   `;
//
//   noteContainer.append(newCard);
// }
//
// //send note to server and get request
// function addNoteToApi(noteText) {
//   let xhr = new XMLHttpRequest();
//   xhr.open('POST', 'http://localhost:4400/api/v1/notes', true);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//
//   xhr.onload = function () {
//     if (xhr.status.toString().startsWith('2')) {
//       let newNote = JSON.parse(xhr.response);
//       addNoteToUI(newNote);
//       textareaElement.value = '';
//       textareaElement.classList.remove('is-valid');
//     }
//   };
//
//   const data = JSON.stringify({ text: noteText });
//   xhr.send(data);
// }
//
// //add note to page after checks
// formElement.addEventListener('submit', (event) => {
//   event.preventDefault();
//
//   if (textareaElement.value.length < 6) {
//     textareaElement.classList.add('is-invalid');
//     return false;
//   }
//   textareaElement.classList.remove('is-invalid');
//   return addNoteToApi(textareaElement.value);
// });
//
// //remove note from page
//
// noteContainer.addEventListener('click', (event) => {
//   const currentElement = event.target;
//
//   if (
//     currentElement.tagName === 'BUTTON' &&
//     currentElement.innerText === 'Delete'
//   ) {
//     const currentCard = currentElement.closest('.card');
//     currentElement.disabled = true;
//
//     let xhr = new XMLHttpRequest();
//     xhr.open(
//       'DELETE',
//       `http://localhost:4400/api/v1/users/${currentCard.dataset.id}`,
//     );
//     xhr.send();
//
//     xhr.onload = function () {
//       if (xhr.status.toString().startsWith('2')) {
//         currentCard.remove();
//       }
//     };
//   }
// });
