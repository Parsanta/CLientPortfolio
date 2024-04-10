import './App.css';
import './index.css'
import SideBar from './components/Sidebar/SideBar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <>
    <SideBar />
    <main className='main'>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Resume/>
    <Certifications/>
    <Contact/>
    </main>
    </>
  );
}

export default App;
