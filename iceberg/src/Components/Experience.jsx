import React, { useContext } from 'react';
import { useState } from 'react';
import { ExperienceContext } from '../App.jsx';
import './Experience.css';
import armyImage from '../assets/linkedinarmy.jpeg';

function Experience() {
  const { experience } = useContext(ExperienceContext);
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className='component ExpAll'>
      <div className='title'><h2 className='h2-title'>Experience</h2></div>
      <div className='experience-content'>
        <div className='experience-company-img'>
        <img width='48' height='48' src={armyImage} alt="army"></img>
        </div>
        <div>
        {experience.map((exp) => (
          <div key={exp.id}>
            <p className='job'>{exp.title}</p>
            <p>United States Department of Defense · Full-time</p>
            <p className='dates'>
              {exp.date_started} - {exp.date_ended} · 4 yrs 7 mos
            </p>
            <p className='location'> Fort Hood, Texas, United States · On-site </p>
            <div>
              {exp.description.length > 100 && !showFullText ? (
                <div>
                  {exp.description.slice(0, 98)}...
                  <a className='seeMore' href='#' onClick={toggleFullText}>
                    See more
                  </a>
                </div>
              ) : (
                <div>{exp.description}</div>
              )}
            </div>
            <p>Skills: {exp.skills}</p>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
