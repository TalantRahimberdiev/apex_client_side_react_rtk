
import { Table } from '@mantine/core'
import { useAppDispatch, } from '../../../rtk/hooks'
import { fill_element_form } from '../../../rtk/forms/form_naznachenie_seansa_gemodializa'

export interface Interface_tableau_props {
   set_opened: Function
   pk_spravochnik: number
   spravochnik_elements: string[]
   remove_spravochnik_element: Function
   selected_spravochnik_element: string
   set_selected_spravochnik_element: Function
}

export default function Tableau({ set_opened, pk_spravochnik, spravochnik_elements, remove_spravochnik_element, set_selected_spravochnik_element }: Interface_tableau_props) {

   const dispatch = useAppDispatch()

   return <Table withColumnBorders highlightOnHover>
      <tbody>
         {
            spravochnik_elements.map((spravochnik_element, index) => <tr key={index}>
               <td>{spravochnik_element}</td>
               <td onClick={() => dispatch(remove_spravochnik_element(spravochnik_element))} style={{ textDecoration: 'underline' }}>bin</td>
               <td onClick={() => {
                  set_selected_spravochnik_element(spravochnik_element)
                  dispatch(fill_element_form({ pk: pk_spravochnik, selected_element: spravochnik_element }))
                  set_opened(false)
               }} >{`>`}</td>
            </tr>)
         }
      </tbody>
   </Table>
}