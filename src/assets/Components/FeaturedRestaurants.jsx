import React from 'react';
import tagIcon from '../Images/whitetag.png';
import timerIcon from '../Images/white timer.png';
import starIcon from '../Images/star.png';
import foodWorld from '../Images/Image4.png';
import PizzaHub from '../Images/Image6.png';
import DonutsHut from '../Images/Image8.png';
import Subway from '../Images/Image10.png';
import BeefStake from '../Images/Image12.png';
import FriedChicken from '../Images/Image14.png';
import RedSquare from '../Images/Image16.png';
import TacoBell from '../Images/Image18.png';
import foodWorldImg from '../Images/Image (5).png';
import pizzaHubImg from '../Images/Image (7).png';
import donutsHutImg1 from '../Images/Image (9).png';
import donutsHutImg2 from '../Images/Image (11).png';
import rubyTuesdayImg from '../Images/Image (13).png';
import kuakataImg from '../Images/Image (15).png';
import redSquareImg from '../Images/Image (17).png';
import tacoBellImg from '../Images/Image (19).png';

function FeaturedRestaurants() {
  const restaurants = [
    { name: 'FoodWorld', discount: '20% OFF', speed: 'Fast', rating: '46', status: 'Open Tomorrow', img: foodWorldImg , imgbg:foodWorld},
    { name: 'PizzaHub', discount: '15% OFF', speed: 'Fast', rating: '50', status: 'Open Tomorrow', img: pizzaHubImg , imgbg:PizzaHub},
    { name: 'Donuts Hut', discount: '10% OFF', speed: 'Fast', rating: '40', status: 'Open Now', img: donutsHutImg1 , imgbg:DonutsHut},
    { name: 'Donuts Hut', discount: '15% OFF', speed: 'Fast', rating: '35', status: 'Open Now', img: donutsHutImg2 , imgbg:Subway},
    { name: 'Ruby Tuesday', discount: '10% OFF', speed: 'Fast', rating: '62', status: 'Open Now', img: rubyTuesdayImg , imgbg:BeefStake},
    { name: 'Kuakata Fried Chicken', discount: '25% OFF', speed: 'Fast', rating: '45', status: 'Open Now', img: kuakataImg , imgbg:FriedChicken},
    { name: 'Red Square', discount: '20% OFF', speed: 'Fast', rating: '37', status: 'Open Now', img: redSquareImg , imgbg:RedSquare},
    { name: 'Taco Bell', discount: '15% OFF', speed: 'Fast', rating: '54', status: 'Open Now', img: tacoBellImg , imgbg:TacoBell },
  ];
  restaurants.forEach(element => {
    
      console.log(element.imgbg)
  });
  return (
    <section className="restaurants bg-white py-10">
      <h1 className="text-3xl font-semibold text-[#f17228] text-center mb-8">Featured Restaurants</h1>
      <div className="restaurant-cards flex flex-wrap justify-center gap-6 px-4">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card bg-white shadow-lg rounded-lg p-4 w-[90%] sm:w-[300px] md:w-[250px]">
            <div className="relative to-[#ffaf1e] rounded-lg h-32 mb-4 flex items-center justify-center"
             style={{
                backgroundImage: `url(${restaurant.imgbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#f5f5f5'
              }}
            >
              <div className="flex items-center gap-2 absolute top-2 left-2">
                <p className="bg-[#f17228] text-white text-sm font-semibold px-2 py-1 rounded flex items-center">
                  <img src={tagIcon} alt="Tag" className="w-4 h-4 mr-1" />
                  {restaurant.discount}
                </p>
                <p className="bg-[#ffaf1e] text-white text-sm font-semibold px-2 py-1 rounded flex items-center">
                  <img src={timerIcon} alt="Timer" className="w-4 h-4 mr-1" />
                  {restaurant.speed}
                </p>
              </div>
            </div>
            <div className="logo-rating flex items-center gap-3 mb-4">
              <img src={restaurant.img} alt={restaurant.name} className="w-12 h-12 rounded-full" />
              <p className="flex flex-col text-sm font-semibold">
                <span>{restaurant.name}</span>
                <span className="flex items-center gap-1 text-[#f17228]">
                  <img src={starIcon} alt="Star" className="w-4 h-4" />
                  {restaurant.rating}
                </span>
              </p>
            </div>
            <p
              className={`text-sm font-semibold text-center py-1 rounded ${
                restaurant.status === 'Open Now' ? 'bg-[#e4f1d8] text-[#83bd4b]' : 'bg-[#fce3d4] text-[#f17228]'
              }`}
            >
              {restaurant.status}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-[#ffba26] to-[#ff9a0e] text-white text-sm font-semibold py-2 px-6 rounded shadow-lg hover:opacity-90 transition"
        >
          View All &#62;
        </a>
      </div>
    </section>
  );
}

export default FeaturedRestaurants;
