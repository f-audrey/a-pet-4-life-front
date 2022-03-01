/* eslint-disable spaced-comment */
import axios from 'axios';
import {
  SEND_SEARCH_QUERY_BY_ZIPCODE,
  SEND_SEARCH_QUERY_BY_DEPARTMENT,
  SEND_SEARCH_QUERY_BY_REGION,
  insertSearchResultToState,
} from '../actions/associations';

const associationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    //todo recherche assoc par code postal
    case SEND_SEARCH_QUERY_BY_ZIPCODE:
      {
        const {
          associations: {
            formAssoc: { zipcode },
          },
        } = store.getState();

        const config = {
          geolocation: 'zipcode',
          responseLocation: zipcode,
        };

        axios
          .post('http://localhost:3000/api/user/search', config)
          .then((response) => {
            store.dispatch(insertSearchResultToState(response.data));
          })
          .catch((error) => {
            console.log('error', error);
          });
      }

      next(action);
      break;

    //todo recherche assoc par département
    case SEND_SEARCH_QUERY_BY_DEPARTMENT:
      {
        const {
          associations: {
            formAssoc: { department },
          },
        } = store.getState();

        const config = {
          geolocation: 'department',
          responseLocation: department,
        };

        axios
          .post('http://localhost:3000/api/user/search', config)
          .then((response) => {
            store.dispatch(insertSearchResultToState(response.data));
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
      next(action);
      break;

    //todo recherche assoc par région
    case SEND_SEARCH_QUERY_BY_REGION:
      {
        const {
          associations: {
            formAssoc: { region },
          },
<<<<<<< HEAD
        } = state;
        console.log(`on est dans le middleware region: ${region}`);
        const objetest = {

=======
        } = store.getState();

        const config = {
>>>>>>> 9a736ec89e57b5d481b96cd178b19e0e6d9bf68d
          geolocation: 'region',
          responseLocation: region,

        };

        axios
          .post('http://localhost:3000/api/user/search', config)
          .then((response) => {
<<<<<<< HEAD
            console.log('success', response);
=======
            store.dispatch(insertSearchResultToState(response.data));
          })
          .catch((error) => {
            console.log('error', error);
>>>>>>> 9a736ec89e57b5d481b96cd178b19e0e6d9bf68d
          });
      }
      next(action);
      break;

    default:
      next(action);
  }
};

export default associationMiddleware;
