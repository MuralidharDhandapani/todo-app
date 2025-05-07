import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabList from './TabList';
import './TodoList.css';

function TodoList({ todos, activeTab, setActiveTab, toggleTodo, deleteTodo }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');

  const filteredTodos = todos
    .filter(todo => todo.type === activeTab)
    .filter(todo => 
      todo.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (todo.dueDate && todo.dueDate.includes(searchQuery))
    )
    .filter(todo => 
      priorityFilter === 'All' ? true : todo.priority === priorityFilter
    );

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          aria-label="Search tasks"
        />
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="priority-filter"
          aria-label="Filter by priority"
        >
          <option value="All">All Priorities</option>
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
      </div>

      <TabList activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="todos-wrapper">
        {filteredTodos.length === 0 ? (
          <p className="empty-message">No {activeTab.toLowerCase()} tasks found</p>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map(todo => (
              <li 
                key={todo.id} 
                className={`todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority?.toLowerCase()}`}
              >
                <div className="todo-content">
                  <span 
                    onClick={() => toggleTodo(todo.id)} 
                    className="todo-text"
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        toggleTodo(todo.id);
                      }
                    }}
                  >
                    {todo.text}
                  </span>
                  <div className="todo-meta">
                    {todo.dueDate && (
                      <span className="due-date">Due: {formatDate(todo.dueDate)}</span>
                    )}
                    <span className={`priority-badge ${todo.priority?.toLowerCase()}`}>
                      {todo.priority}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-button"
                  aria-label={`Delete task: ${todo.text}`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      dueDate: PropTypes.string,
      priority: PropTypes.oneOf(['Low', 'Medium', 'High']).isRequired,
      createdAt: PropTypes.string.isRequired
    })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoList;