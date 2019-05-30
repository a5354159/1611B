import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import aaa from './reducer';

let reducer = combineReducers({
    aaa
})
const store = createStore(reducer,applyMiddleware(thunk));
export default store;