import { useCallback, useEffect, useRef, useState  } from 'react'
import './App.css'

function App() {
 
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str+= "0123456789"
    if (charAllowed) str+= "!@#$%^&*"

    for (let i = 1; i <= length; i++) {
       let char = Math.floor(Math.random() * str.length + 1)
      pass  += str.charAt(char)

    }
    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])
  
const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 3)
  window.navigator.clipboard.writeText(password)
}, [password])

useEffect(()=>{
  passwordGenerator()
},


 [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <>
       <div className='w-full max-w-md mx-auto rounded p-4 my-8  text-orange-500 shadow-md text-xl bg-gray-700 '>
        <h1>Password generator</h1>
        <div className='flex shadow rounded overflow-hidden mb-4'>
          <input
           type="text"
           value={password}
           className='w-full py-1 px-3'
           placeholder='password'
           readOnly
           ref={passwordRef}
           />
           <button 
           onClick={copyPasswordToClipboard}
           className='bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'> 
            <input
             type="range" 
             min={6}
             max={20}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox" 
              defaultChecked={numberAllowed}
              id='numberInput'
             className='cursor-pointer'
             onChange={()=>{setNumberAllowed((prev)=> !prev)}}
            />
            <label htmlFor="numberInput">Number</label>
            <input
             type="checkbox" 
              defaultChecked={charAllowed}
              id='charInput'
             className='cursor-pointer'
             onChange={()=>{setCharAllowed((prev)=> !prev)}}
            />
            <label htmlFor="charInput">Cahracter</label>
            
          </div>
        </div>
        </div>  
    </>
  )
}

export default App
