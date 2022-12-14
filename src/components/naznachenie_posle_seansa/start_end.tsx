
import { Flex, Title } from '@mantine/core'
import { DatePicker } from '@mantine/dates';

export default function StartEnd({ set_start_date, set_end_date, selected_days }: { set_start_date: (value: null) => void, set_end_date: (value: null) => void, selected_days: number }) {

   return (
      <>
         <Flex mt={'md'} align='center' gap={'lg'} justify={'flex-start'}>
            <DatePicker onChange={set_start_date} placeholder="DD MM YYYY" label="Начало приема" />
            <DatePicker onChange={set_end_date} ml={'lg'} placeholder="DD MM YYYY" label="Конец приема" />
            <Title order={6}>Количество сеансов:{` `}{selected_days}</Title>
         </Flex>
      </>
   )
}