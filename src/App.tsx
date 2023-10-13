import { useEffect } from 'react'
import AppRouter from './routes/AppRouter'
import { useDispatch } from 'react-redux'
import { setVehicles } from './features/vehicles/vehiclesSlice'
import { setEquipments } from './features/equipments/equipmentsSlice'
import vehiclesData from './mockdata/vehicles.json'
import equipmentsData from './mockdata/equipments.json'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setVehicles(vehiclesData))
		dispatch(setEquipments(equipmentsData))
	}, [dispatch])

	return <AppRouter />
}

export default App
