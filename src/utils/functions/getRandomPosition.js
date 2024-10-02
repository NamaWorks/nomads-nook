import { getRandomInt } from "./getRandomInt"

export const getRandomPosition = () => {

  const randomLeft = getRandomInt(0, window.innerWidth-600)
  const randomTop = getRandomInt(0, window.innerHeight-200)

  const randomPos = {top:randomTop, left:randomLeft}

  if(randomLeft > window.innerWidth/2){
    randomPos.left = `-${randomLeft}`
  }
  if(randomTop > window.innerHeight/2){
    randomPos.top = `-${randomTop}`
  }

  return randomPos
}