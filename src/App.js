
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header.js';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header />
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
