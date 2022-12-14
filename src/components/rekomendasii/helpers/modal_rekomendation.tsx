
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks'
import { Modal, Input, Flex, Burger } from '@mantine/core'
import Tableau from './tableau'
import { add_remove_rekomendation } from '../../../rtk/forms/form_rekomendasii'

export default function ModalRekomendation({ selected_rekomendasiya, set_selected_rekomendasiya }: { selected_rekomendasiya: string, set_selected_rekomendasiya: Function }) {

   const dispatch = useAppDispatch()
   const [opened, set_opened] = useState<boolean>(false)
   const [search, set_search] = useState<string>('')
   const [input_value, set_input_value] = useState<string>('')
   const rekomendations = useAppSelector(state => state.reducer_form_rekomendasii.rekomendasii)

   return (
      <>
         <Modal opened={opened} onClose={() => set_opened(false)} title={'Текст рекоммендации пациенту'}>
            <Input placeholder='Поиск позиции по первым символам' onChange={e => set_search(e.target.value)} />
            <Flex mb={'lg'} mih={50} justify={'space-between'} align={'end'}>
               <Input sx={{ width: '89%' }} placeholder='Добавить новую запись' onChange={e => set_input_value(e.target.value)} />
               <span
                  onClick={() => {
                     dispatch(add_remove_rekomendation({ task: 1, rekomendation: input_value }))
                  }}
                  style={{ fontSize: '27px', }}
                  color={'dark'}>
                  +
               </span>
            </Flex>
            <Tableau
               set_selected_rekomendasiya={set_selected_rekomendasiya}
               set_opened={set_opened}
               rekomendations={rekomendations.filter(spravochnik_element => spravochnik_element.indexOf(search) !== -1)}
            />
         </Modal>

         <Flex mih={50} gap="lg" justify="flex-start" align="end" mt={'lg'}>
            <Input.Wrapper>
               <Input style={{ width: '55vw' }} type="text" value={selected_rekomendasiya} readOnly />
            </Input.Wrapper>
            <Burger opened={opened} onClick={() => set_opened(true)} />
         </Flex>
      </>
   )
}