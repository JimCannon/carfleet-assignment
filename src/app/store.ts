import { configureStore } from '@reduxjs/toolkit'
import vehiclesReducer from '../features/vehicles/vehiclesSlice'
import equipmentsReducer from '../features/equipments/equipmentsSlice'

const store = configureStore({
	reducer: {
		vehicles: vehiclesReducer,
		equipments: equipmentsReducer,
	},
})

// Check if this is best practices
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
