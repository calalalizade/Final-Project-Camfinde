import { createSlice } from '@reduxjs/toolkit'

export const bookmark = createSlice({
     name: 'bookmark',
     initialState: {
        count: 0,
         bookmarks: [
         ]
     },
     reducers: {
        addBookmarks(state,action) {
            state.bookmarks.push(action.payload)
            state.count += 1
        },

        removeBookmarks(state,action) {
            const newList = state.bookmarks.filter(
                item => item.uni !== action.payload.uni
            )

            state.bookmarks = newList;
            state.count -= 1 
        },  
     }
})

export const { addBookmarks,removeBookmarks } = bookmark.actions;
export default bookmark.reducer;