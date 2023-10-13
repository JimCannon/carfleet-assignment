import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Button, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Link } from 'react-router-dom'

const VehicleList = () => {
	const vehicles = useSelector((state: RootState) => state.vehicles)
	const equipments = useSelector((state: RootState) => state.equipments)

	const getEquipmentByID = (id: number) => {
		const eq = equipments.find((eq) => eq.id === id)
		return eq?.name
	}

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Vehicle List</h1>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: '15px',
					margin: 'auto',
					width: '90vw',
					maxWidth: '900px',
					textAlign: 'center',
				}}
			>
				{vehicles &&
					vehicles.map((vehicle, index) => (
						<Card key={index} style={{ height: '100%' }}>
							<CardContent style={{ display: 'flex', flexDirection: 'column', height: '90%' }}>
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									{vehicle.id}
								</Typography>
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									{vehicle.name}
								</Typography>
								{/* 
									// Status shouldnt be displayed?
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									{vehicle.status}
								</Typography> }
									// Driver shouldnt be displayed?
								{ <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									{vehicle.driver}
								</Typography> */}
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									{vehicle.fuelType}
								</Typography>
								{vehicle.equipments?.map((equipment, index) => (
									<Typography key={index} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
										{getEquipmentByID(equipment)}
									</Typography>
								))}
								<div style={{ flex: 1 }}></div>
								<Button style={{}} component={Link} to={`/vehicles/${vehicle.id}`}>
									Update Vehicle
								</Button>
							</CardContent>
						</Card>
					))}
			</div>
		</>
	)
}

export default VehicleList
