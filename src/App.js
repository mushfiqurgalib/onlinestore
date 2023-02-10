
import './App.css';
import Navibar from './components/Navibar';
import {Routes,Route} from "react-router-dom" 
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
import  Forms  from './components/Forms';


function App() {
 
  return (
    <>
    
        <Navibar/>
        <Routes>
          <Route exact path='/' element={<Cards/>}/>
          <Route exact path='/cart/:id' element={<CardsDetails/>}/>
          <Route exact path='/add' element={<Forms/>}/>
        </Routes>
      
      
     
    </>
  );
}

export default App;
