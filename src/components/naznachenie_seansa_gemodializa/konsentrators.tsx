
import { useAppSelector, useAppDispatch } from '../../rtk/hooks'
import { Input, Flex } from '@mantine/core'
import Modal_spravochnik from './helpers/modal_spravochnik'
import { add_spravochnik_element, remove_spravochnik_element } from '../../rtk/spravochniki/konsentrators'
import { fill_element_form } from '../../rtk/forms/form_naznachenie_seansa_gemodializa'

export default function Konsentrators() {

   const spravochnik = useAppSelector(state => state.reducer_konsentrators)
   const dispatch = useAppDispatch()
   const form_naznacheniya = useAppSelector(state => state.reducer_form_naznachenie_seansa_gemodializa)
   const single_form = form_naznacheniya.find(block => block.pk === spravochnik.pk)

   return (
      <Flex justify={'flex-start'} mt='lg' align={'flex-end'}>
         <Modal_spravochnik spravochnik={spravochnik} add_spravochnik_element={add_spravochnik_element} remove_spravochnik_element={remove_spravochnik_element} />

         <Input.Wrapper ml={'lg'} label={'Объем л.'}>
            <Input onChange={e => dispatch(fill_element_form({ pk: spravochnik.pk, selected_element: single_form?.selected_element, vvedenniy_obem: +(e.target.value) }))} placeholder='10 л' />
         </Input.Wrapper>
      </Flex>
   )
}