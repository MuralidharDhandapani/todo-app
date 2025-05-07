import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoForm.css';

const INITIAL_FORM_STATE = {
  text: '',
  type: 'Personal',
  dueDate: '',
  priority: 'Medium'
};

function TodoForm({ onSubmit }) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text.trim()) {
      onSubmit(formData);
      setFormData(INITIAL_FORM_STATE);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="todo-text">Task Description</label>
          <input
            id="todo-text"
            name="text"
            type="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="What needs to be done?"
            className="todo-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="todo-date">Due Date</label>
          <input
            id="todo-date"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={handleChange}
            className="todo-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="todo-type">Category</label>
          <select
            id="todo-type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="todo-select"
          >
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Shopping">Shopping</option>
            <option value="Health">Health</option>
            <option value="Study">Study</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="todo-priority">Priority</label>
          <select
            id="todo-priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="todo-select"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
        </div>
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>
    </div>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TodoForm;