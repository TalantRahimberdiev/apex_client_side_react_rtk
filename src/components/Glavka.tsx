
import { Routes, Route, } from "react-router-dom"
import MAIN_NAZNACHENIE_SEANSA_GEMODIALIZA from './naznachenie_seansa_gemodializa/main_naznachenie_seansa_gemodializa'
import MAIN_NAZNACHENIE_POSLE_SEANSA from "./naznachenie_posle_seansa/main_naznachenie_posle_seansa"
import MAIN_LECHENIE_NA_DOMU from "./lechenie_na_domu/main_lechenie_na_domu"
import MAIN_REKOMENDASII from "./rekomendasii/main_rekomendasii"

export default function Glavka() {
   return (
      <Routes>
         <Route path="naznachenie_seansa_gemodializa" element={<MAIN_NAZNACHENIE_SEANSA_GEMODIALIZA />} />
         <Route path="naznachenie_posle_seansa" element={<MAIN_NAZNACHENIE_POSLE_SEANSA />} />
         <Route path="lechenie_na_domu" element={<MAIN_LECHENIE_NA_DOMU />} />
         <Route path="rekomendasii" element={<MAIN_REKOMENDASII />} />
      </Routes>
   )
}