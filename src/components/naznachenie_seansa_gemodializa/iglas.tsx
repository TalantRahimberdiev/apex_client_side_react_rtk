
import { useAppSelector } from '../../rtk/hooks'
import Modal_spravochnik from './helpers/modal_spravochnik'
import { add_spravochnik_element, remove_spravochnik_element } from '../../rtk/spravochniki/iglas'

export default function Iglas() {

   const spravochnik = useAppSelector(state => state.reducer_iglas)

   return (
      <>
         <Modal_spravochnik spravochnik={spravochnik} add_spravochnik_element={add_spravochnik_element} remove_spravochnik_element={remove_spravochnik_element} />
      </>
   )
}