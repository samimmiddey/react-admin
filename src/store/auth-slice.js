import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = localStorage.getItem('authData');

const initialState = {
   isAuthenticated: isLoggedIn,
   showModal: false
};

const authSlice = createSlice({
   name: 'authentication',
   initialState: initialState,
   reducers: {
      doAuthentication(state, action) {
         state.isAuthenticated = action.payload;
      },
      showAuthenticatedModal(state, action) {
         state.showModal = action.payload;
      }
   }
});

export const authActions = authSlice.actions;
export default authSlice;