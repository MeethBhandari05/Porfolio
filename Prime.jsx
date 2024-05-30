import React, { useEffect, useState } from 'react'

const Prime = () => {
    const [number,setnumber] = useState(0);
    const [prime,setprime] = useState("");

    const primeChange = () =>{
        setnumber(number+1);
    }

    useEffect(()=>{
        setprime(isPrime(number));
    },[number])

    function isPrime(number){
        if(number<=1){
            return false;
        }
        else{
            for(let i = 2 ;i<=Math.sqrt(number);i++){
                if(number%i===0){
                    return false;
                }
            }
            return true;
        }
    }
  return (
    <div>
      <p>Count is {number}</p>
      <button onClick={primeChange}>Increment</button>
      <p>{prime ? "is prime" : "is not prime"}</p>
    </div>
  )
}

export default Prime
