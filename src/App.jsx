import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import { Home, About, Resume, Projects, Contact } from './components/Sections';

function App() {
  return (
    <>
      <Hero3D />
      <Navbar />
      
      {/* We need a wrapper to ensure content scrolls over the fixed canvas */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
