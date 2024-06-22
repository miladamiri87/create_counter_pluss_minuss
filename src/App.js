import Child from "./components/Child"

import {useState} from "react"

const App = () =>{
  let [number, setCounter] = useState(0)

    let plus=()=>{
      setCounter(number+1)
    }
    let minus= ()=>{
        {number > 0 ? setCounter(number-1) : setCounter(0)}
    }
    let reset= ()=>{
      setCounter(0)
    }
  return(
    <>
      <Child increase={plus} decrease={minus} reset={reset} num={number} />
    </>
  )
}
export default App