
import { Title, Button, Flex, Box } from '@mantine/core'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../rtk/hooks'
import Iglas from './iglas'
import Kateters from './kateters'
import Tip_iglas from './tip_iglas'
import Tip_kateters from './tip_kateters'
import { fill_element_form } from '../../rtk/forms/form_naznachenie_seansa_gemodializa'

export default function TipInyeksiy() {

   const inyeksias: React.FC[][] = [[Iglas, Tip_iglas], [Kateters, Tip_kateters]]
   const dispatch = useAppDispatch()

   const tip_inyeksiy: string[] = ['ИГЛА', 'КАТЕТЕР',]
   const [selected_inyeksia, set_selected_inyeksia] = useState<number>(-1)
   const form_naznacheniya = useAppSelector(state => state.reducer_form_naznachenie_seansa_gemodializa)
   const pk = form_naznacheniya.find(block => block.title === 'Тип инъекции')?.pk || 1000

   function RendersOnEvent() {
      return <Flex gap={'lg'} wrap='wrap'>
         {
            form_naznacheniya[pk].selected_element !== '' && inyeksias[selected_inyeksia].map((Component, index) => (
               <Component key={index}></Component>
            ))
         }
      </Flex>
   }

   useEffect(() => {
      RendersOnEvent()
   }, [selected_inyeksia])

   return (
      <Box mt={'lg'}>
         <Title order={6}>Тип инъекции</Title>
         <Flex mih={50} gap="lg" justify="flex-start" align="center" direction="row" wrap="wrap">
            {
               tip_inyeksiy.map((inyeksia, index) => (
                  <Button
                     onClick={() => {
                        set_selected_inyeksia(index)
                        dispatch(fill_element_form({ pk: pk, selected_element: inyeksia }))
                     }}
                     compact
                     key={index}
                     variant="outline"
                     color={inyeksia === form_naznacheniya[pk].selected_element ? 'teal' : 'dark'}>
                     {inyeksia}
                  </Button>
               ))
            }
         </Flex>
         {RendersOnEvent()}
      </Box>
   )
}