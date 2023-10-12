import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { Link } from 'react-router-dom'
import { setVehicles } from '../../features/vehicles/vehiclesSlice'
import { setEquipments } from '../../features/equipments/equipmentsSlice'
import vehiclesData from './vehicles.json'
import equipmentsData from './equipments.json'

const VehicleList = () => {
	// const dispatch = useDispatch()
	const vehicles = useSelector((state: RootState) => state.vehicles)
	const equipments = useSelector((state: RootState) => state.equipments)

	const getEquipmentByID = (id: number) => {
		const eq = equipments.find((eq) => eq.id === id)
		return eq?.name
	}

	return (
		<div>
			{vehicles &&
				vehicles.map((vehicle, index) => (
					<Card key={index} sx={{ maxWidth: 275 }}>
						<CardContent>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								{vehicle.id}
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								{vehicle.name}
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								{vehicle.status}
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								{vehicle.driver}
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								{vehicle.fuelType}
							</Typography>
							{vehicle.equipments?.map((equipment, index) => (
								<Typography key={index} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									{getEquipmentByID(equipment)}
								</Typography>
							))}
							<Button component={Link} to={`/vehicles/${vehicle.id}`}>
								Update Vehicle
							</Button>
						</CardContent>
					</Card>
				))}
		</div>
	)
}

export default VehicleList
