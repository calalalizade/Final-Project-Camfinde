import { configureStore } from '@reduxjs/toolkit'
import scanReducer from './scanReducer'
import bookmarkReducer from './bookmarkReducer'

export default configureStore({
  reducer: {
    scanResult: scanReducer,
    bookmarkData: bookmarkReducer,
  }
})