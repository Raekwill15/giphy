import './App.css';
import SearchField from './components/SearchField'
import React, { Component } from 'react'
import GifCard from './components/GifCard'


export default class App extends Component {
    render () {
        return (
            <div className="App">
                <SearchField/>
            </div>
        )
    }
}



