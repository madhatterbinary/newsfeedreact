import React, { Component } from 'react';
import Feeds from '../components/containers/Feeds';
import Form from '../components/containers/Form';
import Feed from '../components/containers/Feed';

class Home extends Component {
  constructor(){
		super()

    }
    render() {
        return (
		    <div id="wrapper">
            <Feed />
            <div id="sidebar">
                <div className="inner">
                  <Form />
                  <nav id="menu">
                    <header className="major">
                        <h2>My Feeds</h2>
                    </header>
                    <Feeds/>
                  </nav>
                </div>
            </div>
			</div>
        )
    }
}

export default Home;