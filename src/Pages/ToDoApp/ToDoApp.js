import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ToDoApp.css';

const ToDoApp = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();
    const handleAddTaskNavigate = () => {
        navigate('/addtask');
    }
    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to Delete?');
        if (proceed) {
            console.log('Deleting User id', id);
            const url = `http://localhost:5000/task/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = tasks.filter(task => task._id !== id);
                    setTasks(remaining);
                })
        }
    }
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>

            <h2 className='text-center text-2xl'>Total Tasks: {tasks.length}</h2>

            <div className='text-center'>
                <button onClick={handleAddTaskNavigate} class="btn btn-info mt-3">Add Task</button>
            </div>
            <div className="container mx-auto mt-5 task-grid">

                {
                    tasks.map(task =>
                        <div className='border-design p-5' key={task._id}>
                            <h5>Name:{task.name}</h5>
                            <h5>Description:{task.description}</h5>
                            <button onClick={() => handleDelete(task._id)} className='btn btn-warning mt-5'>Delete</button>
                        </div>


                    )
                }



            </div>

        </div>
    );
};

export default ToDoApp;