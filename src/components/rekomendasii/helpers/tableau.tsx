
import { Table } from '@mantine/core'
import { useAppDispatch, } from '../../../rtk/hooks'
import { add_remove_rekomendation } from '../../../rtk/forms/form_rekomendasii'


export default function Tableau({ set_selected_rekomendasiya, set_opened, rekomendations }: { set_selected_rekomendasiya: Function, set_opened: Function, rekomendations: string[] }) {

   const dispatch = useAppDispatch()

   return <Table withColumnBorders highlightOnHover>
      <tbody>
         {
            rekomendations.map((rekomendation, index) => <tr key={index}>
               <td>{rekomendation}</td>
               <td onClick={() => dispatch(add_remove_rekomendation({ task: 0, rekomendation }))} style={{ textDecoration: 'underline' }}>bin</td>
               <td onClick={() => {
                  set_selected_rekomendasiya(rekomendation)
                  set_opened(false)
               }} >{`>`}</td>
            </tr>)
         }
      </tbody>
   </Table>
}