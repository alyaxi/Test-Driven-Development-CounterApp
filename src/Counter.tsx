import React from 'react'

export default function Counter() {
    const [increament, setIncreament] = React.useState(0)
    return (
        <div className = "main-div">
      <h2 className="counter-heading">Counter App</h2>
      <h1 id="counter-text">{increament}</h1>
      <button id="btn-increament" onClick={() => {setIncreament(increament + 1)}}>Increament</button>
      <button id="btn-decreament" onClick={() => {
          if(increament > 0){
          setIncreament(increament - 1)
        }else {
            setIncreament(0)
        }
          
          }}> Decreament </button>
        </div>
    )
}
