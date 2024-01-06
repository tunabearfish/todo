// handle adding new task

import React, {useState} from "react";

const TaskForm = ({onAddTask}) =>{
    const [newTask, setNewTask] = useState('');

    const addTask = () =>{
        if(newTask.trim() === '')return;
        onAddTask(newTask);
        setNewTask('');
    };

    return(
        <div>
            <label>New Task:</label>
            <input 
                type="text"
                value={newTask}
                onChange = {(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
};

export default TaskForm;