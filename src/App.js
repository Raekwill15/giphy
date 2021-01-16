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


/*
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=iCou32qYmtidVoNOAQl5QJtlpLVRNfzk`)
            .then((output) => output.json())
            .then((output) => { this.setState({ data: output.data }) })

        .catch((err) => console.error(err))
    }

    update(dataPlus) {
        this.setState({ data: dataPlus });
    }

    render() {
        return (
            <div>
                <div>
                    <SearchField update={this.update} />
                </div> 
                <div>{this.state.data.map((val, index) => (
                    <GifCard key={index} url={val.images.original.url}/>))}         
                </div>
            </div>
        )
    }
}
*/
