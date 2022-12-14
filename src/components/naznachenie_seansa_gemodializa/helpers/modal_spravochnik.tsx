
import { useState } from 'react'
import { useAppDispatch } from '../../../rtk/hooks'
import { Modal, Input, Flex, Burger, Title } from '@mantine/core'
import Tableau from './tableau'

export interface Interface_modal_props {
   spravochnik: {
      pk: number
      spravochnik_title: string
      spravochnik_elements: string[]
   },
   add_spravochnik_element: Function
   remove_spravochnik_element: Function
}

export default function ModalSpravochnik({ spravochnik, add_spravochnik_element, remove_spravochnik_element }: Interface_modal_props) {

   const dispatch = useAppDispatch()
   const [opened, set_opened] = useState<boolean>(false)
   const [search, set_search] = useState<string>('')
   const [input_value, set_input_value] = useState<string>('')
   const [selected_spravochnik_element, set_selected_spravochnik_element] = useState(spravochnik.spravochnik_title)

   return (
      <>
         <Modal opened={opened} onClose={() => set_opened(false)} title={spravochnik.spravochnik_title}>
            <Input placeholder='Поиск позиции по первым символам' onChange={e => set_search(e.target.value)} />
            <Flex mb={'lg'} mih={50} justify='flex-start' align={'end'} sx={{ justifyContent: 'space-between' }}>
               <Input sx={{ width: '89%' }} placeholder='Добавить новую запись' onChange={e => set_input_value(e.target.value)} />
               <span
                  onClick={() => {
                     dispatch(add_spravochnik_element(input_value))
                  }}
                  style={{ fontSize: '27px', }}
                  color={'dark'}>
                  +
               </span>
            </Flex>
            <Tableau
               set_opened={set_opened}
               pk_spravochnik={spravochnik.pk}
               spravochnik_elements={spravochnik.spravochnik_elements.filter(spravochnik_element => spravochnik_element.indexOf(search) !== -1)}
               remove_spravochnik_element={remove_spravochnik_element}
               selected_spravochnik_element={selected_spravochnik_element}
               set_selected_spravochnik_element={set_selected_spravochnik_element}
            />
         </Modal>

         <Flex mih={50} gap="lg" justify="flex-start" align="end" mt={'lg'}>
            <Input.Wrapper>
               <Title order={6}>{spravochnik.spravochnik_title}</Title>
               <Input type="text" value={selected_spravochnik_element} readOnly />
            </Input.Wrapper>
            <Burger opened={opened} onClick={() => set_opened(true)} />
         </Flex>
      </>
   )
}