//Action Types
export const userActionTypes = Object.freeze({ ADD_PROFILE: "ADD_PROFILE" });

// All Actions
const addProfile = (payload) => {
  return {
    type: userActionTypes.ADD_PROFILE,
    payload,
  };
};

// Action Dispatch Functions
const addUserProfile = (payload) => (dispatch) => {
  new Promise((resolve) => {
    dispatch(addProfile(payload));
    resolve("Profile added successfully");
  });
};
