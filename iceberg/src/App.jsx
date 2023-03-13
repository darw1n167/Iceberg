import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Profile from './Components/Profile';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import ActivityFeed from './Components/Acitivity';
import About from './Components/About';
import MayKnow from './Components/MayKnow.jsx';
import Footer from './Components/footer';
import TopAd from './Components/TopAd';
import BottomAd from './Components/BottomAd';
import PeopleAlsoViewed from './Components/PeopleAlsoViewed';
import Interests from './Components/Interests';
import InLearning from './Components/InLearning';
import NavBar from './Components/NavBar';
import Highlights from './Components/Highlights';

import { ProfileProvider } from './context/ProfileContext';

export const ExperienceContext = React.createContext();

export const API_URL = 'http://localhost:8000';

function App() {

	const [experience, setExperience] = useState([]);

	useEffect(() => {
		async function fetchExperience() {
			const response = await fetch(`${API_URL}/profile`);
			const data = await response.json();
			setExperience(data);
		}
		fetchExperience();
	}, []);
	return (
		<>
			<ProfileProvider>
				<ExperienceContext.Provider value={{ experience, setExperience }}>
					<div className='full-page'>
						<NavBar />
						<div className='outer-main'>
							<div className='main-content'>
								<div className='main-body'>
									<Profile />
									<Highlights />
									<About />
									<ActivityFeed />
									<Experience />
									<Education />
									<Skills />
									<Interests />
								</div>
								<div className='side-bar'>
									<TopAd />
									<PeopleAlsoViewed />
									<MayKnow />
									<InLearning />
									<BottomAd />
								</div>
							</div>
						</div>
						<Footer />
					</div>
				</ExperienceContext.Provider>
			</ProfileProvider>
		</>
	);
}

export default App
