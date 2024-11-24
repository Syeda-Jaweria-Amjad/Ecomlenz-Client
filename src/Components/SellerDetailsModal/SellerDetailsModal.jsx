import React, { useState } from "react";

const SellerDetailsModal = ({SellerName, SellerID, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    <div
        className="text-md cursor-pointer"
        onClick={toggleModal}
      >
        Show detail
      </div>

      {isModalOpen && (

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-7xl w-screen cursor-default">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">Seller Details</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-lg"
          >
            &times;
          </button>
        </div>

        {/* Seller Info Row */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center space-x-3">
            <span className="text-1xl font-extrabold text-black">{SellerName}</span>
            <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded-full">
              Active
            </span>
          </div>

          {/* Action Buttons / 3-Dot Menu */}
          <div className="relative">
            <div className="hidden sm:flex space-x-3">
              <button className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300">
                Bookmark
              </button>
              <button className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300"
                >
                Delete
              </button>

              <button className="px-4 py-2 bg-black text-white rounded-md">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Seller ID & Date Info */}
        <div className="mt-4 text-sm text-gray-500 space-y-1 sm:space-y-0 sm:flex sm:justify-between sm:items-center">
          <span>{SellerID}</span>
          <div className="flex flex-col sm:flex-row sm:space-x-6 mt-2 sm:mt-0">
            <p>Last Posted: 23/11/24</p>
            <p>Added On: 22/11/24</p>
          </div>
        </div>

        {/* Products Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-black">
              Products <span className="text-black"></span>
            </h2>
            <input
              type="text"
              placeholder="Search" // Update search term on change
              className="border border-black rounded-md px-3 py-2 w-1/3"
            />
          </div>
        </div>

        
      </div>
    </div>
      )}
    </>
  );
};

export default SellerDetailsModal;