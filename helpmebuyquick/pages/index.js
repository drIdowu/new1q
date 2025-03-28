import React from "react";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: "$999",
      image: "https://via.placeholder.com/300x200?text=iPhone+14+Pro",
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: "$1,199",
      image: "https://via.placeholder.com/300x200?text=MacBook+Air+M2",
    },
    {
      id: 3,
      name: "Samsung Smart TV",
      price: "$799",
      image: "https://via.placeholder.com/300x200?text=Samsung+Smart+TV",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 p-4">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-white drop-shadow-md">Welcome to HelpMeBuyQuick</h1>
      <p className="text-center mb-8 text-lg text-white">Buy and sell anything quickly and safely</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.price}</p>
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg hover:opacity-90"
                onClick={() => window.location.href = "/request"}
              >
                Request to Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Request Item or Sell Item</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="text"
            name="item"
            placeholder="Item you want to buy/sell"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="text"
            name="budget"
            placeholder="Your Budget or Price"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            name="details"
            placeholder="More details (optional)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg hover:opacity-90"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
