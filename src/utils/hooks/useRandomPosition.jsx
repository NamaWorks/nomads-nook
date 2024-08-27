import { useState } from "react"
import { getRandomInt } from "../functions/getRandomInt"


const useRandomPosition = () => {
  const [randomPosition, setRandomPosition] = useState({top:0, left:0})

  const randomLeft = getRandomInt(0, window.innerWidth)
  const randomTop = getRandomInt(0, window.innerHeight)

  setRandomPosition({top:randomTop, left:randomLeft})

  return randomPosition
}

export {useRandomPosition}