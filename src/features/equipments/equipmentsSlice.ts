import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// const initialState: string[] = []

interface Equipment {
	id: number
	name: string
}
const initialState: Equipment[] = []

const equipmentsSlice = createSlice({
	name: 'equipments',
	initialState,
	reducers: {
		setEquipments: (state, action: PayloadAction<Equipment[]>) => {
			return action.payload
		},
	},
})

export default equipmentsSlice.reducer
export const { setEquipments } = equipmentsSlice.actions
