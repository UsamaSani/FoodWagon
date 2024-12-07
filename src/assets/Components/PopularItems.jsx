import React from 'react'
import burger1 from '../Images/burger1.png';
import cake1 from '../Images/Rectangle 336 (1).png';
import cake2 from '../Images/Rectangle 336 (2).png';
import sandwich from '../Images/Rectangle 336 (3).png';
import soup from '../Images/Rectangle 336 (4).png';
import locationIcon from '../Images/location-icon.png';

function PopularItems() {
  return (
    <>
    <section className="popular bg-white py-8">
      <div className="popular-content flex flex-col items-center justify-center px-4">
        <h1 className="text-[#f17228] text-3xl font-semibold mb-8">Popular Items</h1>
        <div className="popular-card flex flex-wrap justify-center items-center">
          {/* Cards Container */}
          <div className="pcards-container flex flex-wrap justify-center items-center gap-4 w-full max-w-screen-xl">
            {/* Card 1 */}
            <div className="pcard bg-white p-4 rounded-xl shadow-lg w-[80%] sm:w-[200px]">
              <div className="pcardi mb-4">
                <img src={burger1} alt="Cheese Burger" className="w-full h-auto rounded-md"/>
              </div>
              <div className="pcard-detail-orderbtn text-center">
                <p className="pcp font-semibold text-lg">Cheese Burger</p>
                <p className="pcl text-[#ffaf1e]">
                  <img src={locationIcon} alt="Location Icon" className="inline-block mr-1 w-3"/> Burger Arena
                </p>
                <p className="pcp text-lg font-semibold">$3.88</p>
                <a href="#" className="pco-btn bg-[#f17228] text-white py-2 px-4 rounded-lg mt-4 block text-center">Order Now</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="pcard bg-white p-4 rounded-xl shadow-lg w-[80%] sm:w-[200px]">
              <div className="pcardi mb-4">
                <img src={cake1} alt="Toffe's Cake" className="w-full h-auto rounded-md"/>
              </div>
              <div className="pcard-detail-orderbtn text-center">
                <p className="pcp font-semibold text-lg">Toffe's Cake</p>
                <p className="pcl text-[#ffaf1e]">
                  <img src={locationIcon} alt="Location Icon" className="inline-block mr-1 w-3"/> Top Stick
                </p>
                <p className="pcp text-lg font-semibold">$4.00</p>
                <a href="#" className="pco-btn bg-[#f17228] text-white py-2 px-4 rounded-lg mt-4 block text-center">Order Now</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="pcard bg-white p-4 rounded-xl shadow-lg w-[80%] sm:w-[200px]">
              <div className="pcardi mb-4">
                <img src={cake2} alt="Dancake" className="w-full h-auto rounded-md"/>
              </div>
              <div className="pcard-detail-orderbtn text-center">
                <p className="pcp font-semibold text-lg">Dancake</p>
                <p className="pcl text-[#ffaf1e]">
                  <img src={locationIcon} alt="Location Icon" className="inline-block mr-1 w-3"/> Cake World
                </p>
                <p className="pcp text-lg font-semibold">$1.99</p>
                <a href="#" className="pco-btn bg-[#f17228] text-white py-2 px-4 rounded-lg mt-4 block text-center">Order Now</a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="pcard bg-white p-4 rounded-xl shadow-lg w-[80%] sm:w-[200px]">
              <div className="pcardi mb-4">
                <img src={sandwich} alt="Chrispy Sandwich" className="w-full h-auto rounded-md"/>
              </div>
              <div className="pcard-detail-orderbtn text-center">
                <p className="pcp font-semibold text-lg">Chrispy Sandwich</p>
                <p className="pcl text-[#ffaf1e]">
                  <img src={locationIcon} alt="Location Icon" className="inline-block mr-1 w-3"/> FastFood Dine
                </p>
                <p className="pcp text-lg font-semibold">$3.00</p>
                <a href="#" className="pco-btn bg-[#f17228] text-white py-2 px-4 rounded-lg mt-4 block text-center">Order Now</a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="pcard bg-white p-4 rounded-xl shadow-lg w-[80%] sm:w-[200px]">
              <div className="pcardi mb-4">
                <img src={soup} alt="Thai Soup" className="w-full h-auto rounded-md"/>
              </div>
              <div className="pcard-detail-orderbtn text-center">
                <p className="pcp font-semibold text-lg">Thai Soup</p>
                <p className="pcl text-[#ffaf1e]">
                  <img src={locationIcon} alt="Location Icon" className="inline-block mr-1 w-3"/> Foody Man
                </p>
                <p className="pcp text-lg font-semibold">$2.79</p>
                <a href="#" className="pco-btn bg-[#f17228] text-white py-2 px-4 rounded-lg mt-4 block text-center">Order Now</a>
              </div>
            </div>
          </div>
          {/* Left Arrow Button */}
          <a href="#" className="arrow-btn rbtn rounded-full bg-[#ffaf1e] text-white flex justify-center items-center w-12 h-12 text-2xl mr-4 m-5">
            &#60;
          </a>
          {/* Right Arrow Button */}
          <a href="#" className="arrow-btn lbtn rounded-full bg-[#ffaf1e] text-white flex justify-center items-center w-12 h-12 text-2xl ml-4 m-5">
            &#62;
          </a>
        </div>
      </div>
    </section> 
    </>
  )
}

export default PopularItems;
