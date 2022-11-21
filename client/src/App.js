import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './components/map';
import Main from './components/Main';
import Error from './components/error';
import Login from './components/login';
import Signup from './components/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbar';


{/* page structure, main function*/}
function App(){
  return ( 
      <div className="App">
       <Router>  
        <Header />
        {/*links to all components (pages)*/}
          <Routes>
            <Route path='/map' element={<Map />} /> 
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Main />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </Router>
    </div>
    
   
  )
}




export default App;
