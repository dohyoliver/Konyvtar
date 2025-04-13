import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import List from './Components/List';
import Newbook from './Components/Newbook';


function App() {
  const [active, setActive] = useState('books')

  return (
    <>
     <div className='container'>
     <header className='py-3'>
      <h1>Petrik könyvklub</h1>
      <nav>
        <a href='#' onClick={(e) =>{e.preventDefault(); setActive('books')}} style={{marginRight:'10px'}}>Books</a>
        <a href='#' onClick={(e) =>{e.preventDefault(); setActive('felvetel');}}>Új tag felvétele</a>
      </nav>
     </header>
     </div>
      <div className='conteiner'>
     <main>
 
      {active === 'books' && <List/>}
      {active === 'felvetel' && <Newbook onBookAdded={() => {}}/>}
 
     </main>
     </div>
    </>
  )
}

export default App
