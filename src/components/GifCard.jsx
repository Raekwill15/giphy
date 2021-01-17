import React from 'react'


const GifCard = (props) => (
    <div className = "gif">
        <img src={props.url} />
    </div>
)

export default GifCard