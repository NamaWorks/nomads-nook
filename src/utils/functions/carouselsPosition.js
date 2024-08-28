export const moveCarousel = (carousel, duration) => {
  console.log(carousel)

  carousel.style.transition = duration  + "s" +  " linear"
  
  carousel.style.top = `0px`
  carousel.style.top = `-${carousel.scrollHeight/2}px`
  
  setTimeout(() => {
    // console.log("setTimeOut executed")
    backToOrigin(carousel, duration)
  }, duration * 1000 + 5);
}

const backToOrigin = (carousel, duration) => {
  carousel.style.transition = 0  + "s" +  " linear"
  carousel.style.top = `0px`
  // console.log("returned to original position")

  setTimeout(() => {
    moveCarousel(carousel, duration);
  }, 10);
}

export const handleCarouselHover = (carousel)=>{
  console.log("pausado")
  carousel.style.animationPlayState = "paused"
}