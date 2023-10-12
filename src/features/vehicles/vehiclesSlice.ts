import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateId } from '../../utils/uuid'

interface Equipments {
	id: number
	name: string
}

interface Vehicle {
	id: string
	name: string
	driver: string
	status: string
	fuelType: string
	equipments?: number[]
}

const initialState: Vehicle[] = []

const vehiclesSlice = createSlice({
	name: ' vehicles',
	initialState,
	reducers: {
		setVehicles: (state, action: PayloadAction<Vehicle[]>) => {
			return action.payload
		},
		// addVehicle: (state, action: PayloadAction<Omit<Vehicle, 'id'>>) => {
		// 	const newVehicle = {
		// 		id: generateId(),
		// 		...action.payload,
		// 	}
		// 	state.push(newVehicle)
		// },
		// removeVehicle: (state, action: PayloadAction<string>) => {
		// 	return state.filter((vehicle) => vehicle.id !== action.payload)
		// },
		updateVehicle: (state, action: PayloadAction<Vehicle>) => {
			console.log(action.payload)
			const index = state.findIndex((vehicle) => vehicle.id === action.payload.id)
			if (index !== -1) {
				state[index] = action.payload
			}
		},
	},
})

export default vehiclesSlice.reducer
export const { setVehicles, /*addVehicle, removeVehicle,*/ updateVehicle } = vehiclesSlice.actions
