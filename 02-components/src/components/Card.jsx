import React from 'react'

function Card() {

    const name = "Muneesh"
    const age = 22
    const img = "https://img.magnific.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg"

  return (
    <div className='card'>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: Developer</p>
    </div>
  )
}

export default Card