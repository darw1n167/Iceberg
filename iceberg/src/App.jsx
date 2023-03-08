import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Skills from './Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import ActivityFeed from './Components/Acitivity';
import About from './Components/About';
import MayKnow from './Components/MayKnow.jsx';
import PeopleViewed from './Components/PeopleAlsoViewed';
import Footer from './Components/footer';

export const ExperienceContext = React.createContext();

export const API_URL = 'http://localhost:8000';

function App() {
	const [experience, setExperience] = useState([]);

	useEffect(() => {
		async function fetchExperience() {
			const response = await fetch(`${API_URL}/profile`);
			const data = await response.json();
			setExperience(data);
			console.log(data);
		}
		fetchExperience();
	}, []);

	return (
		<>
			<ExperienceContext.Provider value={{ experience, setExperience }}>
				<Experience />
				<ActivityFeed />
				<Education />
				<About />
				<Skills />
				<MayKnow />
				<PeopleViewed />
				<Footer />
			</ExperienceContext.Provider>
		</>
	);
}

export default App;
