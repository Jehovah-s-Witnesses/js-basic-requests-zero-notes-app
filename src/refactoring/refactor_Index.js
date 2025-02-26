import { createNote, getNotes, deleteNote } from './request.js';
import { addNoteToUI, noteContainer } from './refactor-render.js';
import { validateTextField } from './refactor-validate.js';

const formElement = document.querySelector('form');
const textareaElement = document.querySelector('textarea');

getNotes((response) => {
  const notes = JSON.parse(response);

  notes.forEach((note) => {
    addNoteToUI(note);
  });
});

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const note = {
    text: textareaElement.value,
  };

  if (validateTextField(textareaElement)) {
    createNote(note, (noteResult) => {
      formElement.reset();
      const parseNote = JSON.parse(noteResult);
      addNoteToUI(parseNote);
    });
  }
});

noteContainer.onclick = (event) => {
  const targetClick = event.target;

  if (
    targetClick.tagName === 'BUTTON' &&
    targetClick.dataset.type === 'delete'
  ) {
    const deleteItem = targetClick.closest('div.card');

    deleteNote(deleteItem.dataset.id, () => {
      deleteItem.remove();
    });
  }
};
