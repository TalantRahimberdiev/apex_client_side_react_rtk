
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Interface_spravochniks } from './INTERFACE_SPRAVOCHNIKS'

const initialState: Interface_spravochniks = {
   pk: 11,
   spravochnik_title: 'Лекарственный препарат',
   spravochnik_elements: ['Препарат № 1', 'Препарат № 2', 'Препарат № 3'],
}

export const slice_preparats = createSlice({
   name: 'preparat',
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

export const { add_spravochnik_element, remove_spravochnik_element } = slice_preparats.actions
export default slice_preparats.reducer