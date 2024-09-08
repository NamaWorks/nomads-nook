import React, { useEffect, useState } from 'react'

const useNavScroll = (startFromBig=false,) => {

  const [titleSize, setTitleSize] = useState(24)
  const [titleBottom, setTitleBottom] = useState(0)
  const [navPos, setNavPos] = useState("fixed")
  // const [navGap, setNavGap] = useState(23)
  const [navGap, setNavGap] = useState(window.innerWidth<=800 ? 3 : 23)
  const [navHeight, setNavHeight] = useState(65)
  const [navTop, setNavTop] = useState(0)
  
  
  if(startFromBig){
      useEffect(()=> {
        if(window.innerWidth <=800){
          setNavPos("relative")
          setNavTop(0)
          setTitleSize(100)
          setNavGap(2)
          setNavHeight(100)
          setTitleBottom(-30)
        } else {
          setNavPos("relative")
          setNavTop(0)
          setTitleSize(300)
          setNavGap(2)
          setNavHeight(300)
          setTitleBottom(-105)
        }
      },[])
      
  window.onscroll=()=>{
  const navBar = document.querySelector("nav")
  const navbarPosY = navBar.getBoundingClientRect().y
  // console.log("navbar scroll y: " + navbarPosY)
  // setTitleSize(Math.min(Math.max(titleSize + navbarPosY, 24), 220))
  // setNavGap(Math.min(Math.max(navGap - navbarPosY/12, 2), 23))
  // setTitleBottom(Math.min(Math.max(titleBottom - navbarPosY*2, -40), 0))
  // setNavHeight(Math.min(Math.max(navHeight + navbarPosY, 65), 220))
  if(navbarPosY<=0 && window.innerWidth>800){
    setNavPos("fixed")
    setNavTop(0)
    setTitleSize(24)
    setNavGap(23)
    setNavHeight(65)
    setTitleBottom(0)
  } else if(navbarPosY<=0 && window.innerWidth<=800){
    setNavPos("fixed")
    setNavTop(0)
    setTitleSize(24)
    setNavGap(2)
    setNavHeight(65)
    setTitleBottom(-2)
  }
}}

  return {
    titleSize,
    navPos,
    navGap,
    navHeight,
    navTop,
    titleBottom,
  }
}

export {useNavScroll}