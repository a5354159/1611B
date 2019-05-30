import {SAVE_QUESTION, GET_QUESTION} from '../actions';

export default function (state = {}, action) {
  let newState = Object.assign({}, state);
  // console.log(action.data);
  switch (action.type) {
    case SAVE_QUESTION:
      newState = action.data;
      state = newState;
      return {...newState};

    case GET_QUESTION:
      return {...state};
    default:
      return {...newState};
  }
}
