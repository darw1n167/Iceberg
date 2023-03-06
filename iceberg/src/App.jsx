import "./App.css";
import Skills from "./Skills";
import Education from "./Components/Education";
import ActivityFeed from "./Components/Acitivity";
import About from "./components/About";

function App() {
  return (
    <>
      <ActivityFeed />
      <Education />
      <About />
      <Skills />
    </>
  );
}

export default App;
