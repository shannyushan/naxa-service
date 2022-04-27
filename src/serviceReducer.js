import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name:'services',
  initialState:{
    services:[],
    isLoading:true,
  },
  reducers:{
    getServiceFetch(state){
      state.isLoading=true;
    },
    getServiceSuccess(state, action){
      state.services=action.payload;
      state.isLoading=false;
    },
    getServiceFail(state){
      state.isLoading=false;
    }
  }
})


export const {getServiceFetch, getServiceSuccess, getServiceFail} = serviceSlice.actions;

export default serviceSlice.reducer;
