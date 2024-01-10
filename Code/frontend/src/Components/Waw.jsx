import React from 'react'
import './WAWStyles.css'

import Image from '../Assests/Team.jpg'

function Waw() {
  return (
    <div className='Wawbg'>
      <br></br>
      <div className='title'>Who Are We?</div>
      {/*Description of company*/}
         <img src={Image} alt='Hi' className='WawPhoto' />
         <div className='Wawdesc'><div className='Name'> Working with a team of our best Mixologist here at 'Cocktail Crafters' we have put together some of our favourite on the go premium cocktail</div>
         <br></br>Great Quality and Great Tasting Cocktails at your Fingertips!'
    </div>
    </div>




  )
}

export default Waw
