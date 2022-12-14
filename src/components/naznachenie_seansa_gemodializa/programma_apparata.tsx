
import { Title, Button, Flex } from '@mantine/core'
import { useState } from 'react'
import { useAppDispatch } from '../../rtk/hooks'
import { fill_element_form } from '../../rtk/forms/form_naznachenie_seansa_gemodializa'

export default function ProgrammaApparata() {

   const [active_button, set_active_button] = useState<number>(-1)
   const programma_apparats: string[] = ['HD', 'UF', 'FF']
   const dispatch = useAppDispatch()

   return (
      <>
         <Title order={6}>Программа аппарата</Title>
         <Flex mih={50} gap="lg" justify="flex-start" align="center" direction="row" wrap="wrap">
            {
               programma_apparats.map((programma_apparat, index) => (
                  <Button compact
                     onClick={() => {
                        set_active_button(index)
                        dispatch(fill_element_form({ pk: 0, title: 'Программа аппарата', selected_element: programma_apparat }))
                     }}
                     key={index}
                     variant="outline"
                     color={index === active_button ? 'teal' : 'dark'}>
                     {programma_apparat}
                  </Button>
               ))
            }
         </Flex>
      </>
   )
}