
import { useState } from 'react'
import './MayKnow.css'

const MayKnow = () => {

   const [showMore, setShowMore] = useState(false)

   const people = [1, 2, 3, 4, 5, 6]

   return (
      <div className='container'>
         <div className='cards'>
            {people.map(person => <MayKnowCard person={person} />).slice(0, showMore ? 10 : 5)}
         </div>
         <div className='show-more' onClick={() => setShowMore(!showMore)}>
               <div className='show-more-text'>
                  Show More 
               </div>
               <svg xmlns="http://www.w3.org/2000/svg"
                  data-supported-dps="16x16"
                  viewBox='0 0 16 16'
                  fill="currentColor"
                  width="16" height="16" focusable="false">
                     <path d={showMore ? "M15 11L8 6.39 1 11V8.61L8 4l7 4.61z" : "M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"}></path>
               </svg> 
         </div>
      </div>
   )
}

const MayKnowCard = () => {
   return (
      <div className='card'>
         blah
      </div>
   )
}

export default MayKnow
