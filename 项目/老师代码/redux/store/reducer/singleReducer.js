import {SAVE_SINGLE} from '../actions';

export default function (state = [], action) {
  let newState = Object.assign({}, state);
  // console.log(action.data);
  switch (action.type) {
    case SAVE_SINGLE:
      newState = action.data;
      state = newState;
      return [...newState];

    default:
      return [...newState];
  }
}
