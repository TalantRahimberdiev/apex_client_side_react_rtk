
import { useLocation } from 'react-router-dom'
import { Box, NavLink, } from '@mantine/core'
import { nav_data } from './nav_data'
import { useAppDispatch } from '../../rtk/hooks'
import { change_burger } from '../../rtk/slice_burger'

export default function NavElements() {
   const location = useLocation()
   const dispatch = useAppDispatch()

   const nav_elements = nav_data.map((item, index) => (
      <NavLink
         key={index}
         active={location.pathname === `/${item.link}`}
         variant='subtle'
         component={'a'}
         href={`/${item.link}`}
         label={item.label}
         onClick={() => {
            dispatch(change_burger())
         }}
         color="teal"
         style={{ fontStyle: 'italic', textDecoration: 'underline' }}
      />
   ))

   return <Box sx={{ width: 200 }}>{nav_elements}</Box>
}