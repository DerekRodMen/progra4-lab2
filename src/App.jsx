import { useState } from 'react' 
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'
 import { Counter } from './components/Counter'
 
 function App() {
   const [count, setCount] = useState(0) 
 
  
   function numeroFavorito() {
     if (count === 11) {
       return <p>El 11 es el numero favorito de Derek</p>
     }
     return null
   }
 
   return (
     <>
       <div>
         <a href="https://vite.dev" target="_blank">
           <img src={viteLogo} className="logo" alt="Vite logo" />
         </a>
         <a href="https://react.dev" target="_blank">
           <img src={reactLogo} className="logo react" alt="React logo" />
         </a>
       </div>
       <h1>Vite + React</h1>
 
       
       <Counter count={count} setCount={setCount} />
 
       
       {numeroFavorito()}
 
       <p className="read-the-docs">
         Derek Jesus Rodriguez Mendoza.
       </p>
     </>
   )
 }
 
 export default App