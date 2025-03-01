export const noteContainer = document.querySelector('.col-8.offset-2');

/**
 *
 * @param {Object} note
 * @param {string} note.text
 * @param {string} note.id
 */

export function addNoteToUI(note) {
  const noteCard = document.createElement('div');
  noteCard.classList.add('card', 'mb-4');
  noteCard.dataset.id = note.id;
  noteCard.innerHTML = `
   <h5 class="card-header">${note.text}</h5>
   <div class="card-body">
   <button data-type="delete" class="btn btn-danger">Delete</button>
    <button data-type="edit" type="submit" class="btn btn-primary">Edit</button>
   </div>
`;
  noteContainer.append(noteCard);
}
