import { configureStore } from '@reduxjs/toolkit'
import userReducer  from './userSlice'

//store.user.  user in userSLice
// ...

export const store = configureStore({
  reducer: {
    user:userReducer
  }
})

