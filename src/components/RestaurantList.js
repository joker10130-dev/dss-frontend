import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = (props) => {
  let data1 = props.filteredType;
  return (
    <table className='table statistic'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Type</th>
          <th scope='col'>Price</th>
          <th scope='col'>Score</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        {data1.map((r, i) => (
          <tr key={i}>
            <th>{r.name}</th>
            <td>{r.resType}</td>
            <td>{r.price}</td>
            <td>{r.confidence}</td>
            <td>
              <Link to={`/${r.name}`} className='btn btn-primary btn-small'>
                Detail
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RestaurantList;
