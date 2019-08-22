import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from '../../node_modules/redux';
import thunk from '../../node_modules/redux-thunk';
import serviceReducer from './service-reducer';

const AppReducers = combineReducers({
  serviceReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
