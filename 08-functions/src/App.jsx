import React from 'react'

function App() {


function inputChanging(e) {
  if (e.key === "Enter") {
    console.log(e.target.value);
  }
}

  return (
    <div>

      <input type='text' className='input-fild' onKeyDown={(e)=>{
        inputChanging(e)
      }} />

     <div className='box' onMouseMove={(e)=>{console.log(e.pageX)}}  ></div></div>
  )
}

export default App