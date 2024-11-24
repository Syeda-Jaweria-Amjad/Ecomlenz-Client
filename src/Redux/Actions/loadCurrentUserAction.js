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
<<<<<<< HEAD

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
=======
const loadUserSavedSellersAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_SAVED_SELLERS_REQUEST",
    });
    const response = await fetch(
      "http://localhost:8000/auth/load-user-saved-sellers",
      {
        credentials: "include",
      }
    );
    const data = await response.json();

    dispatch({
      type: "LOAD_USER_SAVED_SELLERS_SUCCESS",
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_SAVED_SELLERS_ERROR",
>>>>>>> ed3f83727f90cb245f74035b1c207d7d904ba5b0
      payload: error.message || "Server connection error",
    });
  }
};

<<<<<<< HEAD
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
=======
const changePasswordAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "CHANGE_PASSWORD_REQUEST",
    });
    let response = await fetch("http://localhost:8000/auth/change-password", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    response = await response.json();
    dispatch({
      type: "CHANGE_PASSWORD_SUCCESS",
      payload: response.message,
    });
  } catch (error) {
    dispatch({
      type: "CHANGE_PASSWORD_ERROR",
>>>>>>> ed3f83727f90cb245f74035b1c207d7d904ba5b0
      payload: error.message || "Server connection error",
    });
  }
};

<<<<<<< HEAD
=======
const editProfileAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "EDIT_PROFILE_REQUEST",
    });
    let response = await fetch("http://localhost:8000/auth/edit-user", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    response = await response.json();
    dispatch({
      type: "EDIT_PROFILE_SUCCESS",
      payload: response.message,
    });
  } catch (error) {
    dispatch({
      type: "EDIT_PROFILE_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};
const markAsReadAllProductsAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "MARK_AS_READ_ALL_PRODUCTS_REQUEST",
    });
    let response = await fetch(
      `http://localhost:8000/auth/mark-as-read-new-products/${id}`,
      {
        credentials: "include",
      }
    );
    response = await response.json();
    dispatch({
      type: "MARK_AS_READ_ALL_PRODUCTS_SUCCESS",
      payload: response.message,
    });
  } catch (error) {
    dispatch({
      type: "MARK_AS_READ_ALL_PRODUCTS_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};
const saveSellerAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "SAVE_SELLER_REQUEST",
    });
    let response = await fetch(`http://localhost:8000/auth/save-seller/${id}`, {
      credentials: "include",
    });
    response = await response.json();
    dispatch({
      type: "SAVE_SELLER_SUCCESS",
      payload: response.message,
    });
  } catch (error) {
    dispatch({
      type: "SAVE_SELLER_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};
>>>>>>> ed3f83727f90cb245f74035b1c207d7d904ba5b0
export {
  loadCurrentUserAction,
  clearErrorsAction,
  loadUserAllSellersAction,
  addSellerAction,
  pauseSellerAction,
<<<<<<< HEAD
  editSellerAction,
  deleteSellerAction
=======
  loadUserSavedSellersAction,
  changePasswordAction,
  editProfileAction,
  markAsReadAllProductsAction,
  saveSellerAction,
>>>>>>> ed3f83727f90cb245f74035b1c207d7d904ba5b0
};
