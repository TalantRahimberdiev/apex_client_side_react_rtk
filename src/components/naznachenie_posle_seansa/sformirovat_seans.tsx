import { useState } from 'react'
import { Button, Box, Table } from '@mantine/core'
import { useAppDispatch, useAppSelector } from '../../rtk/hooks'
import { submit_records, remove_records } from '../../rtk/forms/form_naznachenie_posle_seansa'

export default function SformirovatSeans({ record_data }: any) {

   const [otchet, set_otchet] = useState<boolean>(false)
   const records = useAppSelector(state => state.reducer_form_naznachenie_posle_seansa.records)
   const dispatch = useAppDispatch()

   return (
      <Box mt={'lg'}>
         <Button mb={'lg'} onClick={() => {
            dispatch(submit_records(record_data))
            set_otchet(!otchet)
         }} variant='outline' color={'teal'}>Сформировать</Button>
         {
            records[0] && <Table verticalSpacing="xs" fontSize="xs">
               <thead>
                  <tr>
                     <th>Лекарственный препарат</th>
                     <th>Путь приема</th>
                     <th>Дозировка</th>
                     <th>Начало приема</th>
                     <th>Конец приема</th>
                     <th>Номер сеанса</th>
                     <th>Дней</th>
                     <th >Удалить</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     records.map((seans, index) => (
                        <tr key={index}>
                           <td>{seans.preparat}</td>
                           <td>{seans.put_priema}</td>
                           <td>{seans.dozirovka}</td>
                           <td>{seans.nachalo_priema}</td>
                           <td>{seans.kones_priema}</td>
                           <td>{seans.nomera_seansov?.map(n => n.toString() + ',')}</td>
                           <td>{seans.kolichestvo}</td>
                           <td style={{ textDecoration: 'underline' }} onClick={() => dispatch(remove_records({ pk: index }))}>Удалить</td>
                        </tr>
                     ))
                  }
               </tbody>
            </Table>
         }
      </Box>
   )
}