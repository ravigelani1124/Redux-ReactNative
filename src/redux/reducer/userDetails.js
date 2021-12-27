import {USER_DETAILS} from '../types';

const initialState = {
  userList: [],
};

export const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    default:
      return state;
  }
};
