
import { Textarea, Flex, Input, Button, Text, Paper } from '@mantine/core'
import { useState, } from 'react'
import { useAppDispatch, useAppSelector } from '../../rtk/hooks'
import ModalRekomendation from './helpers/modal_rekomendation'
import { submit_records } from '../../rtk/forms/form_rekomendasii'

export default function MAIN_REKOMENDASII() {

   const records = useAppSelector(state => state.reducer_form_rekomendasii.blank)

   const dispatch = useAppDispatch()
   const [selected_rekomendasiya, set_selected_rekomendasiya] = useState<string>('Текст рекомендации пациенту')
   const [fio_lechashego_vracha, set_fio_lechashego_vracha] = useState<string>('')
   const [doljnost, set_doljnost] = useState<string>('')
   const tekushee_vrema: string = new Date().toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })

   const record = { selected_rekomendasiya, fio_lechashego_vracha, doljnost, tekushee_vrema }
   return (
      <>
         <h4>Рекомендации</h4>
         <ModalRekomendation selected_rekomendasiya={selected_rekomendasiya} set_selected_rekomendasiya={set_selected_rekomendasiya} />
         <Textarea value={selected_rekomendasiya} sx={{ width: '85%' }} my={'lg'} autosize readOnly minRows={3}
         />
         <Flex gap={'lg'}>
            <Input readOnly placeholder='Должность' value={tekushee_vrema} />
            <Input onChange={e => set_fio_lechashego_vracha(e.target.value)} placeholder='ФИО лечащего врача' />
            <Input onChange={e => set_doljnost(e.target.value)} placeholder='Должность' />
         </Flex>
         <Button onClick={() => dispatch(submit_records(record))} my={'lg'} variant='outline' color={'cyan'} compact>Сохранить назначения</Button>

         {
            records.doljnost !== '' && <Paper sx={{ width: '80%' }} shadow="xs" radius="xs" p="sm">
               <Flex wrap={'wrap'} justify={'space-around'}>
                  {
                     Object.values(records).map((record, index) => <Text size={'sm'} fw={450} key={index}>{record}</Text>)
                  }
               </Flex>
            </Paper>
         }
      </>
   )
}