import React from "react";

const TaskItem = ({task, onDelete}) =>(
    <li>
        <span style ={{color:getCategoryColor(task.category)}}>
            {task.text}
        </span>
        {task.dueDate && <span> - Due on: {task.dueDate}</span>}
        <button onClick={()=>onDelete(task.id)}>Delete</button>
    </li>
    
);

const getCategoryColor = (category) =>{
    switch(category){
        case 'personal':
            return 'blue';
        case 'work':
            return 'green';
        default:
            return 'black';
    }
};

export default TaskItem;