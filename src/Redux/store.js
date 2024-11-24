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
import {
  editSellerReducer,
  deleteSellerReducer,
} from "./Reducers/loadCurrentUserReducer";

const store = configureStore({
  reducer: {
    loadCurrentUserReducer,
    clearErrorsAction,
    loadUserAllSellersReducer,
    addSellerReducer,
    pauseSellerReducer,
    editSeller: editSellerReducer,
    deleteSellerReducer,
    loadUserSavedSellersReducer,
    changePasswordReducer,
    editProfileReducer,
    markAsReadAllProductsReducer,
    saveSellerReducer,
  },
});

export default store;
