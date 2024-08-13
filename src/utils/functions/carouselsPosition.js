export const moveCarousel = (carousel, duration) => {

  carousel.style.transition = duration  + "s" +  " linear"
  
  carousel.style.left = `0px`
  carousel.style.left = `-${carousel.scrollWidth/2 +8}px`
  
  setTimeout(() => {
    // console.log("setTimeOut executed")
    backToOrigin(carousel, duration)
  }, duration * 1000 + 5);
}

const backToOrigin = (carousel, duration) => {
  carousel.style.transition = 0  + "s" +  " linear"
  carousel.style.left = `0px`
  // console.log("returned to original position")

  setTimeout(() => {
    moveCarousel(carousel, duration);
  }, 10);
}

export const handleCarouselHover = (carousel)=>{
  console.log("pausado")
  carousel.style.animationPlayState = "paused"
}