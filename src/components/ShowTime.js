import React,{ useState} from 'react'

const ShowTime = () => {
    
    return (
        <div>
          <h1>{new Date().toLocaleTimeString()} </h1>
        </div>
    )
}

export default ShowTime;
