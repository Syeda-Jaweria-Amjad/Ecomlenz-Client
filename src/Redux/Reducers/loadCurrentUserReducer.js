import { createReducer } from "@reduxjs/toolkit";

const loadCurrentUserReducer = createReducer(
  { loading: false, user: null, error: "" },
  (builder) => {
    builder
      .addCase("LOAD_CURRENT_USER_REQUEST", (state) => {
        state.loading = true;
      })
      .addCase("LOAD_CURRENT_USER_SUCCESS", (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase("LOAD_CURRENT_USER_ERROR", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("CLEAR_ERRROS", (state) => {
        state.error = "";
        state.loading = false;
      });
  }
);

const loadUserAllSellersReducer = createReducer(
  { loading: false, sellers: [], error: "" },
  (builder) => {
    builder
      .addCase("LOAD_USER_ALL_SELLERS_REQUEST", (state) => {
        state.loading = true;
      })
      .addCase("LOAD_USER_ALL_SELLERS_SUCCESS", (state, action) => {
        state.loading = false;
        state.sellers = action.payload;
      })
      .addCase("LOAD_USER_ALL_SELLERS_ERROR", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("CLEAR_ERRROS", (state) => {
        state.error = "";
        state.loading = false;
      });
  }
);

const addSellerReducer = createReducer(
  {
    addSellerLoading: false,
    addSellerMessage: null,
    addSellerError: "",
  },
  (builder) => {
    builder
      .addCase("ADD_SELLER_REQUEST", (state) => {
        state.addSellerLoading = true;
      })
      .addCase("ADD_SELLER_SUCCESS", (state, action) => {
        state.addSellerLoading = false;
        state.addSellerMessage = action.payload;
      })
      .addCase("ADD_SELLER_ERROR", (state, action) => {
        state.addSellerLoading = false;
        state.addSellerError = action.payload;
      })
      .addCase("CLEAR_ERRROS", (state) => {
        state.addSellerError = "";
        state.addSellerLoading = false;
      });
  }
);
const pauseSellerReducer = createReducer(
  {
    pauseSellerLoading: false,
    pauseSellerError: null,
    pauseSellerMessage: null,
  },
  (builder) => {
    builder
      .addCase("PAUSE_SELLER_REQUEST", (state) => {
        state.pauseSellerLoading = true;
      })
      .addCase("PAUSE_SELLER_SUCCESS", (state, action) => {
        state.pauseSellerLoading = false;
        state.pauseSellerMessage = action.payload;
      })
      .addCase("PAUSE_SELLER_ERROR", (state, action) => {
        state.pauseSellerLoading = false;
        state.pauseSellerError = action.payload;
      })
      .addCase("CLEAR_ERRORS", (state) => {
        state.pauseSellerError = "";
        state.pauseSellerLoading = false;
      });
  }
);

const editSellerReducer = createReducer(
  {
    editSellerLoading: false,
    editSellerMessage: null,
    editSellerError: null,
  },
  (builder) => {
    builder
      .addCase("EDIT_SELLER_REQUEST", (state) => {
        state.editSellerLoading = true;
        state.editSellerMessage = null;
        state.editSellerError = null;
      })
      .addCase("EDIT_SELLER_SUCCESS", (state, action) => {
        state.editSellerLoading = false;
        state.editSellerMessage = action.payload;
      })
      .addCase("EDIT_SELLER_ERROR", (state, action) => {
        state.editSellerLoading = false;
        state.editSellerError = action.payload;
      })
      .addCase("CLEAR_ERRORS", (state) => {
        state.editSellerMessage = null;
        state.editSellerError = null;
      });
  }
);

const deleteSellerReducer = createReducer(
  {
    deleteSellerLoading: false,
    deleteSellerMessage: null,
    deleteSellerError: null,
  },
  (builder) => {
    builder
      .addCase("DELETE_SELLER_REQUEST", (state) => {
        state.deleteSellerLoading = true;
        state.deleteSellerMessage = null;
        state.deleteSellerError = null;
      })
      .addCase("DELETE_SELLER_SUCCESS", (state, action) => {
        state.deleteSellerLoading = false;
        state.deleteSellerMessage = action.payload;
      })
      .addCase("DELETE_SELLER_ERROR", (state, action) => {
        state.deleteSellerLoading = false;
        state.deleteSellerError = action.payload;
      })
      .addCase("CLEAR_ERRORS", (state) => {
        state.deleteSellerMessage = null;
        state.deleteSellerError = null;
      });
  }
);

export {
  loadCurrentUserReducer,
  loadUserAllSellersReducer,
  addSellerReducer,
  pauseSellerReducer,
  editSellerReducer,
  deleteSellerReducer
};
