//In order to have a unique ID for each vehicle, we can use unique id generator.

import { v4 as uuidv4 } from 'uuid'

export const generateId = (): string => {
	return uuidv4()
}
