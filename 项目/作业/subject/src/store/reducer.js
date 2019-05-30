import { GetDatas, SetDats } from "./valusRedux";
export default (state = {}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GetDatas:
      let newState = action.value;
      state = newState;
      return { ...newState };
    case SetDats:
      return { ...state };
    default:
      newState;
  }
};

