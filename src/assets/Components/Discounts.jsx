import React from 'react'

function Discounts() {
  return (
    <>
      <section className="flex justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[100%]">
          {/* Discount Card 1 */}
          <div className="flex flex-col w-full h-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[url('../Images/vage1.png')] bg-cover bg-center h-[200px] flex items-end p-4">
              <div className="bg-[#ffb30e] flex items-center p-4 rounded-tl-lg rounded-br-lg">
                <p className="text-white text-4xl font-extrabold">15</p>
                <div className="text-white font-bold text-lg flex flex-col ml-2">
                  <span>%</span>
                  <span>OFF</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg font-semibold p-4">Greys Vage</p>
            <p className="text-[#f17228] bg-[#fce3d4] py-2 text-center rounded-lg">6 Days Remaining</p>
          </div>

          {/* Discount Card 2 */}
          <div className="flex flex-col w-full h-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[url('../Images/vage2.png')] bg-cover bg-center h-[200px] flex items-end p-4">
              <div className="bg-[#ffb30e] flex items-center p-4 rounded-tl-lg rounded-br-lg">
                <p className="text-white text-4xl font-extrabold">10</p>
                <div className="text-white font-bold text-lg flex flex-col ml-2">
                  <span>%</span>
                  <span>OFF</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg font-semibold p-4">Greys Vage</p>
            <p className="text-[#f17228] bg-[#fce3d4] py-2 text-center rounded-lg">4 Days Remaining</p>
          </div>

          {/* Discount Card 3 */}
          <div className="flex flex-col w-full h-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[url('../Images/vage3.png')] bg-cover bg-center h-[200px] flex items-end p-4">
              <div className="bg-[#ffb30e] flex items-center p-4 rounded-tl-lg rounded-br-lg">
                <p className="text-white text-4xl font-extrabold">25</p>
                <div className="text-white font-bold text-lg flex flex-col ml-2">
                  <span>%</span>
                  <span>OFF</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg font-semibold p-4">Greys Vage</p>
            <p className="text-[#f17228] bg-[#fce3d4] py-2 text-center rounded-lg">7 Days Remaining</p>
          </div>

          {/* Discount Card 4 */}
          <div className="flex flex-col w-full h-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[url('../Images/vage4.png')] bg-cover bg-center h-[200px] flex items-end p-4">
              <div className="bg-[#ffb30e] flex items-center p-4 rounded-tl-lg rounded-br-lg">
                <p className="text-white text-4xl font-extrabold">20</p>
                <div className="text-white font-bold text-lg flex flex-col ml-2">
                  <span>%</span>
                  <span>OFF</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg font-semibold p-4">Greys Vage</p>
            <p className="text-[#f17228] bg-[#fce3d4] py-2 text-center rounded-lg">3 Days Remaining</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Discounts
