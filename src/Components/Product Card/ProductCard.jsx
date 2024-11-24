import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-4xl mx-auto border rounded-lg shadow-md p-4 bg-white">
      <div className="flex justify-between items-start">
        {/* Left Section */}
        <div className="flex gap-4">
          {/* Product Image */}
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              className="rounded-md object-cover w-full h-full"
            />
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-sm font-semibold leading-tight">
              We Are Young Life is Fun WYLF for Toyota Sienna 7 Passenger 2020 - 3rd Row Set Seat Covers - Solid Gray Faux Leather
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs px-2 py-1 bg-gray-200 rounded-full">Automotive</span>
              <span className="text-yellow-500 text-sm">★</span>
              <span className="text-gray-500 text-xs">-0.1</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">B0DJG341BX</div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-end">
          <div className="w-40 h-24 bg-gray-100 rounded-md"></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-2">
          {/* Tags */}
          <div className="text-xs bg-gray-100 px-2 py-1 rounded-md">FBM</div>
          <div className="text-xs bg-gray-100 px-2 py-1 rounded-md">$139.99</div>
          <div className="text-xs bg-gray-100 px-2 py-1 rounded-md">Buy Box $139.99</div>
          <div className="text-xs bg-gray-100 px-2 py-1 rounded-md">Offers 0</div>
        </div>

        <div className="text-xs text-gray-500">a month ago</div>
      </div>
    </div>
  );
};

export default ProductCard;