// import React from 'react';

import Todo from "../ToDo/Todo";

const ToDos = (props) => {
    const {todos} = props;
    // console.log(prpos.todos);
    // const [first, second, third] = todos;
    return (
        <div>
            <h3>Todos</h3>
            {
                todos.map((todo)=>(<Todo todo={todo}></Todo>))
            }
        </div>
    );
};

export default ToDos;