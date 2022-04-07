
import {
	compose,
	createStore,
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import {
	SOCKET_URL,
	SOCKET_URL_USER,
} from '../utils/constants';
import { authSocketAllActions } from './actions/auth-socket-actions';
import { socketAllActions } from './actions/socket-actions';
import { rootReducer } from './reducers/root-reducer';
import { socketMiddleware } from './socketMiddleware';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
	applyMiddleware(
		thunk,
		socketMiddleware(SOCKET_URL, socketAllActions, false),
		socketMiddleware(SOCKET_URL_USER, authSocketAllActions, true)
	),
);

export const store = createStore(rootReducer, enhancer);
