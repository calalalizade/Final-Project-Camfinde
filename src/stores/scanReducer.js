import { createSlice } from '@reduxjs/toolkit'

export const scan = createSlice({
     name: 'scan',
     initialState: {
         isScan: false,
         locationPosition: {},
         data: []
     },
     reducers: {
         fetchData: (state,action) => {
             state.data = action.payload;
         },

         setIsScan(state) {
            state.isScan = true;
         },

         setClientPos: (state,action) => {
             state.locationPosition = action.payload;
         }
     }
})

export const { fetchData , setIsScan , setClientPos } = scan.actions;
export default scan.reducer;