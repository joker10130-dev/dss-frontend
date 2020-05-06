import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterSelect from './FilterSelect';
import RestaurantList from './RestaurantList';
import Tutorial from './ui/Tutorial';
import Review from './Review';

const Main = (props) => {
  const [restaurant, setRestaurant] = useState([]);
  const url = 'http://localhost:5000/api/datas/';
  const [searchData, setSearchData] = useState('');
  const [sortData, setSortData] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get(url);
        setRestaurant(res.data);
      } catch (error) {
        console.log(`Error fetch data: ${error}`);
        throw error;
      }
    };
    load();
  }, [url]);
  const handleOnChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSort = (e) => {
    setSortData(e.target.value);
  };

  let filteredType = restaurant.filter((r) => {
    return r.resType.toLowerCase().includes(searchData.toLowerCase());
  });

  const sortedRestaurant = filteredType.sort((a, b) => {
    if (sortData === 'least score') {
      return a.confidence - b.confidence;
    } else if (sortData === 'most score') {
      return b.confidence - a.confidence;
    }
  });
  return (
    <div>
      <section class='white-section' id='features'>
        <div class='container-fluid'>
          <h1>Mango Restaurant Review</h1>
          <FilterSelect handleInput={handleOnChange} handleSort={handleSort} />
          <RestaurantList filteredType={sortedRestaurant} />
          <Review />
        </div>
      </section>
      <Tutorial />
    </div>
  );
};

export default Main;
