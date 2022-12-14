
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Interface_spravochniks } from './INTERFACE_SPRAVOCHNIKS'

const initialState: Interface_spravochniks = {
   pk: 12,
   spravochnik_title: 'Путь приема',
   spravochnik_elements: ['перорально', 'подкожно', 'артериально'],
}

export const slice_put_priemas = createSlice({
   name: 'put_priemas',
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

export const { add_spravochnik_element, remove_spravochnik_element } = slice_put_priemas.actions
export default slice_put_priemas.reducer