
import { configureStore, } from '@reduxjs/toolkit';

import reducer_burger from './slice_burger'

import reducer_dializators from './spravochniki/dializators'
import reducer_konsentrators from './spravochniki/konsentrators'
import reducer_iglas from './spravochniki/iglas'
import reducer_tip_iglas from './spravochniki/tip_iglas'
import reducer_kateters from './spravochniki/katerers'
import reducer_tip_kateters from './spravochniki/tip_kateters'
import reducer_bicarbonats from './spravochniki/bicarbonats'
import reducer_prepatats from './spravochniki/preparats'
import reducer_put_priema from './spravochniki/put_priema'
import reducer_dosy_preparats from './spravochniki/dosy_preparats'
import reducer_kratnost_priema from './spravochniki/kratnost_priema'
import reducer_antikoagulants from './spravochniki/antikoagulants'

import reducer_form_naznachenie_seansa_gemodializa from './forms/form_naznachenie_seansa_gemodializa'
import reducer_form_naznachenie_posle_seansa from './forms/form_naznachenie_posle_seansa'
import reducer_form_lechenie_na_domu from './forms/form_lechenie_na_domu'
import reducer_form_rekomendasii from './forms/form_rekomendasii'

export const store = configureStore({
  reducer: {
    reducer_burger,
    reducer_dializators,
    reducer_konsentrators,
    reducer_iglas,
    reducer_tip_iglas,
    reducer_kateters,
    reducer_tip_kateters,
    reducer_bicarbonats,
    reducer_prepatats,
    reducer_put_priema,
    reducer_dosy_preparats,
    reducer_kratnost_priema,
    reducer_antikoagulants,

    reducer_form_naznachenie_seansa_gemodializa,
    reducer_form_naznachenie_posle_seansa,
    reducer_form_lechenie_na_domu,
    reducer_form_rekomendasii,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
