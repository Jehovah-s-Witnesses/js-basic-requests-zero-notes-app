import { HTTP_METHODS, sendRequest } from './api.js';

const baseURL = 'http://localhost:4400/api/v1';

export const getNotes = (resultCallback) => {
  sendRequest(`${baseURL}/notes`, HTTP_METHODS.get, resultCallback);
};

/**
 *
 * @param {Object} note
 * @param {string} note.text
 * @param {string} note.id
 */
export const createNote = (note, resultCallback) => {
  sendRequest(
    `${baseURL}/notes`,
    HTTP_METHODS.post,
    resultCallback,
    JSON.stringify(note),
    { 'content-type': 'application/json' },
  );
};

/**
 *
 * @param {Object} note
 * @param {string} note.text
 * @param resultCallback
 */

export const changeNote = (id, note, resultCallback) => {
  sendRequest(
    `${baseURL}/users/${id}`,
    HTTP_METHODS.patch,
    resultCallback,
    JSON.stringify(note),
    { 'content-type': 'application/json' },
  );
};

export const deleteNote = (id, resultCallback) => {
  sendRequest(`${baseURL}/users/${id}`, HTTP_METHODS.delete, resultCallback);
};
