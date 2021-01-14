import './App.css';
import SearchField from './components/SearchField'
import React, { Component } from 'react'
import GifCard from './components/GifCare'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = { info: [] }
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        const random = 'http://api.giphy.com/v1/gifs/random?api_key=j0qiwJ6UPIMDYIYMKbLE6reZQtdHTDys'
        axios.get(random).then((output) => {
            this.setState({ info: output.info })
        })  
        .catch((err) => {
            console.log(err)
        })  
    }   

    update(infoPlus) {
        this.setState({ info: infoPlus });
    }

    render() {
        return (
            <div>
                <div>
                    <SearchField update={this.update} />
                </div>
                <div>{this.state.info.map((val, index) => (
                //<GifCard key={index} url={val. URLURLURL           
                </div>
            </div>
        )
}
export default App;
