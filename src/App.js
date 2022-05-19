import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ToDoApp from './Pages/ToDoApp/ToDoApp';
import AddTask from './Pages/AddTask';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/todoapp" element={<ToDoApp></ToDoApp>}></Route>
        <Route path="/addtask" element={<AddTask></AddTask>}></Route>
      </Routes>

    </div>
  );
}

export default App;
