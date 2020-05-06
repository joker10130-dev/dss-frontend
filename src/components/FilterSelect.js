import React from 'react';

const FilterSelect = (props) => {
  return (
    <div className='row'>
      <div className='col-sm-6'>
        <h6>Filter by Type: </h6>
        <select defaultValue='' onChange={props.handleInput}>
          <option value=''>All</option>
          <option value='Rice mixed curry'>Rice and Mixed Curry</option>
          <option value='Cooked to order dish'>Cooked to order dish</option>
          <option value='Food and Drink'>Food and Drink</option>
          <option value='Noodle'>Noodle</option>
        </select>
      </div>
      <div className='col-sm-6'>
        <h6>Sort by Score: </h6>
        <select defaultValue='sort' onChange={props.handleSort}>
          <option disabled value='sort'>
            Sort
          </option>
          <option value='least score'>Least Score</option>
          <option value='most score'>Most Score</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSelect;
