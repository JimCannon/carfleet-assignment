import { render } from '@testing-library/react'

import VehicleList from './components/vehicleList/VehicleList'

const mockUseSelector = jest.fn()
jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: () => mockUseSelector(),
}))

test('It calls useSelector twice', () => {
	const { getByText } = render(<VehicleList />)
	const linkElement = getByText(/Vehicle List/i)
	expect(mockUseSelector).toBeCalledTimes(2)
})
