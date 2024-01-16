import { useState, useEffect } from "react";

export default function Clock( { city, timeZone }) {
  const [time, setTime] = useState("");
  
useEffect(() => {
  setInterval(() => {
   const t = new Date().toLocaleTimeString("en", { timeZone });
   setTime(t);
  }, 1000);
}, []);




return <div>{`${city} : ${time}`}</div>;
}