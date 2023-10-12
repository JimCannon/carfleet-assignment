import equipmentsData from '../mockdata/equipments.json'

// fake API that comes from the mockdata
export const getAllEquipments = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(equipmentsData)
		}, 500)
	})
}
