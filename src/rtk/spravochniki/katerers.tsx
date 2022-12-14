
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Interface_spravochniks } from './INTERFACE_SPRAVOCHNIKS'

const initialState:Interface_spravochniks = {
   pk: 6,
   spravochnik_title: 'Катетеры',
   spravochnik_elements: ['Катетер_1', 'Катетер_2', 'Катетер_3',],
}

export const slice_kateters = createSlice({
   name: 'kateters',
   initialState,
   reducers: {
      add_spravochnik_element: (state, action: PayloadAction<string>) => {
         state.spravochnik_elements.push(action.payload)
      },
      remove_spravochnik_element: (state, action: PayloadAction<string>) => {
         state.spravochnik_elements = state.spravochnik_elements.filter(element => element !== action.payload)
      }
   },
})

export const { add_spravochnik_element, remove_spravochnik_element } = slice_kateters.actions
export default slice_kateters.reducer