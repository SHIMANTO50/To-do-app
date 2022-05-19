import React from 'react';
import './AddTask.css'

const AddTask = () => {
    const handleAddTask = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;

        const task = { name, description };

        //send data to server
        fetch('https://safe-depths-86276.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset();
            })

    }
    return (
        <div>
            <h2 className='text-center text-2xl mb-5'>Add Task</h2>
            <form onSubmit={handleAddTask} className='task-form'>
                <input type="text" name="name" placeholder="Task Name" class="input input-bordered w-full max-w-xs" />
                <input type="text" name="description" placeholder="Task Description" class="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Add Task" className="input input-bordered w-full max-w-xs" />

            </form>
        </div>
    );
};

export default AddTask;