// import { cardContainer, renderCard } from './render-promise.js';
// import { closest } from 'jsdom/lib/jsdom/living/helpers/traversal.js';
//
// const createForm = document.querySelector('.note-form');
// const submitBtn = document.querySelector('button');
//
// fetch('http://localhost:4400/api/v1/notes')
//   .then((response) => {
//     console.log(response.headers.get('content-type'));
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach(renderCard);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
//
// createForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//
//   const formData = new FormData(createForm);
//   submitBtn.disabled = true;
//   fetch('http://localhost:4400/api/v1/notes', {
//     method: 'POST',
//     body: formData,
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((note) => {
//       renderCard(note);
//       createForm.reset();
//       submitBtn.disabled = false;
//     });
// });
//
// cardContainer.addEventListener('click', (event) => {
//   const currentTarget = event.target;
//
//   if (currentTarget.dataset.type === 'delete') {
//     //console.log(currentTarget.dataset.id);
//
//     currentTarget.disabled = true;
//
//     fetch(`http://localhost:4400/api/v1/notes/${currentTarget.dataset.id}`, {
//       method: 'DELETE',
//     }).then((response) => {
//       if (response.ok) {
//         currentTarget.closest('.card').remove();
//       } else {
//         currentTarget.disabled = false;
//       }
//     });
//   }
// });
