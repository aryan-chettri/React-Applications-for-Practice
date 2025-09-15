import {configureStore} from '@reduxjs/toolkit'

import  switcherReducer from '../features/switcher/switcherSlice.js'

export default configureStore({
    reducer: {
        switcher: switcherReducer,
    },
})