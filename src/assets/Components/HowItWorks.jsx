import React from 'react'
import yellowLOcation from '../Images/yellowLOcation.png'
import yellowBell from '../Images/yellowBell.png'
import payAdvance from '../Images/payAdvance.png'
import Donut from '../Images/Donut.png'

function HowItWorks() {
  return (
    <>
       <section className="bg-[#FFF9EE] py-8">
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="text-[#f17228] text-3xl font-semibold text-center mb-8">How Does It Work</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg">
            <img src={yellowLOcation} alt="Location Icon" className="w-1/4 mb-4"/>
            <p className="font-semibold text-lg mb-2"><strong>Select Location</strong></p>
            <p className="text-gray-600">Choose the location where your food will be delivered.</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg">
            <img src={yellowBell} alt="Order Icon" className="w-1/4 mb-4"/>
            <p className="font-semibold text-lg mb-2"><strong>Choose Order</strong></p>
            <p className="text-gray-600">Check over hundreds of menus to pick your favorite food.</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg">
            <img src={payAdvance} alt="Payment Icon" className="w-1/4 mb-4"/>
            <p className="font-semibold text-lg mb-2"><strong>Pay Advanced</strong></p>
            <p className="text-gray-600">It's quick, safe, and simple. Select several methods of payment.</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg">
            <img src={Donut} alt="Enjoy Meals Icon" className="w-1/4 mb-4"/>
            <p className="font-semibold text-lg mb-2"><strong>Enjoy Meals</strong></p>
            <p className="text-gray-600">Food is made and delivered directly to your home.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HowItWorks
