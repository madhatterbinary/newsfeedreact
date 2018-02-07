import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home } from './pages'
import { Provider } from 'react-redux'
import store from './store'

const app = (
    <Provider store={store.configure(null)}>
        <Home />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))