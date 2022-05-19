import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ToDoApp from './Pages/ToDoApp/ToDoApp';
import AddTask from './Pages/AddTask';
import Login from './Pages/Login/Login';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/todoapp" element={<ToDoApp></ToDoApp>}></Route>
        <Route path="/addtask" element={<AddTask></AddTask>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
