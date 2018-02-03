import React, { Component } from 'react'
import turbo from 'turbo360'

class Sidebar extends Component {

    constructor(){
		super()
		this.state = {
			feed: {
				name: '',
				url: ''
			}
		}
	}

	updateFeed(field, event){
		//console.log('updateFeed: ' + field + '==' + event.target.value)
		let feed = Object.assign({}, this.state.feed)
		feed[field] = event.target.value

		this.setState({
			feed: feed
		})
	}

	addFeed(event){
		event.preventDefault()
        //console.log('Add Feed: '+ JSON.stringify(this.state.feed));
        
        let turboClient = turbo({site_id:'5a75fb79e08a280014334740'})
        turboClient.create('feed', this.state.feed)
        .then(data => {
             console.log('FEED CREATED: '+ JSON.stringify(data))
        })
        .catch(err => {
            alert('Error: ' + err.message)
        })
	}

    render() {
        return (
            <div id="sidebar">
                <div className="inner">
                    <section id="search" className="alt">
                        <form method="post" action="#">
                            <input type="text" name="query" id="query" placeholder="Feed Name" /><br/>
                            <input type="text" name="query" id="query" placeholder="Feed URL" /><br/>
                            <button>Add Feed</button>
                        </form>
                    </section>
                    <nav id="menu">
                        <header className="major">
                            <h2>News Feeds</h2>
                        </header>
                        <ul>
                            <li><a href="index.html">Homepage</a></li>
                            <li><a href="generic.html">Generic</a></li>
                            <li><a href="elements.html">Elements</a></li>
                            <li><a href="#">Etiam Dolore</a></li>
                            <li><a href="#">Adipiscing</a></li>
                            <li><a href="#">Maximus Erat</a></li>
                            <li><a href="#">Sapien Mauris</a></li>
                            <li><a href="#">Amet Lacinia</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Sidebar;