
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Blank {
   selected_rekomendasiya: string
   tekushee_vrema: string
   fio_lechashego_vracha: string
   doljnost: string
}

export interface Forma {
   rekomendasii: string[]
   blank: Blank
}

const initialState: Forma = {
   rekomendasii: ['Текст рекомендации пациенту', 'рекомендация_1', 'рекомендация_2', 'рекомендация_3', 'рекомендация_4'],
   blank: {
      selected_rekomendasiya: '',
      tekushee_vrema: '',
      fio_lechashego_vracha: '',
      doljnost: '',
   }
}
export const slice_form_rekomendasii = createSlice({
   name: 'form_rekomendasii',
   initialState,
   reducers: {
      submit_records: (state, action: PayloadAction<Blank>) => {
         state.blank = action.payload
      },
      add_remove_rekomendation: (state, action: PayloadAction<{ task: number, rekomendation: string }>) => {
         action.payload.task === 1 ? (
            state.rekomendasii.push(action.payload.rekomendation)
         ) : (
            state.rekomendasii = state.rekomendasii.filter(rekom => rekom !== action.payload.rekomendation)
         )
      },
   },
})

export const { submit_records, add_remove_rekomendation } = slice_form_rekomendasii.actions
export default slice_form_rekomendasii.reducer