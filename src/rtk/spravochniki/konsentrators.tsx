
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Interface_spravochniks } from './INTERFACE_SPRAVOCHNIKS'

const initialState: Interface_spravochniks = {
   pk: 2,
   spravochnik_title: 'Концентраторы',
   spravochnik_elements: ['фармакологический', 'иммунологический', 'генетический', 'метаболический'],
}

export const slice_konsentrators = createSlice({
   name: 'konsentrators',
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

export const { add_spravochnik_element, remove_spravochnik_element } = slice_konsentrators.actions
export default slice_konsentrators.reducer