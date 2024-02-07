// import Practice from './practice'
import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [lenght, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef = useRef()

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-_+=<>?{}[]|/"
    for (let i = 0; i < lenght; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass = pass + str.charAt(char);
    }
    setpassword(pass)
  }, [lenght, numberAllowed, charAllowed, setpassword])

  useEffect(() => {
    passwordGenerator()
  }, [lenght, charAllowed, numberAllowed, passwordGenerator])

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange()
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700 pb-4">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg-overflow-hidden mb-4">
        <input type="text" value={password} className="outline-none w-full py-1 px-3 rounded " placeholder="Password" readOnly ref={passwordRef} />
        <button className="outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-400 text-white py-0.5 px-3 shrink-0 rounded transition-all duration-300 ease-in-out" onClick={copyPasswordToClip} >Copy</button>

      </div>
      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-1 ">
          <input name="length" type="range" min={6} max={50} value={lenght} className="cursor-pointer" onChange={(e) => {
            setLength(e.target.value)
          }} />
          <label htmlFor="length">Lenght: {lenght}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charAllowed">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
