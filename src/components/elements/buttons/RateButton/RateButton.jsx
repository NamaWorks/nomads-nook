import './RateButton.css'
import React, { useState } from 'react'

const RateButton = () => {

  const [clicked, setClicked] = useState(false)
  const [rate, setRate] = useState("none")

  return (
    <>
      <button
        className="rate-btn"
        onClick={() => {
          clicked ? setClicked(false) : setClicked(true);
        }}
      >
        <p>rate picture</p>
      </button>

      {/* <ul className='ul-ratings'>
          <li>
            <button>sucks</button>
          </li>
          <li>
            <button>bad</button>
          </li>
          <li>
            <button>regular</button>
          </li>
          <li>
            <button>that's okay</button>
          </li>
          <li>
            <button>seems nice</button>
          </li>
          <li>
            <button>love it!</button>
          </li>
        </ul> */}

      {!clicked && (
        <ul className="ul-ratings hidden">
          <li>
            <button
            onClick={()=>(setRate("sucks"))}
            >sucks</button>
          </li>
          <li>
            <button
            onClick={()=>(setRate("bad"))}
            >bad</button>
          </li>
          <li>
            <button
            onClick={()=>(setRate("regular"))}
            >regular</button>
          </li>
          <li>
            <button
            onClick={()=>(setRate("that's okay"))}
            >that's okay</button>
          </li>
          <li>
            <button
            onClick={()=>(setRate("seems nice"))}
            >seems nice</button>
          </li>
          <li>
            <button
            onClick={()=>(setRate("love it"))}
            >love it!</button>
          </li>
        </ul>
      )}

      {clicked && (
          <ul className="ul-ratings">
            <li>
              <button>sucks</button>
            </li>
            <li>
              <button>bad</button>
            </li>
            <li>
              <button>regular</button>
            </li>
            <li>
              <button>that's okay</button>
            </li>
            <li>
              <button>seems nice</button>
            </li>
            <li>
              <button>love it!</button>
            </li>
          </ul>
      )}
    </>
  );
};

export default RateButton