import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
let [counter, setCounter] = useState(5)//[variable_hai, (ek reference holder hai) yeah_function_hai_iss_variable_ko_update_karne_ke_liye]

const addValue = () =>{
  
  if (counter == 20){
    return(counter)
  }
  else
  setCounter(counter + 1)
}
const removeValue = () =>{
  if(counter==0){
    return(counter)
  }
  else
  setCounter(counter - 1)
}


  return (
    <>
       <h1>chai aur react</h1>
       <h3>Counter value: {counter}</h3>
       <button 
       onClick={addValue}
       > Add Value{counter}</button>
       <br />
       <button 
       onClick={removeValue}
       >Decrease Value{counter}</button>
       <p>footer: {counter}</p>
    </>
  )
}

export default App
