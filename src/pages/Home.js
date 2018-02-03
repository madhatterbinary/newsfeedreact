import React, { Component } from 'react';
import {Sidebar} from '../components/presentation'

class Home extends Component {

    render() {
        return (
		    <div id="wrapper">
		        <div id="main">
		            <div className="inner">
                  <section id="banner">
                    <div className="content">
                      <header>
                        <h1>Welcome to NewsFeed</h1>
                        <hr />
                        <p>A free and fully responsive site template</p>
                      </header>
                      <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                      <ul className="actions">
                        <li><a href="#" className="button big">Learn More</a></li>
                      </ul>
                    </div>
                  </section>

      					</div>
      			</div>

				<Sidebar />
			</div>
        )
    }
}

export default Home;