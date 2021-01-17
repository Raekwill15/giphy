import React,{Component} from 'react'
import axios from 'axios'
import GifCard from './GifCard'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SearchField extends Component {
    constructor(props) {
        super(props)
        this.state = { userInput: '', gifArr: [] ,randomGif: "",rand : false}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handltInputChange = this.handleInputChange.bind(this)
        this.handleTrending = this.handleTrending.bind(this)
        this.handleRandom = this.handleRandom.bind(this)
        
    }

    handleInputChange = (e) => {
        this.setState({
            userInput: e.target.value
        });
    }

    handleEnter = (e) => {
        if (e.key === "Enter") {
            this.handleSubmit()
        }
    }

    flipRand() {
        this.setState({rand:false})
    }

    async handleTrending () {
        {this.setState({rand:false})}
        const response2 = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=j0qiwJ6UPIMDYIYMKbLE6reZQtdHTDys`)
        this.setState({
            gifArr: response2.data.data
        })
    }

    async handleSubmit () {
        {this.setState({rand:false})}
        var item = this.state.userInput
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${item}&api_key=j0qiwJ6UPIMDYIYMKbLE6reZQtdHTDys`)
        this.setState({
            gifArr: response.data.data
        })

    }
    async handleRandom () {
        const response1 = await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=j0qiwJ6UPIMDYIYMKbLE6reZQtdHTDys`)
        this.setState({
            randomGif: response1.data.data.images.original.url,
            rand: true
        })
    }

    render () {
        return (
        <div>
    <div className="container">
        <div className="field">
            <input type = "text" value = {this.state.userInput} onChange={this.handleInputChange} onKeyDown={this.handleEnter}></input>
        </div>
            <center>
            <button variant="Info" className="btn-info" onClick = {this.handleSubmit} >Search</button>

            <button variant="Danger" className="btn-danger" onClick = {this.handleRandom}>Random</button>

            <button variant="Warning" className="btn-warning" onClick = {this.handleTrending}>Trending</button>

            </center>
    </div>
            <div className = "Allgifs">


                {this.state.rand === false? 
                <div>
                {this.state.gifArr.map((gifInfo,index) => (
                    <GifCard url = {gifInfo.images.original.url} key = {index}/>
                ))}
                </div>
                : 
                this.state.rand === true ?
                <div>
                    <GifCard url = {this.state.randomGif} key = {0}/>
                    
                </div>
                :console.log("")}
            </div>
        </div>
        )
    }
}