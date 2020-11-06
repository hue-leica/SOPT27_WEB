import { combineReducers } from "redux";
import loading from "./loading";
import { all } from "redux-saga/effects";
import input from './input';
import user, {userSaga} from './user';

const rootReducer = combineReducers({
  loading,
  input,
  user
});

export function* rootSaga() {
  yield all([userSaga()]);
}

export default rootReducer;
