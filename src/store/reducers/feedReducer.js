import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

var initialState = {
	feeds: [],
	selected: null
}
export const fetchFeedStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

export const fetchFeedsSuccess = ( state, action ) => {
    return updateObject( state, {
        feeds: action.feeds
	} );
};

export const fetchFeedsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};
export const fetchFeeds = (state, action) => {
	return updateObject( state, action.feeds );
}
export const addFeed = (state, action) => {
	return updateObject( state, action.feed );
}
export const addFeedSuccess = (state, action) => {
	const newFeed = updateObject( state, action.feed );

	return updateObject( state, {
        feeds: state.feeds.concat(newFeed),
        feed: action.feed
    } );
}
export const addFeedFail = (state, action) => {
	return updateObject( state, { loading: false } );
}

export const deleteFeedSuccess = (state, action) => {

	const newFeeds = action.feedsToUpdate.filter(feed => feed !== action.feedId);
	return updateObject( state, { feeds: newFeeds } );	
}

export const selectedFeed = (state, action) => {
	return updateObject( state, { selected: action.selected } );
}

export const getFeedLinkSuccess = (state, action) => {
	return updateObject( state, { 
		title: action.title,
		description: action.description 
	});
}

export const feedReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_ORDERS_START: return fetchFeedStart( state, action );
        case actionTypes.FETCH_FEEDS_SUCCESS: return fetchFeedsSuccess( state, action );
		case actionTypes.FETCH_FEEDS_FAIL: return fetchFeedsFail( state, action );
		case actionTypes.ADD_FEED: return addFeed( state, action );
		case actionTypes.ADD_FEED_SUCCESS: return addFeedSuccess( state, action );
		case actionTypes.ADD_FEED_FAIL: return addFeedFail( state, action );
		case actionTypes.DELETE_FEED_SUCCESS: return deleteFeedSuccess( state, action );
		case actionTypes.SELECT_FEED: return selectedFeed( state, action );
		case actionTypes.GET_FEED_LINK_SUCCESS: return getFeedLinkSuccess( state, action );
		
		
        default: return state;
    }
};