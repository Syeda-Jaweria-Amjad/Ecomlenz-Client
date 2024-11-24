import { configureStore } from "@reduxjs/toolkit";
import {
  addSellerReducer,
  loadCurrentUserReducer,
  loadUserAllSellersReducer,
  pauseSellerReducer,
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
    editSeller: editSellerReducer,
    deleteSellerReducer
  },
});

export default store;
