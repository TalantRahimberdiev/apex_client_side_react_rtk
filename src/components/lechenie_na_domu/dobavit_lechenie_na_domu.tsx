
import { useState } from 'react'
import { Button, Box, Paper, Text, Flex } from '@mantine/core'
import { useAppDispatch, useAppSelector } from '../../rtk/hooks'
import { submit_records } from '../../rtk/forms/form_lechenie_na_domu'

export default function DobavitLechenieNaDomu({ preparat, put_priema, doza, kratnost_priema, start_date, end_date, kolichestvo_dney }: { preparat: string, put_priema: string, doza: string, kratnost_priema: string, start_date: Date, end_date: Date, kolichestvo_dney: string }) {

   const [otchet, set_otchet] = useState<boolean>(false)
   const records = useAppSelector(state => state.reducer_form_lechenie_na_domu)
   const dispatch = useAppDispatch()

   const start_date_str = start_date.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' })
   const end_date_str = end_date.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' })

   const record_data = { preparat, put_priema, doza, kratnost_priema, start_date: start_date_str, end_date: end_date_str, kolichestvo_dney: +kolichestvo_dney === 1 ? kolichestvo_dney + ' ' + 'день' : +kolichestvo_dney > 1 && +kolichestvo_dney < 6 ? kolichestvo_dney + ' ' + 'дня' : kolichestvo_dney + ' ' + 'дней' }

   return (
      <Box mt={'lg'}>
         <Button mb={'lg'} onClick={() => {
            dispatch(submit_records(record_data))
            set_otchet(!otchet)
         }} variant='outline' color={'teal'}>Добавить</Button>
         {
            otchet && <Paper sx={{ width: '80%' }} shadow="xs" radius="xs" p="sm">
               <Flex wrap={'wrap'} justify={'space-around'}>
                  {
                     Object.values(records).map((record, index) => <Text size={'sm'} fw={400} key={index}>{record}</Text>)
                  }
               </Flex>
            </Paper>
         }
      </Box>
   )
}