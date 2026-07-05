import React from 'react'
import { useState } from 'react'



function App() {
  const [num,setNum] = useState(0);

function increment(){
  setNum(num+1)
}
function decriment(){
  setNum(num-1)
}
function jump5num(){
  setNum(num+5)
}


  return (
    <div>

      <h4>{num}</h4>
      
      <button onClick={increment}>Increment</button>
      <button onClick={decriment}>Decriment</button>
      <button onClick={jump5num}>Jump5num</button>
    </div>
  )
}

export default App