import { combineReducers } from 'redux';
import productReducer from './product.reducer';
import { configureStore } from '@reduxjs/toolkit'

// export default combineReducers({
//   productReducer: productReducer,
  
// })
export default  configureStore({
  reducer: {
    productReducer: productReducer
  }
})