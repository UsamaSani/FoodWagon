import React from "react";
import crispySandwich from "../Images/Image (26).png";
import friedChicken from "../Images/Image (27).png";
import pizza from "../Images/Image (28).png";
import yellowBg from "../Images/yellow-bg.png";

const DealsSection = () => {
  return (
    <>
      {/* Big Cards Section */}
      <section className="bigcards px-6 md:px-12 lg:px-24 py-16 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Card Component */}
          {[
            {
              image: crispySandwich,
              title: "Best Deals Crispy Sandwiches",
              description:
                "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
              linkText: "Proceed To Order",
            },
            {
              image: friedChicken,
              title: "Celebrate parties with Fried Chicken",
              description:
                "Get the best fried chicken smeared with a lip-smacking lemon chili flavor.",
              linkText: "Proceed To Order",
            },
            {
              image: pizza,
              title: "Wanna eat hot & spicy Pizza?",
              description:
                "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it now.",
              linkText: "Proceed To Order",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bcard shadow-xl rounded-2xl overflow-hidden bg-white transform transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="bccontent p-8">
                <h1 className="text-yellow-500 font-bold text-2xl md:text-3xl mb-4">
                  <span className="text-gray-900 font-semibold block">
                    {item.title.split(" ")[0]}{" "}
                  </span>
                  {item.title.split(" ").slice(1).join(" ")}
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:from-yellow-500 hover:to-orange-500 transition inline-block"
                >
                  {item.linkText} &#62;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order Section */}
      <section
        className="order relative bg-cover bg-center py-20 text-center text-white"
        style={{
          backgroundImage: `url(${yellowBg})`,
        }}
      >
        <div className="oc flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to order with the best deals?
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Choose your favorite dishes and enjoy exclusive discounts!
          </p>
          <a
            href="#"
            className="bg-orange-500 px-10 py-4 text-xl font-semibold rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            Proceed To Order &#62;
          </a>
        </div>
      </section>
    </>
  );
};

export default DealsSection;
