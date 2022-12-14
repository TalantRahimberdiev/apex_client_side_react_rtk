
import { useAppSelector, } from '../../rtk/hooks'
import Modal_spravochnik from './helpers/modal_spravochnik'
import { add_spravochnik_element, remove_spravochnik_element } from '../../rtk/spravochniki/preparats'

export default function Preparats({ set_preparat }: { set_preparat: Function }) {

   const spravochnik = useAppSelector(state => state.reducer_prepatats)

   return (
      <>
         <Modal_spravochnik set_element={set_preparat} spravochnik={spravochnik} add_spravochnik_element={add_spravochnik_element} remove_spravochnik_element={remove_spravochnik_element} />
      </>
   )
}