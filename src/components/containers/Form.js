import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Form extends Component {
    constructor(){
		super()
		this.state = {
            feeds:[],
			feed: {
				name: '',
				url: ''
			}
        }
    }

    updateFeed(field, event){
        let feed = Object.assign({}, this.state.feed);
        feed[field] = event.target.value
		this.setState({
			feed: feed
        })
    }

	addFeed(event){
        event.preventDefault();
        let feed = Object.assign({}, this.state.feed);
        this.props.onAddFeed(this.props.feeds, feed); 

    }
   render() {
       return (
            <div>
                <section id="search" className="alt">
                    <form method="post" action="#">
                        <input onChange={this.updateFeed.bind(this, 'name')} type="text" name="query" id="query" placeholder="Feed Name" /><br />
                        <input onChange={this.updateFeed.bind(this, 'url')} type="text" name="query" id="query" placeholder="Feed URL" /><br />
                        <button onClick={this.addFeed.bind(this)}>Add Feed</button>
                    </form>
                </section>
            </div>
       )
   }
}
const mapStateToProps = state => {
       
    return {
        feeds: state.feed.feeds
    }
};

const mapDispatchToProps = dispatch => {

    return {
        onAddFeed: (feeds, feed) => dispatch( actions.addFeed(feeds, feed))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Form);