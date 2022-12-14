
import { useState } from 'react'
import { Flex } from "@mantine/core"
import DobavitLechenieNaDomu from "./dobavit_lechenie_na_domu"
import Preparats from './preparats'
import PutPriema from "./put_priema"
import DosyPreparats from "./dosy_preparats"
import StartEnd from './start_end'
import KratnostPriema from './kratnost_priema'

export default function MAIN_LECHENIE_NA_DOMU() {

   const [preparat, set_preparat] = useState<string>('')
   const [put_priema, set_put_priema] = useState<string>('')
   const [doza, set_doza] = useState<string>('')
   const [kratnost_priema, set_kratnost_priema] = useState<string>('')
   const [start_date, set_start_date] = useState<Date>(new Date())
   const [end_date, set_end_date] = useState<Date>(new Date())
   const [kolichestvo_dney, set_kolichestvo_dney] = useState<string>('0')

   return (
      <>
         <h4>Лечение на дому</h4>
         <Preparats set_preparat={set_preparat} />
         <Flex gap={'lg'}>
            <PutPriema put_priema={put_priema} set_put_priema={set_put_priema} />
            <DosyPreparats set_doza={set_doza} />
         </Flex>
         <Flex gap={'md'} wrap='wrap'>
            <KratnostPriema
               set_kratnost_priema={set_kratnost_priema}
            />
            <StartEnd
               start_date={start_date}
               set_start_date={set_start_date}
               end_date={end_date}
               set_end_date={set_end_date}
               kolichestvo_dney={kolichestvo_dney}
               set_kolichestvo_dney={set_kolichestvo_dney}
            />
         </Flex>
         <DobavitLechenieNaDomu
            preparat={preparat}
            put_priema={put_priema}
            doza={doza}
            kratnost_priema={kratnost_priema}
            start_date={start_date}
            end_date={end_date}
            kolichestvo_dney={kolichestvo_dney}
         />
      </>
   )
}