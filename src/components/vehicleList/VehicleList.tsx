import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Button, Typography, Card, CardContent, Chip, Stack } from '@mui/material'
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
				}}
			>
				{vehicles &&
					vehicles.map((vehicle, index) => (
						<Card key={index} style={{ height: '100%' }}>
							<CardContent
								style={{
									display: 'flex',
									flexDirection: 'column',
									height: '90%',
								}}
							>
								<Typography
									style={{ textAlign: 'center', fontWeight: 'bold' }}
									sx={{ fontSize: 14 }}
									gutterBottom
								>
									{vehicle.id}
								</Typography>
								<Typography sx={{ fontSize: 14 }} gutterBottom>
									{vehicle.name ? vehicle.name : 'No Name'}
								</Typography>
								{/* 
									// Status shouldnt be displayed?
								<Typography sx={{ fontSize: 14 }}  gutterBottom>
									{vehicle.status}
								</Typography> }
									// Driver shouldnt be displayed?
								{ <Typography sx={{ fontSize: 14 }}  gutterBottom>
									{vehicle.driver}
								</Typography> */}
								<Typography sx={{ fontSize: 14 }} gutterBottom>
									{vehicle.fuelType ? vehicle.fuelType : 'No Fuel Type'}
								</Typography>
								{vehicle.equipments?.map((equipment, index) => (
									<Typography key={index} sx={{ fontSize: 14 }} gutterBottom>
										{getEquipmentByID(equipment)}
									</Typography>
								))}
								<div style={{ flex: 1 }}></div>
								{vehicle.equipments ? (
									<Typography style={{ fontSize: 12, textAlign: 'center', fontWeight: 'bold' }}>
										Equipments:{' '}
									</Typography>
								) : undefined}
								<Stack direction="row" flexWrap={'wrap'} spacing={1}>
									{vehicle.equipments?.map((equipment, index) => (
										<Chip
											key={index}
											style={{ margin: '5px' }}
											label={getEquipmentByID(equipment)}
										/>
									))}
								</Stack>
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
