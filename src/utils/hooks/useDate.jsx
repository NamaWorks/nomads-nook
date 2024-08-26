import { useEffect, useState } from 'react'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const addZero = (i)=>{
  if(i<10){
    i= "0" + i
  }
  return i
}

export const useDate = () => {

  const currentDate = new Date().toLocaleDateString()
  const newDate = new Date()
  const currentTime = `${newDate.getHours()}:${newDate.getMinutes()}`

  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(currentTime)
  
  useEffect(() => {
    const intervalTime = setInterval(() => {
      const newDate = new Date()
      setDate(newDate.toLocaleDateString());
      setTime(`${addZero(newDate.getHours())}:${addZero(newDate.getMinutes())}`)
    }, 1000);

    return () => {
      clearInterval(intervalTime);
    };
  }, []);
  

  return {
    date,
    time,
    month: months[newDate.getMonth()],
    day: newDate.getDate(),
    year: newDate.getFullYear(),
  };

}