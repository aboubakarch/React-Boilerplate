import { userActionTypes } from "store/actions/userAction";

export const userReducerInititalState = {
  isLoading: false,
  isLoggedIn: false,
  profile: null,
};

const userReducer = (state = userReducerInititalState, action) => {
  const { type, payload, error } = action || {};
  switch (type) {
    case userActionTypes.ADD_PROFILE: {
      return { ...state, profile: payload };
    }
    default:
      return state;
  }
};

export default userReducer;
