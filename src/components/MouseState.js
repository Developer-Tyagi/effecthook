import React, {useState , useEffect } from 'react'

function MouseState() {
    const [x , setX] = useState(null)
    const [y , setY] = useState(null)
    
    const logMousePosition = e => {
        console.log({
          x: e.clientX,
          y: e.clientY,
        });
      };
    
    useEffect( () => {
        console.log('useEffect called ')
        window.addEventListener('mousemove', logMousePosition)
    })
    
  return () => {
    console.log("Cleaned up");
    window.removeEventListener("mousemove", logMousePosition);
  };
     
};
    


export default MouseState