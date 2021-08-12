import Axios from 'axios';
import PropTypes from 'prop-types';
import showToast from '../components/Toast';
import { CANCEL_REQUEST } from '../store/actions/types';
import { store } from '../store';

// const { BASE_URL } = Config;
export const BASE_URL =
  'https://residently-server-e6ann.ondigitalocean.app/api/v1';

/**
 * Utility that calls the backend api service
 * @param {String} url: /path/to/api
 * @param {String} type: GET, POST, PUT, PATCH, DELETE
 * @param data
 * @param {Object} headers: { 'Content-Type': '' }
 * @returns {Promise<data>}
 */
const api = (url, type, data, headers) => {
  if (!url || typeof url !== 'string') {
    store.dispatch({ type: CANCEL_REQUEST });
    throw new Error('Please pass a string url to this function: /path/to/api');
  }
  if (!type || typeof type !== 'string') {
    store.dispatch({ type: CANCEL_REQUEST });
    throw new Error(
      'Please add string api request type: GET, POST, PUT, PATCH, DELETE',
    );
  }

  const headerContent = () => {
    if (headers) {
      if (headers['Content-Type']) {
        return headers['Content-Type'];
      }
      return 'application/json';
    }
    return 'application/json';
  };

  const header = {
    'Content-Type': headerContent(),
    ...headers,
  };

  return new Promise((resolve, reject) => {
    console.log('url', `${BASE_URL}${url}`);
    Axios({
      method: type,
      url: `${BASE_URL}${url}`,
      data,
      headers: header,
    })
      .then((res) => {
        resolve(res.data || res);
      })
      // eslint-disable-next-line consistent-return
      .catch((error) => {
        // Sentry.captureException(error);
        // console.log(error, error.config);
        if (error && !error.response) {
          showToast(
            'Could not connect to the server, please check your internet connection',
          );
          reject(new Error());
          return store.dispatch({ type: CANCEL_REQUEST });
        }
        reject(error.response.data);
      });
  });
};

api.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  headers: PropTypes.object.isRequired,
};

export default api;
