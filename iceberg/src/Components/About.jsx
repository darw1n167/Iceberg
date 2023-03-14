import { useState } from 'react'
import './About.css'

const About = () => {

    const [showMore, setShowMore] = useState(false);
    const text = "Personnel management leader with 7 years of experience in managerial positions that have proven my capabilities to lead a strong team. Quickly to adapt to a changing work environment while continuing my software engineering skills in JavaScript (Common JS and ES6), HTML5, CSS3, NodeJS, RESTful APIs with CRUD functionality, relational databases using PostgreSQL, and many other technologies. Looking to pursue a career in software engineering to continue to expand my education and knowledge."
    const contact = "Please feel free to contact me at jlinson16@gmail.com"

    const handleClick = () => {
        setShowMore(!showMore)
        const btn = document.querySelector('.see-more-btn')
        btn.className = 'about-click-state'
    }

    if (!showMore) {
        return (
        <div className='component about-div'>
            <div className='about-heading-div'>
                <div className="about-heading">About</div>
            </div>
            <div className="about-content">
                {`${text.substring(0, 424)}`}
                <button className='see-more-btn' onClick={handleClick}>
                    ...see more
                </button>
            </div>
            
        </div>
        )
    } else {
        return (
            <div className='component see-more-div'>
                <div className='about-heading-div'>
                    <div className='about-heading'>About</div>
                </div>
                <div className='about-content'>
                    {text}
                    <div className='about-contact'>
                        {contact}
                    </div>
                </div>
            </div>
        )
    }
}

export default About;