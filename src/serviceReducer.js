import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name:'services',
  initialState:{
    services:[],
    isLoading:true,
  },
  reducer:{
    getServiceFetch: (state) =>{
      state.isLoading=true;
    },
    getServiceSuccess: (state, action) =>{
      state.serices=action.payload;
      isLoading=false;
    },
    getServiceFail:(state)=>{
      state.isLoading=false;
    }
  }
})


export const {getServiceFetch, getServiceSuccess, getServiceFail} = serviceSlice.actions;

export default serviceSlice.reducer;



// const serviceReducer = (state = { services: [] }, action) => {
//   switch (action.type) {
//     case GET_SERVICE_SUCCESS:
//       return { ...state, services: action.services };
//     default:
//       return state;
//   }
// };
// export default serviceReducer;
