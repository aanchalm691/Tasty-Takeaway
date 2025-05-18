<<<<<<< HEAD
import { useState } from 'react';
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';
import resList from "../utils/mockData";

const Body = ()=>{
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State variable - Super Powerful variable

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState('');
 
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (

      <div className="container">
        {/* <SearchBar/> */}
        <div className="filter filter-bar">
          <div className='search search-box'>
            <input type='text' placeholder="Search a restaurant you want..."
            className="searchBox input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
            <button className='btn search-btn'
             onClick={() => {
              // * Filter the restaurant cards and update the UI
              // * searchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
              >Search</button>
          </div>
          <div className="button-group">
        <button
          className="btn filter-btn"
          onClick={() => {
            // * Filter logic
            // const filteredList = listOfRestaurants.filter(
            //   (res) => res.info.rating.aggregate_rating > 4
            // );

            // setListOfRestaurants(filteredList);
            // console.log(filteredList);

            const filteredList = resList.filter(
              (res) => parseFloat(res.info.rating.aggregate_rating) > 4
            );
            setFilteredRestaurant(filteredList);
          }}
         
        >
          Top Rated Restaurants
        </button>
        <button className="btn reset" onClick={() => setFilteredRestaurant(resList)}>Reset</button>
        </div>
        </div>
        <div className="restaurant-container">
           {/* <RestaurantCard resData ={resList[12]} />             */}
            {(filteredRestaurant.length ? filteredRestaurant : listOfRestaurants).map(
              (restaurant) => (
                <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
              )
            )}

        </div>
      </div>
    );
  };


=======
import { useState } from 'react';
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';
import resList from "../utils/mockData";

const Body = ()=>{
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State variable - Super Powerful variable

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState('');
 
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (

      <div className="container">
        {/* <SearchBar/> */}
        <div className="filter filter-bar">
          <div className='search search-box'>
            <input type='text' placeholder="Search a restaurant you want..."
            className="searchBox input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
            <button className='btn search-btn'
             onClick={() => {
              // * Filter the restaurant cards and update the UI
              // * searchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
              >Search</button>
          </div>
          <div className="button-group">
        <button
          className="btn filter-btn"
          onClick={() => {
            // * Filter logic
            // const filteredList = listOfRestaurants.filter(
            //   (res) => res.info.rating.aggregate_rating > 4
            // );

            // setListOfRestaurants(filteredList);
            // console.log(filteredList);

            const filteredList = resList.filter(
              (res) => parseFloat(res.info.rating.aggregate_rating) > 4
            );
            setFilteredRestaurant(filteredList);
          }}
         
        >
          Top Rated Restaurants
        </button>
        <button className="btn reset" onClick={() => setFilteredRestaurant(resList)}>Reset</button>
        </div>
        </div>
        <div className="restaurant-container">
           {/* <RestaurantCard resData ={resList[12]} />             */}
            {(filteredRestaurant.length ? filteredRestaurant : listOfRestaurants).map(
              (restaurant) => (
                <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
              )
            )}

        </div>
      </div>
    );
  };


>>>>>>> c89fe74f1cb371af8271a367585aade2501a6136
  export default Body;