import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userData: []
};

const userDataSlice = createSlice({
   name: 'data',
   initialState: initialState,
   reducers: {
      addUserData(state, action) {
         state.userData = action.payload;
      }
   }
});

export const userDataActions = userDataSlice.actions;
export default userDataSlice;