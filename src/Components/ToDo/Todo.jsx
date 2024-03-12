// import React from 'react';

const Todo = (props) => {
    const {todo} = props;
    return (
        <div>
            <h3>todo: {todo}</h3>
        </div>
    );
};

export default Todo;