const clearErrorsAction = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
const loadCurrentUserAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_CURRENT_USER_REQUEST",
    });
    const response = await fetch(
      "http://localhost:8000/auth/load-current-user",
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    dispatch({
      type: "LOAD_CURRENT_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_CURRENT_USER_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};
const loadUserAllSellersAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_ALL_SELLERS_REQUEST",
    });
    const response = await fetch(
      "http://localhost:8000/auth/load-user-all-sellers",
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    dispatch({
      type: "LOAD_USER_ALL_SELLERS_SUCCESS",
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_ALL_SELLERS_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};

const addSellerAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_SELLER_REQUEST",
    });
    const response = await fetch(
      `http://localhost:8000/auth/api/seller/${id}`,
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    dispatch({
      type: "ADD_SELLER_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_SELLER_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};
const pauseSellerAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "PAUSE_SELLER_REQUEST",
    });
    const response = await fetch(
      `http://localhost:8000/auth/pause-seller/${id}`,
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    dispatch({
      type: "PAUSE_SELLER_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "PAUSE_SELLER_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};

const editSellerAction = (sellerId, sellerName) => async (dispatch) => {
  try {
    dispatch({ type: "EDIT_SELLER_REQUEST" });
    const response = await fetch(
      `http://localhost:8000/auth/edit-seller-info/${sellerId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ sellerName }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "EDIT_SELLER_SUCCESS", payload: data.message });
    } else {
      dispatch({ type: "EDIT_SELLER_ERROR", payload: data.message });
    }
  } catch (error) {
    dispatch({
      type: "EDIT_SELLER_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};

const deleteSellerAction = (sellerId) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_SELLER_REQUEST" });
    const response = await fetch(
      `http://localhost:8000/auth/remove-seller/${sellerId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_SELLER_SUCCESS", payload: data.message });
    } else {
      dispatch({ type: "DELETE_SELLER_ERROR", payload: data.message });
    }
  } catch (error) {
    dispatch({
      type: "DELETE_SELLER_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};

export {
  loadCurrentUserAction,
  clearErrorsAction,
  loadUserAllSellersAction,
  addSellerAction,
  pauseSellerAction,
  editSellerAction,
  deleteSellerAction
};
