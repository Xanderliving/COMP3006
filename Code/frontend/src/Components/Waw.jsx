import React from 'react'
import './WAWStyles.css'

import Image from '../Assests/Team.jpg'

function Waw() {
  return (
    <div className='Wawbg'>
      <div className='title'>Who Are We</div>
         <img src={Image} className='WawPhoto' />
         <div className='Wawdesc'>Here at Cocktail Crafters we create Mixologist level cocktails in takeawy cans so premium grade cocktails are in your fingertips whereever you are. We pride ourselves in the quality of our product.</div>
    </div>




  )
}

export default Waw
