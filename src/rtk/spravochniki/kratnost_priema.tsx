
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Interface_spravochniks } from './INTERFACE_SPRAVOCHNIKS'

const initialState: Interface_spravochniks = {
   pk: 7,
   spravochnik_title: 'Кратность приема',
   spravochnik_elements: ['1 раз в день', '2 раза в день', '3 раза в день'],
}

export const slice_kratnost_priemas = createSlice({
   name: 'kratnost_priemas',
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

export const { add_spravochnik_element, remove_spravochnik_element } = slice_kratnost_priemas.actions
export default slice_kratnost_priemas.reducer