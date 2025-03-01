export const HTTP_METHODS = {
  get: 'GET',
  post: 'POST',
  patch: 'PATCH',
  delete: 'DELETE',
};

export const sendRequest = (
  url,
  method = HTTP_METHODS.get,
  callback,
  body = null,
  headers = {},
) => {
  const request = new XMLHttpRequest();

  request.open(method, url);

  for (let key in headers) {
    request.setRequestHeader(key, headers[key]);
  }

  if (body) {
    request.send(body);
  } else {
    request.send();
  }

  request.onload = () => {
    if (request.status.toString().startsWith('2')) {
      callback(request.response);
    } else {
      console.error('Помилка запиту:', request.status, request.responseText);
    }
  };
};
