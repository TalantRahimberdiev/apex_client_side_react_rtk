
import { useAppDispatch } from '../../rtk/hooks'
import { Input } from '@mantine/core'
import { fill_element_form } from '../../rtk/forms/form_naznachenie_seansa_gemodializa'

export default function SuhoyVesPasienta() {

   const dispatch = useAppDispatch()

   return (
      <Input.Wrapper ml={'lg'} label={'Сухой Вес пациента'}>
         <Input onChange={e => dispatch(fill_element_form({ pk: 9, vvedenniy_obem: +(e.target.value) }))} placeholder='ХХХ кг' />
      </Input.Wrapper>
   )
}