import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Feed extends Component {

   render() {
       const selectedFeed = this.props.feed.selected;
       const name = (selectedFeed) ? selectedFeed.name : 'Welcome to Ulysses News Feeds'
       const title = (this.props.title) ? this.props.title : 'Select a feed to the left to display here';
       const description = (this.props.description) ? this.props.description : 'Your feed content will show here after you select a feed to the left.';
        return (
            <div id="main">
                <section id="banner">
                    <div className="content">
                    <header>
                        <h1>{name}</h1>
                        <hr />
                        <p>{title}</p>
                    </header>
                    <p>{description}</p>
                    </div>
                </section>           
            </div>
        )
   }
}
const mapStateToProps = state => {
       
    return {
        feed: state.feed,
        title: state.feed.title,
        description: state.feed.description
    }
};

export default connect(mapStateToProps)(Feed);