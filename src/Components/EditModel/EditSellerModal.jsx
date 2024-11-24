import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editSellerAction, clearErrorsAction, loadUserAllSellersAction } from "../../Redux/Actions/loadCurrentUserAction";
import { Toaster, toast } from 'react-hot-toast';
import Loader from "../Loader"

// http://127.0.0.1:8000/auth/edit-seller-info/:sellerId api methood=put
// http://127.0.0.1:8000/auth/remove-seller/:sellerId api
// http://127.0.0.1:8000/auth/api/productsBySellerID/:sellerId

const EditSellerModal = ({ SellerName, SellerID, onClose }) => {

  const dispatch = useDispatch();

  const [editedName, setEditedName] = useState(SellerName);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  // Retrieve required states from the Redux store
  const { editSellerLoading, editSellerMessage, editSellerError } = useSelector(
    (state) => state.editSeller // Ensure this matches your store configuration
  );

  const handleSave = () => {
    if (!editedName.trim()) {
      toast.error('Seller name cannot be empty!');
      return;
    }
    dispatch(editSellerAction(SellerID, editedName)); // Use 'dispatch' to trigger the action
  };

  useEffect(() => {
    if (editSellerMessage) {
      toast.success(editSellerMessage);
      dispatch(clearErrorsAction());
      dispatch(loadUserAllSellersAction());
      onClose();
    } else if (editSellerError) {
      toast.error(editSellerError);
      dispatch(clearErrorsAction());
    }
  }, [editSellerMessage, editSellerError, dispatch, onClose]);

  return (
    <div>
      <div
        className="text-md cursor-pointer"
        onClick={toggleModal}
      >
        Edit Info
      </div>

      {isModalOpen && (
        <div
          id="authentication-modal"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-40 backdrop-blur-sm cursor-default"
        >
          <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={onClose}
            >
              &times;
            </button>

            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Edit Seller
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Seller ID*
                  </label>
                  <input
                    type="text"
                    value={SellerID || 123}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nickname (optional)
                  </label>
                  <input
                    type="text"
                    value={editedName}
                    onChange={handleNameChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter seller nickname"
                  />
                </div>

                <button
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  onClick={handleSave}
                disabled={editSellerLoading}
                >
                   {editSellerLoading ? <Loader /> : 'Save'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditSellerModal;