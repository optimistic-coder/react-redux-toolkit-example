import { createSlice, configureStore } from '@reduxjs/toolkit'
import  listSlice  from './listSlice'
import ApiSlice from './ApiSlice'
const store = configureStore({
    reducer: {
        listSlice:listSlice,
        ApiSlice:ApiSlice
    }
})
export default store;