
import { MediaQuery, Burger, useMantineTheme, Flex, Title } from "@mantine/core"
import { useMediaQuery } from '@mantine/hooks';
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { change_burger } from '../../rtk/slice_burger'

interface Interface_title {
   fullForm: string,
   shortForm: string,
}

const title: Interface_title = {
   fullForm: 'Frontend & Fullstack Developers,interview for Apex consulting',
   shortForm: 'interview Apex',
};

export default function Heading() {

   const theme = useMantineTheme()
   const matches = useMediaQuery('(min-width: 700px)')
   const dispatch = useAppDispatch()
   const opened = useAppSelector(state => state.reducer_burger.opened)

   return (
      <Flex align={'center'} >
         <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger opened={opened} onClick={() => dispatch(change_burger())} size="sm" color={theme.colors.gray[6]} mr={'5px'} />
         </MediaQuery>
         <Title ml={'lg'} order={4}>{matches ? title.fullForm : title.shortForm}</Title>
      </Flex>
   )
}