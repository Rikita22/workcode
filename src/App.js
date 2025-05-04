
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'; 
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Qualifications from './components/qualifications/Qualifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';


function App() {
  return (
    <>
    <Header/>
    <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        {/* <Projects/> */}
        <Qualifications/>
        <Contact/>
        
    </main>
    <Footer/>
        <ScrollUp/>
    </>
  );
}

export default App;
