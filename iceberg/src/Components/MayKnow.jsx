import { API_URL } from '../App'
import { useEffect, useState } from 'react'
import { People } from '../context/context'

import './MayKnow.css'

const MayKnow = () => {

   const [showMore, setShowMore] = useState(false)

   const [ people, setPeople ] = useState([])

   useEffect(() => {
      async function fetchPeople() {
        const response = await fetch(`${API_URL}/connections`);
        const data = await response.json();
        setPeople(data);
      }
      fetchPeople();
    }, []);

   return (
      <People.Provider value={people}>
         <div className='container'>
            <div className='cards'>
            <div><span className='bold'>People you may know</span></div>
               {people.map(person => <MayKnowCard key={person.id} person={person} />).slice(0, showMore ? 10 : 5)}
            </div>
            <div className='show-more' onClick={() => setShowMore(!showMore)}>
                  <div className='show-more-text'>
                     Show {showMore ? 'Less' : 'More'} 
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
      </People.Provider>
   )
}

const MayKnowCard = ({ person }) => {

   return (
      <div className='card'>
         <div><img className='thumbnail' src={person.pic_url} alt="" /></div>
         <div>
            <div><span className='bold'>{person.name}</span></div>
            <div className='truncate'>{person.headline}</div>
         </div>
      </div>
   )
}

export default MayKnow
