import React from 'react';

const TaskItem = ({ task, onToggleComplete, onRemoveTask }) => (
  <li
    style={{
      textDecoration: task.completed ? 'line-through' : 'none',
    }}
  >
    {task.text}
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggleComplete(task.id)}
    />
    <button onClick={() => onRemoveTask(task.id)}>
      Remove
    </button>
  </li>
);

export default TaskItem;
