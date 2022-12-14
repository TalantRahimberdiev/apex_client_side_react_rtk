
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Interface_spravochniks } from './INTERFACE_SPRAVOCHNIKS'

const initialState: Interface_spravochniks = {
   pk: 13,
   spravochnik_title: 'Дозы препаратов',
   spravochnik_elements: ['мкг', 'мл', 'мг/кг'],
}

export const slice_dosy_preparats = createSlice({
   name: 'dosy_preparats',
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

export const { add_spravochnik_element, remove_spravochnik_element } = slice_dosy_preparats.actions
export default slice_dosy_preparats.reducer