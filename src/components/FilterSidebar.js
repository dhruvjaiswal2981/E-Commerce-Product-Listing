import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible ? (
        <aside className="filter-sidebar">
          <div className="filter-header">
            <h2>Filters</h2>
            <button onClick={toggleSidebar} className="toggle-btn">
              Hide Filters
            </button>
          </div>
          <div className="filter-group">
            <label>
              <input type="checkbox" name="customizable" /> Customizable
            </label>
          </div>
          <div className="filter-group">
            <label>
              <select name="filter">
                <option value="all">All</option>
                <option value="ideal-for">Ideal For</option>
                <option value="occasion">Occasion</option>
                <option value="work">Work</option>
                <option value="fabric">Fabric</option>
                <option value="segment">Segment</option>
                <option value="suitable-for">Suitable For</option>
                <option value="raw-materials">Raw Materials</option>
                <option value="pattern">Pattern</option>
              </select>
            </label>
          </div>
        </aside>
      ) : (
        <button onClick={toggleSidebar} className="show-btn">
          Show Filters
        </button>
      )}
    </>
  );
};

export default FilterSidebar;
