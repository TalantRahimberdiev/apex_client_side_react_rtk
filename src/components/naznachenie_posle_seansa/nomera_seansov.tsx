
import { Flex, Title, Button } from '@mantine/core'

export default function NomeraSeansov({ selected_days, set_selected_days }: { selected_days: { day: number, activeness: boolean }[], set_selected_days: Function }) {

   const get_choisen_days = (param: number) => {
      set_selected_days(selected_days.map((day: { day: number, activeness: boolean }) => day.day === param ? { day: param, activeness: !day.activeness } : day))
   }

   return (
      <>
         <Title mt={'lg'} order={6}>Номера сеансов</Title>
         <Flex mt={'sm'} align='flex-end' wrap={'wrap'} justify='flex-start'>
            {
               selected_days.map((day: { day: number, activeness: boolean }, index: number) => (
                  <Button
                     onClick={() => get_choisen_days(day.day)}
                     color={day.activeness ? 'cyan' : 'dark'}
                     mb={'md'} mr={"lg"} variant='outline' key={index}>
                     {day.day}
                  </Button>
               ))
            }
         </Flex>
      </>
   )
}