'use client'
import { useState } from "react"

export default function MyButton() {
    const[count,setCount] = useState(0)   
    function handler() {
      setCount(count + 1)
    }

    function clean() {
      setCount(count - 1)
    }

    return (
        <div>
          <button  onClick={handler}>Clique Aqui +</button> <br/>
          <button  onClick={clean}>Clique Aqui -</button>
          <h1>Contador:{count}</h1>
        </div>
  )  
}