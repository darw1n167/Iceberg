import '../InLearning.css'
import {AiOutlinePlayCircle} from 'react-icons/ai'

const InLearning = () => {
    return (
        <>
        <div className="InLearning-div">
            <div className="InLearning-heading">
                <img className='logo-img' src="https://www.linkedin.com/favicon.ico"></img>
                <div className='learning'>LEARNING</div>
            </div>
            <div className="InLearning-skills">Add new skills with these courses</div>
            <div className="InLearning-recommendations">
                <div className='recommendation-list'>
                    <div className='top-list-item'>
                        <div className='list-img'>
                            <button className='play-btn'><AiOutlinePlayCircle size={40}/></button>
                        </div>
                        <div className='list-title'>Penetration Testing: Advanced Web Testing</div>
                    </div>
                    <div className='list-item'>
                        <div className='list-img'>
                            <button className='play-btn'><AiOutlinePlayCircle size={40}/></button>
                        </div>
                        <div className='list-title'>Understanding Your Compensation and...</div>
                    </div>
                    <div className='list-item'>
                        <div className='list-img'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='play-btn'>
                                <path d="M4 14V2l10 6z"></path>
                            </svg>
                        </div>
                        <div className='list-title'>SQL Server Machine Learning Services: Python</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="my-recommendations">See my recommendations</div>
        </>
    )
}

export default InLearning;