import {createStore, applyMiddleware, combineReducers} from 'redux'

import thunk from 'redux-thunk';
import singleQuestions from './reducer/singleReducer'

import allQuestionsReducer from './reducer/allQuestionsReducer.js';

//
// let getNum = function (state = 0, action) {
//   switch (action.type) {
//     case "ADD":
//       //深拷贝
//       // let newState = Object.assign({}, state);
//       state++;
//       return state;
//     case "SUB":
//       //深拷贝
//       // let newState = Object.assign({}, state);
//       state--;
//       return state;
//     default:
//       return state;
//
//   }
//
// };


let rootReducer = combineReducers({
  allQuestionsReducer,singleQuestions
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

//Provider
