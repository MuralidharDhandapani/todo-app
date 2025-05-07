import React from 'react';
import PropTypes from 'prop-types';

const TABS = [
  { id: 'Personal', label: 'Personal Tasks' },
  { id: 'Work', label: 'Work Tasks' },
  { id: 'Shopping', label: 'Shopping' },
  { id: 'Health', label: 'Health' },
  { id: 'Study', label: 'Study' }
];

function TabList({ activeTab, onTabChange }) {
  return (
    <div className="tab-container">
      {TABS.map(tab => (
        <button 
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

TabList.propTypes = {
  activeTab: PropTypes.oneOf(TABS.map(tab => tab.id)).isRequired,
  onTabChange: PropTypes.func.isRequired
};

export default TabList;