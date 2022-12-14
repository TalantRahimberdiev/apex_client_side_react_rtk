
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Form {
   preparat: string
   put_priema: string
   dozirovka: string
   nomera_seansov: number[]
   nachalo_priema: string
   kones_priema: string
   kolichestvo: number
}

export interface Final {
   records: Form[]
}

const initialState: Final = {
   records: []
}

export const slice_form_naznachenie_posle_seansa = createSlice({
   name: 'form_naznachenie_posle_seansa',
   initialState,
   reducers: {
      submit_records: (state, action: PayloadAction<Form>) => {
         state.records.push(action.payload)
      },
      remove_records: (state, action: PayloadAction<{ pk: number }>) => {
         const pk: number = action.payload.pk
         state.records = state.records.filter(record => state.records.indexOf(record) !== pk)
      },
   },
})

export const { submit_records, remove_records } = slice_form_naznachenie_posle_seansa.actions
export default slice_form_naznachenie_posle_seansa.reducer