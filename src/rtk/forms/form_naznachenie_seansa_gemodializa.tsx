
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Interface_form {
   pk: number
   title?: string
   selected_element?: string
   vvedenniy_obem?: number
}

const initialState: Interface_form[] = [
   {
      pk: 0,
      title: 'Программа аппарата',
      selected_element: '',
   },
   {
      pk: 1,
      title: 'Диализатор',
      selected_element: '',
   },
   {
      pk: 2,
      title: 'Концентратор',
      selected_element: '',
      vvedenniy_obem: -1,
   },
   {
      pk: 3,
      title: 'Тип инъекции',
      selected_element: '',
   },
   {
      pk: 4,
      title: 'Иглы',
      selected_element: '',
   },
   {
      pk: 5,
      title: 'Типы иглы',
      selected_element: '',
   },
   {
      pk: 6,
      title: 'Катетер',
      selected_element: '',
   },
   {
      pk: 7,
      title: 'Типы катетеров',
      selected_element: '',
   },
   {
      pk: 8,
      title: 'Бикарбонат',
      selected_element: '',
      vvedenniy_obem: -1,
   },
   {
      pk: 9,
      title: 'Сухой Вес пациента',
      vvedenniy_obem: -1,
   },
   {
      pk: 10,
      title: 'Антикоагуляция',
      selected_element: '',
      vvedenniy_obem: -1,
   },
]

export const slice_form_naznachenie_seansa_gemodializa = createSlice({
   name: 'form_naznachenie_seansa_gemodializa',
   initialState,
   reducers: {
      fill_element_form: (state, action: PayloadAction<Interface_form>) => {
         const pk = action.payload.pk
         const selected_element = action.payload.selected_element
         const vvedenniy_obem = action.payload.vvedenniy_obem

         let index = -1
         state.find((block, i) => {
            if (block.pk === pk) return index = i
         })
         if ('selected_element' in state[index]) state[index].selected_element = selected_element
         if ('vvedenniy_obem' in state[index]) state[index].vvedenniy_obem = vvedenniy_obem
      },
   },
})

export const { fill_element_form } = slice_form_naznachenie_seansa_gemodializa.actions
export default slice_form_naznachenie_seansa_gemodializa.reducer