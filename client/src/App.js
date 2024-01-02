import './App.css';

//ROUTING
import {  Routes, Route } from "react-router-dom";

//IMPORT COMPONENTS
import Home from './Components/Pages/Home';
import Register from './Components/Pages/Register';
import LogIn from './Components/Pages/LogIn';
import AddTask from './Components/Pages/AddTask';

function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/addtask' element={<AddTask/>}/>
      </Routes>
    
    
    
    
    
    
    
    
    </>
  );
}

export default App;
