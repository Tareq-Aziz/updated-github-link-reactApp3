import React, { useState,useEffect } from 'react';

const ShowTime = () => {
  const [count, setCount] = useState({ name: ''});
  useEffect(() => {
    setTimeout(() => {
      setCount({name : 'Tareq'});
      console.log('Rendering....')
    }, 3000)
    console.log('Second time...')
  },[])
  return (
    <div>
      <h3>{count.name} </h3>
      {/* <button onClick={() => setCount(count + 1)}>Count Plus</button> */}
    </div>
  )
}

export default ShowTime
