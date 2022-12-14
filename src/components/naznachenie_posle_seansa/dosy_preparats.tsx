
import { useAppSelector, } from '../../rtk/hooks'
import Modal_spravochnik from './helpers/modal_spravochnik'
import { add_spravochnik_element, remove_spravochnik_element } from '../../rtk/spravochniki/dosy_preparats'

export default function DosyPreparats({ set_doza }: { set_doza: Function }) {

   const spravochnik = useAppSelector(state => state.reducer_dosy_preparats)

   return (
      <>
         <Modal_spravochnik set_element={set_doza} spravochnik={spravochnik} add_spravochnik_element={add_spravochnik_element} remove_spravochnik_element={remove_spravochnik_element} />
      </>
   )
}