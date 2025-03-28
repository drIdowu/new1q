import React from "react";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: "670k naira",
      image: "https://via.placeholder.com/300x200?text=iPhone+14+Pro",
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: "1.2million naira",
      image: "https://via.placeholder.com/300x200?text=MacBook+Air+M2",
    },
    {
      id: 3,
      name: "Samsung Smart TV",
      price: "790k naira",
      image: "https://via.placeholder.com/300x200?text=Samsung+Smart+TV",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to HelpMeBuyQuick</h1>
      <p className="text-center mb-8 text-lg">Buy and sell anything quickly and safely</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.price}</p>
              <button
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                onClick={() => window.location.href = "/request"}
              >
                Request to Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto mt-12 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Request Item or Sell Item</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="item"
            placeholder="Item you want to buy/sell"
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="budget"
            placeholder="Your Budget or Price"
            required
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            name="details"
            placeholder="More details (optional)"
            className="w-full p-3 border rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
