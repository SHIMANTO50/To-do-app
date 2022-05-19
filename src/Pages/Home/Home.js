import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2 className='text-2xl text-center mt-5'>Welcome to To-Do App</h2>
            <div className='text-center'>
                <Link className='text-center text-orange-400 text-2xl mt-5' to="/todoapp">Go to To-Do-App</Link>
            </div>
        </div>
    );
};

export default Home;