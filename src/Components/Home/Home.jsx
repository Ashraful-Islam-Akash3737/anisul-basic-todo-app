// import React from 'react';

import ToDos from "../ToDos/ToDos";



const Home = () => {

    const todos = ['todo1', 'todo2', 'todo3'];
    return (
        <div>
            <h3>Home</h3>
            <ToDos todos={todos}></ToDos>
        </div>
    );
};

export default Home;