import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
const Hero3D = lazy(() => import('./components/Hero3D'));
import { Home, About, Resume, Projects, Contact } from './components/Sections';

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="canvas-skeleton" aria-hidden="true" />}> 
        <Hero3D />
      </Suspense>
      
      {/* We need a wrapper to ensure content scrolls over the fixed canvas */}
      <main id="main-content" style={{ position: 'relative', zIndex: 10 }}>
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
