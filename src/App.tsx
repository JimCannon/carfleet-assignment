import { useEffect } from 'react'
import AppRouter from './routes/AppRouter'
import { useDispatch } from 'react-redux'
import { setVehicles } from './features/vehicles/vehiclesSlice'
import { setEquipments } from './features/equipments/equipmentsSlice'
import vehiclesData from './mockdata/vehicles.json'
import equipmentsData from './mockdata/equipments.json'
import { render, screen } from '@testing-library/react'

test('renders the site', () => {
	render(<App />)
	const siteElement = screen.getByTestId('site')
	expect(siteElement).toBeInTheDocument()
})

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setVehicles(vehiclesData))
		dispatch(setEquipments(equipmentsData))
	}, [dispatch])

	return (
		<div>
			<AppRouter />
		</div>
	)
}

export default App
