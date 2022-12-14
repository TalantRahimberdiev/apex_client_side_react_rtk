
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Form_lechenie_na_domu {
   preparat: string
   put_priema: string
   doza: string
   kratnost_priema: string
   start_date: string
   end_date: string
   kolichestvo_dney: string
}

const initialState: Form_lechenie_na_domu = {
   preparat: '',
   put_priema: '',
   doza: '',
   kratnost_priema: '',
   start_date: '',
   end_date: '',
   kolichestvo_dney: ''
}

export const slice_form_lechenie_na_domu = createSlice({
   name: 'form_naznachenie_posle_seansa',
   initialState,
   reducers: {
      submit_records: (state, action: PayloadAction<Form_lechenie_na_domu>) => {
         state.preparat = action.payload.preparat
         state.put_priema = action.payload.put_priema
         state.doza = action.payload.doza
         state.kratnost_priema = action.payload.kratnost_priema
         state.start_date = action.payload.start_date
         state.end_date = action.payload.end_date
         state.kolichestvo_dney = action.payload.kolichestvo_dney
      },
   },
})

export const { submit_records } = slice_form_lechenie_na_domu.actions
export default slice_form_lechenie_na_domu.reducer