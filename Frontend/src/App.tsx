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
          <nav>
            <a href='#' onClick={(e) => { e.preventDefault(); scrollToSection(booksRef); }} style={{ marginRight: '10px' }}>Books</a>
            <a href='#' onClick={(e) => { e.preventDefault(); scrollToSection(felvetelRef); }}>Új tag felvétele</a>
          </nav>
        </header>
      </div>

      <div className='container'>
        <main>
          <div ref={booksRef}>
            <h2>Könyvek</h2>
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
