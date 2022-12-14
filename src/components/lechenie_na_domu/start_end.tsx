
import { useEffect } from 'react';
import { Flex, Title } from '@mantine/core'
import { DatePicker } from '@mantine/dates';

export default function StartEnd({ start_date, set_start_date, end_date, set_end_date, kolichestvo_dney, set_kolichestvo_dney }: { start_date: Date, set_start_date: (value: Date) => void, end_date: Date, set_end_date: (value: Date) => void, kolichestvo_dney: string, set_kolichestvo_dney: Function }) {

   const start_time = start_date.getTime()
   const end_time = end_date.getTime()
   const variance = (end_time - start_time) / 1000 / 60 / 60 / 24

   useEffect(() => {
      set_kolichestvo_dney(Number(variance))
   }, [end_date,start_date])

   return (
      <>
         <Flex mt={'md'} align='center' gap={'lg'} justify={'flex-start'}>
            <DatePicker onChange={set_start_date} placeholder="DD MM YYYY" label="Начало приема" />
            <DatePicker onChange={set_end_date} ml={'lg'} placeholder="DD MM YYYY" label="Конец приема" />
            <Title order={6}>Количество дней:{` `}{kolichestvo_dney}</Title>
         </Flex>
      </>
   )
}