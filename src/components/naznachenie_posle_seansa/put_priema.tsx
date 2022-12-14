
import { useAppSelector } from '../../rtk/hooks'
import Modal_spravochnik from './helpers/modal_spravochnik'
import { add_spravochnik_element, remove_spravochnik_element } from '../../rtk/spravochniki/put_priema'

export default function PutPriema({ set_put_priema }: { put_priema: string, set_put_priema: Function }) {

   const spravochnik = useAppSelector(state => state.reducer_put_priema)

   return (
      <Modal_spravochnik set_element={set_put_priema} spravochnik={spravochnik} add_spravochnik_element={add_spravochnik_element} remove_spravochnik_element={remove_spravochnik_element} />
   )
}