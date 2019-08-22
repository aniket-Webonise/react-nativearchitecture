import {APIConst} from '../network/api-constant';
import NetworkManager from '../network/NetworkManager';
import * as ActionTypes from './action-type';

export const serviceActionPending = () => ({
  type: ActionTypes.SERVICE_PENDING,
});

export const serviceActionError = error => ({
  type: ActionTypes.SERVICE_ERROR,
  error,
});

export const serviceActionSuccess = data => ({
  type: ActionTypes.SERVICE_SUCCESS,
  data,
});

export const callGameAPI = () => {
  return dispatch => {
    dispatch(serviceActionPending());
    const url = APIConst.testAPI;
    NetworkManager.requestGET(url)
      .then(res => res.json())
      .then(response => {
        dispatch(serviceActionSuccess(response.data.children));
      })
      .catch(error => {
        dispatch(serviceActionError(error));
      });
  };
};
