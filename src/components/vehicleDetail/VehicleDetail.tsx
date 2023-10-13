import { useState } from 'react'
import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import {
	Typography,
	TextField,
	Button,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	Card,
} from '@mui/material'
import { updateVehicle } from '../../features/vehicles/vehiclesSlice'

// Didnt work with interface, worked with type. Read upon this
type RouteParams = {
	id: string
}

// Make an import for the interface
interface Vehicle {
	id: string
	name: string
	driver: string
	status: string
	fuelType: string
	equipments?: number[]
}

const VehicleDetail = () => {
	const { id } = useParams<RouteParams>()
	const vehicle = useSelector(
		(state: RootState) => state.vehicles.find((vehicle) => vehicle.id === id) as Vehicle
	)
	const [editVehicle, setEditVehicle] = useState<Vehicle>(vehicle)
	const equipments = useSelector((state: RootState) => state.equipments)
	const [selectedEquipments, setSelectedEquipments] = useState<number[] | undefined>(
		vehicle?.equipments
	)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	if (!vehicle) {
		return <Typography>Vehicle not found</Typography>
	}
	const handleUpdate = () => {
		if (editVehicle) {
			console.log('Updated vehicle: ', editVehicle, selectedEquipments)
			dispatch(updateVehicle({ ...editVehicle, equipments: selectedEquipments }))
		}
		navigate('/')
	}

	const handleEquipmentChange = (event: any) => {
		setSelectedEquipments(event.target.value as number[])
	}

	return (
		<div style={{ display: 'flex', height: '100vh' }}>
			<Card
				sx={{
					margin: 'auto',
					display: 'flex',
					flexDirection: 'column',
					maxWidth: 500,
					maxHeight: 700,
				}}
			>
				<Typography sx={{ margin: '24px' }}>{vehicle.id}</Typography>
				<TextField
					sx={{ margin: '12px' }}
					label="Vehicle Name"
					value={editVehicle?.name}
					onChange={(e) => setEditVehicle({ ...editVehicle!, name: e.target.value })}
				></TextField>
				{/* Driver and Status shouldnt be displayed?? 
				<TextField
					sx={{ margin: '12px' }}
					id="vehicle-driver"
					label="Driver"
					value={editVehicle?.driver}
					onChange={(e) => setEditVehicle({ ...editVehicle!, driver: e.target.value })}
				/>
				<TextField
					sx={{ margin: '12px' }}
					id="vehicle-status"
					label="Status"
					value={editVehicle?.status}
					onChange={(e) => setEditVehicle({ ...editVehicle!, status: e.target.value })}
				/> */}
				<TextField
					sx={{ margin: '12px' }}
					id="vehicle-fuelType"
					label="Fuel Type"
					value={editVehicle?.fuelType}
					onChange={(e) => setEditVehicle({ ...editVehicle!, fuelType: e.target.value })}
				/>

				<FormControl sx={{ margin: '12px', width: 300 }}>
					<InputLabel id="eq-checkbox-label">Equipments</InputLabel>
					<Select
						labelId="eq-checkbox-label"
						id="eq-checkbox"
						multiple
						value={selectedEquipments ? selectedEquipments : []}
						onChange={handleEquipmentChange}
					>
						{equipments.map((equipment, index) => (
							<MenuItem key={index} value={equipment.id}>
								{equipment.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<Button onClick={handleUpdate}>Update Vehicle</Button>
			</Card>
		</div>
	)
}

export default VehicleDetail
