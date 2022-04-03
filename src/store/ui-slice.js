import { createSlice } from "@reduxjs/toolkit";

const darkModeValue = localStorage.getItem('darkmode') || false;

const initialState = {
   showMenu: false,
   showModal: false,
   showSuccess: false,
   darkMode: darkModeValue
};

const uiSlice = createSlice({
   name: 'menu',
   initialState: initialState,
   reducers: {
      toggleMenu(state) {
         state.showMenu = !state.showMenu;
      },
      toggleModal(state, action) {
         state.showModal = action.payload;
      },
      showSnackbar(state, action) {
         state.showSuccess = action.payload;
      },
      setDarkMode(state, action) {
         state.darkMode = action.payload;
      }
   }
});

export const uiActions = uiSlice.actions;
export default uiSlice;