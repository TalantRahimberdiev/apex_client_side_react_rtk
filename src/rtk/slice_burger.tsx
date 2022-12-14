
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   opened: false,
}

export const slice_burger = createSlice({
   name: 'burger',
   initialState,
   reducers: {
      change_burger: state => {
         state.opened = !state.opened
      },
   },
})

export const { change_burger } = slice_burger.actions
export default slice_burger.reducer