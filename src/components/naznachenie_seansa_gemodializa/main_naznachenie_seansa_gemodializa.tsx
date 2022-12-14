
import ProgrammaApparata from "./programma_apparata"
import Dializators from './dializators'
import Konsentrators from "./konsentrators"
import TipInyeksiy from "./tip_inyeksiy"
import Bicarbonats from "./bicarbonats"
import Antikoagulasia from "./antikoagulasia"
import SformirovatSeans from "./sformirovat_seans"

export default function MAIN_NAZNACHENIE_SEANSA_GEMODIALIZA() {

   return (
      <>
         <h4>Назначение сеанса гемодиализа</h4>
         <ProgrammaApparata />
         <Dializators />
         <Konsentrators />
         <TipInyeksiy />
         <Bicarbonats />
         <Antikoagulasia />
         <SformirovatSeans />
      </>
   )
}