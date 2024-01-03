import './App.css';

//ROUTING
import {  Routes, Route } from "react-router-dom";

//IMPORT COMPONENTS
import Home from './Components/Pages/Home';
import Register from './Components/Pages/Register';
import LogIn from './Components/Pages/LogIn';
import AddTask from './Components/Pages/AddTask';
import Task from './Components/Pages/Task';

function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/task' element={<Task/>}/>
        <Route path='/addtask' element={<AddTask/>}/>
      </Routes>
    
    
    
    
    
    
    
    
    </>
  );
}

export default App;
