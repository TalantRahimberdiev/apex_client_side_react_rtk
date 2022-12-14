
import { Navbar,ScrollArea, } from "@mantine/core"
import NavElements from "./nav_elements"
import { useAppSelector } from "../../rtk/hooks"

export default function MainNav() {

   const opened = useAppSelector(state => state.reducer_burger.opened)

   return (
      <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, lg: 250 }}>
         <ScrollArea mx="-xs" px="xs" scrollbarSize={5} scrollHideDelay={0}>
            <NavElements />
         </ScrollArea>
      </Navbar>
   )
}