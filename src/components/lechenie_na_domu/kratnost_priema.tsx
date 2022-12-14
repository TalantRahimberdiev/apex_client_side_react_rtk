
import { useAppSelector, } from '../../rtk/hooks'
import Modal_spravochnik from './helpers/modal_spravochnik'
import { add_spravochnik_element, remove_spravochnik_element } from '../../rtk/spravochniki/kratnost_priema'

export default function KratnostPriema({ set_kratnost_priema }: { set_kratnost_priema: Function }) {

   const spravochnik = useAppSelector(state => state.reducer_kratnost_priema)

   return (
      <>
         <Modal_spravochnik set_element={set_kratnost_priema} spravochnik={spravochnik} add_spravochnik_element={add_spravochnik_element} remove_spravochnik_element={remove_spravochnik_element} />
      </>
   )
}