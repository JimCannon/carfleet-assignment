import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VehicleList from '../components/vehicleList/VehicleList'
import VehicleDetail from '../components/vehicleDetail/VehicleDetail'
import EquipmentsList from '../components/equipmentsList/equipmentsList'

// load the json files here instead?
const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<VehicleList />} />
				<Route path="/vehicles/:id" element={<VehicleDetail />} />
				<Route path="/equipments" element={<EquipmentsList />} />
			</Routes>
		</Router>
	)
}

export default AppRouter
