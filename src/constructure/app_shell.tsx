
import { AppShell, useMantineTheme } from '@mantine/core';
import { Provider } from 'react-redux'
import { store } from '../rtk/store'

import MainNav from './navigation/main_nav';
import MainHead from './head/main_head';
import MainFoot from './foot/main_foot';

import Glavka from '../components/Glavka';

export default function ApplicationShell() {

   const theme = useMantineTheme()

   return (
      <Provider store={store}>
         <AppShell
            styles={{
               main: {
                  background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
               },
            }}
            navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm"
            header={<MainHead />}
            navbar={<MainNav />}
            footer={<MainFoot />}
         >
            <Glavka />
         </AppShell>
      </Provider>

   )
}