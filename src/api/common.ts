import { FetchRequest, CallApi } from './type';

const get: FetchRequest['get'] = (url, options = {}) => {
  const query = Object.keys(options)
    ?.map((key) => key + '=' + options[key])
    .join('&');

  return fetch(`${url}?${query}`);
};

const fetchRequest: FetchRequest = {
  get,
};

export const callApi: CallApi = (method, url, options) =>
  fetchRequest[method](url, options)
    .then((resp) => resp.json())
    .catch(console.error);
