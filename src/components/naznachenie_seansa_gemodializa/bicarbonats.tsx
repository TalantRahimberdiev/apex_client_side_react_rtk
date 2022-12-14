
import { useAppSelector, useAppDispatch } from '../../rtk/hooks'
import { Flex, Input } from '@mantine/core'
import Modal_spravochnik from './helpers/modal_spravochnik'
import { add_spravochnik_element, remove_spravochnik_element } from '../../rtk/spravochniki/bicarbonats'
import { fill_element_form } from '../../rtk/forms/form_naznachenie_seansa_gemodializa'
import SuhoyVesPasienta from './suhoy_ves_pasienta'

export default function Bicarbonats() {

   const spravochnik = useAppSelector(state => state.reducer_bicarbonats)
   const dispatch = useAppDispatch()
   const form_naznacheniya = useAppSelector(state => state.reducer_form_naznachenie_seansa_gemodializa)
   const single_form = form_naznacheniya.find(block => block.pk === spravochnik.pk)

   return (
      <Flex align='flex-end'>
         <Modal_spravochnik spravochnik={spravochnik} add_spravochnik_element={add_spravochnik_element} remove_spravochnik_element={remove_spravochnik_element} />
         <Input.Wrapper ml={'lg'} label={'Объем'}>
            <Input onChange={e => dispatch(fill_element_form({ pk: spravochnik.pk, selected_element: single_form?.selected_element, vvedenniy_obem: +(e.target.value) }))} placeholder='гр/л' />
         </Input.Wrapper>
         <SuhoyVesPasienta />
      </Flex>
   )
}