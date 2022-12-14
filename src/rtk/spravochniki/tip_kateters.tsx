
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Interface_spravochniks } from './INTERFACE_SPRAVOCHNIKS'

const initialState: Interface_spravochniks = {
   pk: 7,
   spravochnik_title: 'Тип катетеров',
   spravochnik_elements: ['Катетер_венозный', 'Катетер_артериальный',],
}

export const slice_tip_kateters = createSlice({
   name: 'tip_kateters',
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

export const { add_spravochnik_element, remove_spravochnik_element } = slice_tip_kateters.actions
export default slice_tip_kateters.reducer