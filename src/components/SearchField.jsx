import React,{Component} from 'react'
import axios from 'axios'
import GifCard from './GifCard'

export default class SearchField extends Component {
    constructor(props) {
        super(props)
        this.state = { userInput : '', gifArr: [] }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handltInputChange = this.handleInputChange.bind(this)
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

    async handleSubmit () {
        var item = this.state.userInput
        console.log("this is the item: " + item)
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${item}&api_key=j0qiwJ6UPIMDYIYMKbLE6reZQtdHTDys`)
        this.setState({
            gifArr: response.data.data
        })
        console.log(this.state.gifArr)
    }

    update(dataPlus) {
        this.setState({ data: dataPlus });
    }

    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=iCou32qYmtidVoNOAQl5QJtlpLVRNfzk`)
            .then((output) => output.json())
            .then((output) => { this.setState({ gifArr: output.gifArr }) })

        .catch((err) => console.error(err))
    }

    update(dataPlus) {
        this.setState({ gifArr: dataPlus });
    }

    render () {
        return (
        <div>
            <input type = "text" value = {this.state.userInput} onChange={this.handleInputChange} onKeyDown={this.handleEnter}></input>
            <button onClick = {this.handleSubmit}>Submit</button>
            {console.log(this.state.userInput)}
            <div className = "gif">
                {this.state.gifArr.map((gifInfo,index) => (
                    <GifCard url = {gifInfo.images.original.url}/>
                ))}
            </div>
        </div>
        )
    }
}

/*
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
*/
