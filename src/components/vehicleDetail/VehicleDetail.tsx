import { useEffect, useState } from 'react'
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
	Theme,
	Card,
} from '@mui/material'
import { updateVehicle } from '../../features/vehicles/vehiclesSlice'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}

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

	// useEffect(() => {}, [editVehicle?.driver])

	return (
		<Card sx={{ maxWidth: 500 }}>
			<Typography>{vehicle.name}</Typography>
			<Typography>{vehicle.driver}</Typography>
			<Typography>{vehicle.status}</Typography>
			<Typography>{vehicle.fuelType}</Typography>
			<TextField
				id="vehicle-driver"
				label="Driver"
				value={editVehicle?.driver}
				onChange={(e) => setEditVehicle({ ...editVehicle!, driver: e.target.value })}
			/>
			<TextField
				label="Vehicle Name"
				value={editVehicle?.name}
				onChange={(e) => setEditVehicle({ ...editVehicle!, name: e.target.value })}
			></TextField>

			<FormControl sx={{ m: 1, width: 300 }}>
				<InputLabel id="eq-checkbox-label">Equipments</InputLabel>
				<Select
					labelId="eq-checkbox-name"
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
	)
}

export default VehicleDetail
