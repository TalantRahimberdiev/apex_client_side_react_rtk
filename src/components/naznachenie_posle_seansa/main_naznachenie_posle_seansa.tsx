
import { useState } from 'react'
import { Flex } from "@mantine/core"
import SformirovatSeans from "./sformirovat_seans"
import Preparats from './preparats'
import PutPriema from "./put_priema"
import DosyPreparats from "./dosy_preparats"
import NomeraSeansov from "./nomera_seansov"
import StartEnd from './start_end'

export default function MAIN_NAZNACHENIE_POSLE_SEANSA() {

   const week = [1, 2, 3, 4, 5, 6, 7]
   const days = week.map(day => {
      return { day: day, activeness: false }
   })

   const [preparat, set_preparat] = useState<string>('')
   const [put_priema, set_put_priema] = useState<string>('')
   const [doza, set_doza] = useState<string>('')
   const [selected_days, set_selected_days] = useState<{ day: number, activeness: boolean }[]>(days)
   const [start_date, set_start_date] = useState(null)
   const [end_date, set_end_date] = useState(null)

   return (
      <>
         <h4>Назначение после сеанса</h4>
         <Preparats set_preparat={set_preparat} />
         <Flex gap={'lg'}>
            <PutPriema put_priema={put_priema} set_put_priema={set_put_priema} />
            <DosyPreparats set_doza={set_doza} />
         </Flex>
         <NomeraSeansov selected_days={selected_days} set_selected_days={set_selected_days} />
         <StartEnd set_start_date={set_start_date} set_end_date={set_end_date} selected_days={selected_days.filter(day => day.activeness === true).length} />
         <SformirovatSeans record_data={{ preparat: preparat, put_priema: put_priema, doza: doza, nomera_seansov: selected_days.filter(day => day.activeness === true).map(day => day.day), nachalo_priema: JSON.stringify(start_date).slice(1, 11), kones_priema: JSON.stringify(end_date).slice(1, 11), kolichestvo: selected_days.filter(day => day.activeness === true).length }} />
      </>
   )
}