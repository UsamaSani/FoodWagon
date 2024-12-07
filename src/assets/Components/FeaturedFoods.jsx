import React from 'react';
import i1 from "../Images/Image20.png"
import i2 from "../Images/Image21.png"
import i3 from "../Images/Image22.png"
import i4 from "../Images/Image23.png"
import i5 from "../Images/Image24.png"
import i6 from "../Images/Image25.png"

function FeaturedFood() {
  return (
    <section className="favFood bg-[#fff9ee] py-12 items-center flex-col flex">
      <div className="roundfood flex flex-wrap justify-center items-center px-4 py-6">
        <div className="favcard flex flex-col items-center mx-4 mb-6">
          <img src={i1} alt="Pizza" className="rounded-full w-32 h-32 mb-2" />
          <p className="text-xl font-semibold text-center">Pizza</p>
        </div>
        <div className="favcard flex flex-col items-center mx-4 mb-6">
          <img src={i2} alt="Burger" className="rounded-full w-32 h-32 mb-2" />
          <p className="text-xl font-semibold text-center">Burger</p>
        </div>
        <div className="favcard flex flex-col items-center mx-4 mb-6">
          <img src={i3} alt="Noodles" className="rounded-full w-32 h-32 mb-2" />
          <p className="text-xl font-semibold text-center">Noodles</p>
        </div>
        <div className="favcard flex flex-col items-center mx-4 mb-6">
          <img src={i4} alt="Sub-Sandwich" className="rounded-full w-32 h-32 mb-2" />
          <p className="text-xl font-semibold text-center">Sub-Sandwich</p>
        </div>
        <div className="favcard flex flex-col items-center mx-4 mb-6">
          <img src={i5} alt="Chowmein" className="rounded-full w-32 h-32 mb-2" />
          <p className="text-xl font-semibold text-center">Chowmein</p>
        </div>
        <div className="favcard flex flex-col items-center mx-4 mb-6">
          <img src={i6} alt="Steak" className="rounded-full w-32 h-32 mb-2" />
          <p className="text-xl font-semibold text-center">Steak</p>
        </div>
      </div>
      <div className="searchfood flex flex-wrap justify-between items-center w-full sm:w-3/4 px-5">
        <h1 className="text-2xl mb-4 font-bold">Search By Food</h1>
        <div className="viewbtn flex items-center ml-2">
          <p className="text-[#f17228] text-lg">View All &#62;</p>
          <a href="#" className="bg-[#ffb30e] text-white py-2 px-4 rounded-full ml-2 text-lg">
            &#60;
          </a>
          <a href="#" className="bg-[#ffb30e] text-white py-2 px-4 rounded-full ml-2 text-lg">
            &#62;
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedFood;
