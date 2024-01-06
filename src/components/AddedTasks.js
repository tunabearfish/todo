import React from 'react';
import TaskItem from './TaskItem';

const AddedTasks = ({ tasks, onDelete }) => (
  <div>
    <h2>Added Tasks</h2>
    {tasks.length === 0 ? (
      <p>No tasks added yet.</p>
    ) : (
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} />
        ))}
      </ul>
    )}
  </div>
);

export default AddedTasks;
