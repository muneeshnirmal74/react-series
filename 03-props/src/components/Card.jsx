import React from 'react'
import { Bookmark } from 'lucide-react'

function Card(props) {
  return (
    <div className="card">

      <div className='card-top'>
        <div className='logo'><img src={props.logo} alt={props.name} /></div>
        <button className='sav-btn'>Save <Bookmark />  </button>
      </div>
      <div className='card-middle'>
        <h3>{props.name} <span>{props.datepost}</span></h3>
        <h2>{props.post}</h2>
        <h4><span>{props.tag1}</span> <span>{props.tag2}</span></h4>
      </div>
      <div className='card-bottom'>
        <div className='price-location'>
           <h5>{props.pay}</h5>
           <p>{props.location}</p>
        </div>
        <button className='apply-btn'>Apply Now</button>
      </div>
    </div>
  )
}

export default Card