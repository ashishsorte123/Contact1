import {CLEAR_AUTH_STATE} from '../../../constants/actionTypes';

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};
