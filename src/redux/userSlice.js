import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//    user:null,
//    error:false,
//    loading:false
//   }

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
    error:false,
    loading:false
  },
  reducers: {
    signInStart: state =>{
        state.loading=true
    },
    signInFailure: (state,action) =>{
        state.loading=false
        state.error=true
    },
    signInSuccess: (state,action) =>{
        state.loading=false
        state.user=action.payload
    },
    logout: state =>{
        state.loading=false
        state.user=null
        state.error=false
    }
  }
})

// Action creators are generated for each case reducer function
export const { signInStart, signInFailure, signInSuccess,logout } = userSlice.actions

export default userSlice.reducer