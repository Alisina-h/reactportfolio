import './App.css';

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Projekt from './Components/Projekt/Projekt'
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
      < Navbar />

      <div className='container'>
      < Hero />
      <Skills />
      <Projekt />
      </div>

    </>
  );
}

export default App;
