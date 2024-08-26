import './RateButton.css'
import React, { useState } from 'react'

const RateButton = ({shown}) => {

  const [clicked, setClicked] = useState(false)
  const [imageRate, setImageRate] = useState()

  return (
    <>
      {shown && (
              <button
              className="rate-btn"
              onClick={() => {
                clicked ? setClicked(false) : setClicked(true);
              }}
            >
              <p>{imageRate || "rate image"}</p>
            </button>
      )}

      {!clicked && !shown && (
        <ul className="ul-ratings hidden">
        </ul>
      )}

      {clicked && shown && (
          <ul className="ul-ratings">
          <li>
            <button
            onClick={()=>(setImageRate("sucks"))}
            >sucks</button>
          </li>
          <li>
            <button
            onClick={()=>(setImageRate("bad"))}
            >bad</button>
          </li>
          <li>
            <button
            onClick={()=>(setImageRate("regular"))}
            >regular</button>
          </li>
          <li>
            <button
            onClick={()=>(setImageRate("that's okay"))}
            >that's okay</button>
          </li>
          <li>
            <button
            onClick={()=>(setImageRate("seems nice"))}
            >seems nice</button>
          </li>
          <li>
            <button
            onClick={()=>(setImageRate("love it!"))}
            >love it!</button>
          </li>
          </ul>
      )}
    </>
  );
};

export default RateButton