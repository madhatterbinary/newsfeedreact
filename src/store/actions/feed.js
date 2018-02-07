import axios from '../../utils/axios-feeds';
import axiosfeed from 'axios';
import * as actionTypes from './actionTypes';


export const fetchFeedStart = () => {
	//alert('fetchFeedStart')
    return {
		type: actionTypes.FETCH_FEED_START,
		loading:true
    };
};
export const fetchFeedsSuccess = ( feeds ) => {
	//alert('fetchFeedsSuccess in actions '+JSON.stringify(feeds))
    return {
        type: actionTypes.FETCH_FEEDS_SUCCESS,
        feeds: feeds
    };
};
export const fetchFeedsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_FEEDS_FAIL,
        error: error
    };
};
export const addFeed = ( feeds, feed ) => {
	return dispatch => {
	    axios.post('/feeds.json', feed)
        .then( response => {  
				dispatch(addFeedSuccess(feeds, feed));
        } )
        .catch( error => {
            dispatch(addFeedFail(error));
		} );
	}
};
export const deleteFeed = (id, feeds) => {
	return dispatch => {
		axios.get('/feeds.json?orderBy="name"&equalTo="' + id.name + '"')
        .then( response => {  
            for ( let key in response.data ) {  
				axios.delete('/feeds/' + key + '.json')
				.then(response => {
					dispatch(deleteFeedSuccess(id, feeds)); 
					axios.get('/feeds.json')
					.then(response => {

					})
				}) 
            }
        } )
        .catch( error => {
            alert('Error in deleteFeed: ' + error.message)
        } );
	}
}
export const deleteFeedSuccess = (id, feeds) => {
	return {
		type: actionTypes.DELETE_FEED_SUCCESS,
		feedId: id,
		feedsToUpdate:feeds
	}
}
export const addFeedSuccess = (feeds, feed) => {
	return {
        type: actionTypes.ADD_FEED_SUCCESS,
		feeds: feeds,
		feed: feed
	};

}


export const addFeedFail = ( error ) => {
    return {
        type: actionTypes.ADD_FEED_FAIL,
		error: error
	};
}
export const getFeedLinkFail = ( error ) => {
    return {
        type: actionTypes.GET_FEED_LINK_FAIL,
		error: error
	};
}


export const selectedFeed = (feed) => {
	return {
		type: actionTypes.SELECT_FEED,
		selected: feed
	}
}
export const getFeedLink = (feedLink) => {
	return dispatch => {
		const feedjson =[];
		axiosfeed.get('https://api.rss2json.com/v1/api.json?rss_url='+feedLink)  
		.then( response => {
			feedjson.unshift(response.data.feed);
			dispatch(getFeedLinkSuccess(feedjson));

		} )
		.catch( error => {
			alert('error '+error.message);
			dispatch(getFeedLinkFail());
		} )
    }

}
export const getFeedLinkSuccess = (feedjson) => {
	// alert('action getFeedLinkSuccess title: '+JSON.stringify(feedjson[0].title) )
	// alert('action getFeedLinkSuccess description: '+JSON.stringify(feedjson[0].description) )
	
    return {
		type: actionTypes.GET_FEED_LINK_SUCCESS,
		title: feedjson[0].title,
		description: feedjson[0].description
    };
};

export const fetchFeeds = () => {
	return dispatch => {
			dispatch(fetchFeedStart())
			const feeds =[];
			axios.get('/feeds.json') 
			.then( response => {
				 for ( let key in response.data ) {       
					feeds.unshift(response.data[key]);
				}
				dispatch(fetchFeedsSuccess(feeds));
			} )
			.catch( error => {
				
				dispatch(fetchFeedsFail(error));
			} )
	}
};


	
