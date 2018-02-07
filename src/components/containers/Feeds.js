import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Feeds extends Component {
    constructor(){
		super()
		this.state = {
            feeds:[],
			feed: {
				name: '',
				url: ''
			}
        }
        this.delete = this.delete.bind(this);
    }
    componentDidMount() {
        this.props.onFetchFeeds(this.state.feeds);
    }

    delete(id){
        this.props.onFeedDeleted(id, this.props.feeds);    
     }

     selectFeed(feed, event) {
        
         event.preventDefault();
         this.props.onSelectedFeed(feed);
         this.props.onGetFeedLink(event.target.name);
         
     }
   render() {

        if(this.props.feeds === undefined){
            return <div/>
        } else {
            return (
                <div>
                    <ul>     
                        { this.props.feeds.map((feed, i) =>{
                                const color = (feed === this.props.selected)? 'red': '#333'
                                return <li className="feed-item" key={i}>
                                <a style={{color}} onClick={this.selectFeed.bind(this,feed)} href='#' name={feed.url}>{feed.name}</a>
                                <button type="button" className="btn btn-danger" onClick={this.delete.bind(this, feed)}>delete</button></li>
                            })
                        }
                    </ul>               
                </div>
            )
        }
   }
}
const mapStateToProps = state => {
       
    return {
        feeds: state.feed.feeds,
        deletedFeed: state.feed.deletedFeed,
        selected:state.feed.selected
    }
};

const mapDispatchToProps = dispatch => {

    return {
        onFetchFeeds: (feeds) => dispatch( actions.fetchFeeds(feeds)),
        onFeedDeleted: (id,feeds) => dispatch(actions.deleteFeed(id, feeds)),
        onSelectedFeed: (feed) => dispatch(actions.selectedFeed(feed)),
        onGetFeedLink: (feedLink) => dispatch(actions.getFeedLink(feedLink))

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Feeds);