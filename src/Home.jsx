import React from "react";
import Discounts from './assets/Components/Discounts'
import HowItWorks from './assets/Components/HowItWorks'
import PopularItems from './assets/Components/PopularItems'
import FeaturedRestaurants from './assets/Components/FeaturedRestaurants'
import FeaturedFood from './assets/Components/FeaturedFoods'
import InstallSection from './assets/Components/InstallSection'
import DealsSection from './assets/Components/DealSection'
import Hero from "./assets/Components/Hero";
function Home() {
  return (
    <>
    <Hero/>
     <Discounts/>
     <HowItWorks/>
     <PopularItems/>
     <FeaturedRestaurants/>
     <FeaturedFood/>
     <InstallSection/>
     <DealsSection/>
    </>
  );
}

export default Home;
