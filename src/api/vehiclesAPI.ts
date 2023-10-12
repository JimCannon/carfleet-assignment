import vehiclesData from '../mockdata/vehicles.json'

// fake API that comes from the mockdata
export const getAllVehicles = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(vehiclesData)
		}, 500)
	})
}
