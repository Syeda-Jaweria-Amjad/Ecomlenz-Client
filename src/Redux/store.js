import { configureStore } from "@reduxjs/toolkit";
import {
  addSellerReducer,
  changePasswordReducer,
  editProfileReducer,
  loadCurrentUserReducer,
  loadUserAllSellersReducer,
  loadUserSavedSellersReducer,
  markAsReadAllProductsReducer,
  pauseSellerReducer,
  saveSellerReducer,
} from "./Reducers/loadCurrentUserReducer";
import { clearErrorsAction } from "./Actions/loadCurrentUserAction";
import { editSellerReducer,deleteSellerReducer } from "./Reducers/loadCurrentUserReducer";

const store = configureStore({
  reducer: {
    loadCurrentUserReducer,
    clearErrorsAction,
    loadUserAllSellersReducer,
    addSellerReducer,
    pauseSellerReducer,
<<<<<<< HEAD
    editSeller: editSellerReducer,
    deleteSellerReducer
=======
    loadUserSavedSellersReducer,
    changePasswordReducer,
    editProfileReducer,
    markAsReadAllProductsReducer,
    saveSellerReducer,
>>>>>>> ed3f83727f90cb245f74035b1c207d7d904ba5b0
  },
});

export default store;
