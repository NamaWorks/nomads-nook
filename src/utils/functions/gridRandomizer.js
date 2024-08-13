import { getRandomInt } from "./getRandomInt"

export const fullWidth = () => {
  const imgContainers = document.querySelectorAll(".feed-image-container")
  for (let i = 0; i < (imgContainers.length*0.05); i++) {
    let randomIndex = getRandomInt(0, imgContainers.length-1)
    const randomImg = imgContainers[randomIndex]
      if(!(randomImg.classList.contains("modded"))) {
          randomImg.classList.add("modded")
          randomImg.classList.add("full-width")
          randomImg.style.gridColumn = "1/5"
        }
      }
    imgContainers[imgContainers.length-1].style.gridCOlumn = "1/5"
    }

export const lineOfFour = () => {
  const imgContainers = document.querySelectorAll(".feed-image-container")
  let randomIndex = getRandomInt(0, imgContainers.length-1)
  const randomImg = imgContainers[randomIndex]

  for (let i = 0; i < (imgContainers.length*0.6); i++) {
    if(!(randomImg.classList.contains("modded"))){
      let sumRest = 0
      randomIndex >= 4 ? sumRest = true : sumRest= false

      let imgGroup =[]

      for (let i = 0; i < 4 ; i++) {
        sumRest ? imgGroup.push(imgContainers[randomIndex-i]) : imgGroup.push(imgContainers[randomIndex+i])
      }
      imgGroup.forEach((img)=>{
        img.classList.add("modded")
        img.style.gridArea = "span 1 / span 1"
      })
    } else {

      randomIndex+4
      if(!(randomImg.classList.contains("modded"))){
        let sumRest = 0
        randomIndex >= 4 ? sumRest = true : sumRest= false
  
        let imgGroup =[]
  
        for (let i = 0; i < 4 ; i++) {
          sumRest ? imgGroup.push(imgContainers[randomIndex-i]) : imgGroup.push(imgContainers[randomIndex+i])
        }
        imgGroup.forEach((img)=>{
          img.classList.add("modded")
          img.style.gridArea = "span 1 / span 1"
          
        })
    }

      }


}
}

export const groupOfThree = () => {
  const imgContainers = document.querySelectorAll(".feed-image-container")
  let randomIndex = getRandomInt(0, imgContainers.length-1)
  const randomImg = imgContainers[randomIndex]

  for (let i = 0; i < (imgContainers.length*0.6); i++) {
    if(!(randomImg.classList.contains("modded"))){
      let sumRest = 0
      randomIndex >= 3 ? sumRest = true : sumRest= false

      let imgGroup =[]

      for (let i = 0; i < 3 ; i++) {
        sumRest ? imgGroup.push(imgContainers[randomIndex-i]) : imgGroup.push(imgContainers[randomIndex+i])
      }
      imgGroup.forEach((img)=>{
        img.classList.add("modded")
        img.style.gridRow = "span 1"
        img.style.gridColumn = "span 1"
      })

      imgGroup[0].style.gridColumn="span 2"
    }
  }
};