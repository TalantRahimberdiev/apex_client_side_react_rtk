import { useState } from 'react'
import { Button, Box, Title, Grid } from '@mantine/core'
import { useAppSelector } from '../../rtk/hooks'

export default function SformirovatSeans() {
   
   const [otchet, set_otchet] = useState<boolean>(false)
   const form_naznachenia = useAppSelector(state => state.reducer_form_naznachenie_seansa_gemodializa)

   return (
      <Box mt={'lg'}>
         <Button onClick={() => {
            console.log(form_naznachenia)
            set_otchet(!otchet)
         }} variant='outline' color={'teal'}>Сформировать сеанс</Button>
         {
            otchet && <Grid>
               {
                  form_naznachenia.map((block, index) => (
                     <Grid.Col sm={6} md={6} lg={4} key={index}>
                        {block.selected_element !== '' && block.vvedenniy_obem !== -1 && <Title order={6}>{block.title}: {block.selected_element !== '' && <span>{block.selected_element}</span>} {'vvedenniy_obem' in block && <span>Объем:{' '}{block.vvedenniy_obem}</span>}</Title>}
                     </Grid.Col>
                  ))
               }
            </Grid>
         }
      </Box>
   )
}