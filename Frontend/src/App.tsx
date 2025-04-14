import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import List from './Components/List';
import Newbook from './Components/Newbook';


function App() {
  const booksRef = useRef<HTMLDivElement>(null);
  const felvetelRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
     <div className='container'>
        <header className='py-3'>
          <h1>Petrik könyvklub</h1>
          <header className="custom-navbar">
  <nav className="nav-container">
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(felvetelRef);
      }}
    >
      Új autó felvétele
    </a>
    <span className="nav-separator">  </span>
    <a
      href="https://petrik.hu"
      target="_blank"
      rel="noopener noreferrer"
    >
      Petrik honlap
    </a>
  </nav>
</header>
        </header>
      </div>

      <div className='container'>
        <main>
          <div ref={booksRef}>
          
            <List />
          </div>
          <div ref={felvetelRef} style={{ marginTop: '100px' }}>
            <h2>Új tag felvétele</h2>
            <Newbook onBookAdded={() => { }} />
          </div>
        </main>
      </div>
      <div className='container'>
        <footer style={{textAlign:'center'}}>Dohy Olivér 13.E</footer>
      </div>
    </>
  )
}

export default App
