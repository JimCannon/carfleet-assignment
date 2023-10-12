import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setVehicles } from '../features/vehicles/vehiclesSlice'

const MockDataLoader = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		fetch('../mockdata/vehicles.json')
			.then((response) => response.json())
			.then((data) => {
				dispatch(setVehicles(data))
			})
		// something for equipment aswell
	}, [dispatch])

	return null
}

export default MockDataLoader
