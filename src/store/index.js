import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { feedReducer } from './reducers/index';

var store
export default {

	configure: (initialState) => { 
		
		const reducers = combineReducers({ 
			feed: feedReducer
		})

		if (initialState){
			store = createStore(
			    reducers,
			    initialState,
			    applyMiddleware(thunk)
			)
			return store
		}

		store = createStore(
		    reducers,
		    applyMiddleware(thunk)
		)
		return store
	},

	currentStore: () => {
		return store
	}
}
