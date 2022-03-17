import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer, {
  userReducerInititalState,
} from "store/reducers/userReducer";

export const initialState = {
  user: userReducerInititalState,
};

const userReducerConfig = {
  key: "userReducer",
  storage,
};

export default combineReducers({
  user: persistReducer(userReducerConfig, userReducer),
});
