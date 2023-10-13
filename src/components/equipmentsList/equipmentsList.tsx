import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { List, ListItem, Typography } from '@mui/material'

const EquipmentsList = () => {
	const equipments = useSelector((state: RootState) => state.equipments)
	console.log(equipments)
	return (
		<List>
			{equipments.map((equipment, index) => (
				<ListItem key={index}>
					<Typography>{equipment.id}</Typography>
					<Typography>{equipment.name}</Typography>
				</ListItem>
			))}
		</List>
	)
}

export default EquipmentsList
