import {USER_DETAILS} from '../types';

export const userDetailsAction = userDetails => ({
  type: USER_DETAILS,
  payload: userDetails,
});
