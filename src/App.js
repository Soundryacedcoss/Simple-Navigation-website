import './App.css';
import Image from './Image';
import Navbar from './Navbar';
import Home from './Home'
import Contactus from './Contactus';
import {Routes,Route } from 'react-router-dom';
import Link1 from './Link1';
import Link2 from './Link2';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navbar/>}>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Link1' element={<Link1/>}/>
          <Route path='/Link2' element={<Link2/>}/>
          <Route path='/Contactus' element={<Contactus/>}/>
          </Route>
      </Routes>   
      <Image/>
    </div>
  );
}

export default App;
