import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { addVehicle } from '../../features/vehicles/vehiclesSlice'
import { TextField, Button } from '@mui/material'

//unsure about this one
interface Props {
	onSuccess?: () => void
}

const VehicleForm: React.FC<Props> = ({ onSuccess }) => {
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [driver, setDriver] = useState('')
	const [status, setStatus] = useState('')
	const [fuelType, setFuelType] = useState('')
	const [equipments, setEquipments] = useState([])

	const handleAdd = () => {
		const newVehicle = {
			// Since im using uuid in redux, it will create a unique id
			//id: Math.random().toString(),
			name,
			driver,
			status,
			fuelType,
			equipments: [],
		}
		// dispatch(addVehicle(newVehicle))
		if (onSuccess) onSuccess()
	}

	return (
		<div>
			<TextField label="Vehicle Name" value={name} onChange={(e) => setName(e.target.value)} />
			<TextField label="Driver" value={driver} onChange={(e) => setDriver(e.target.value)} />
			<TextField label="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
			<TextField label="Fuel Type" value={fuelType} onChange={(e) => setFuelType(e.target.value)} />
			{/* <TextField label="Equipments" value={equipments} onChange={(e) => setEquipments(e.target.value)} /> */}
			<Button onClick={handleAdd}>Add Vehicle</Button>
		</div>
	)
}

export default VehicleForm
