import { createNote, getNotes, deleteNote, changeNote } from './request.js';
import { addNoteToUI, noteContainer } from './refactor-render.js';
import { validateTextField } from './refactor-validate.js';

const formElement = document.querySelector('form');
const textareaElement = document.querySelector('textarea');
const modalElement = document.querySelector('.modal');
const textAreaModalElement = document.querySelector('.modal-text');
const modalButton = document.querySelector('[data-bs-dismiss="modal"]');
const modalCloseButton = document.querySelector('.button-close');
const modalSaveButton = document.querySelector('.button-change');
let currentNoteElement;
let currentNoteId;

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

const openModal = () => {
  modalElement.classList.add('show');
  modalElement.classList.remove('fade');
};

const closeModal = () => {
  modalElement.classList.add('fade');
  modalElement.classList.remove('show');
};

noteContainer.onclick = (event) => {
  const targetClick = event.target;
  currentNoteElement = targetClick.closest('div.card');
  const noteText = currentNoteElement.querySelector('.card-header');
  currentNoteId = currentNoteElement.dataset.id;

  if (
    targetClick.tagName === 'BUTTON' &&
    targetClick.dataset.type === 'delete'
  ) {
    const deleteItem = currentNoteElement;

    deleteNote(deleteItem.dataset.id, () => {
      deleteItem.remove();
    });
  } else if (
    targetClick.tagName === 'BUTTON' &&
    targetClick.dataset.type === 'edit'
  ) {
    textAreaModalElement.value = noteText.textContent;
    openModal();
  }
};

modalButton.onclick = closeModal;
modalCloseButton.onclick = closeModal;

modalSaveButton.addEventListener('click', () => {
  const currentNoteText = currentNoteElement.querySelector('.card-header');

  const modalNote = {
    text: textAreaModalElement.value,
  };
  if (validateTextField(textAreaModalElement)) {
    changeNote(currentNoteId, modalNote, (noteResult) => {
      const parseModalNote = JSON.parse(noteResult);
      currentNoteText.textContent = parseModalNote.text;
      closeModal();
    });
  }
});
