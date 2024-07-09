"use client"
import React, { useState } from 'react';


const Counter = () => {
     const [counter,setCounter] = useState(0)
     return (
          <div>
                <h3 className='mx-14'>counter: {counter}</h3>
               <div className="flex gap-5 text-center mx-14">
               <button className='btn btn-primary ' onClick={()=>setCounter(counter+1)}>ingress</button>
               <button className='btn' onClick={()=>setCounter(counter-1)}>decrees</button>
               </div>
          </div>
     );
};

export default Counter;