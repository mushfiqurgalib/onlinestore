
import './App.css';
import Navibar from './components/Navibar';
import {Routes,Route} from "react-router-dom" 
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
import { useState } from 'react';

function App() {
  const[id,setId]=useState(1)
  return (
    <>
    
        <Navibar/>
        <Routes>
          <Route exact path='/' element={<Cards/>}/>
          <Route exact path='/cart/:id' element={<CardsDetails/>}/>
        </Routes>
      
      
     
    </>
  );
}

export default App;
