import { Key } from 'react'

interface IEvent {
	readonly id: Key
	readonly name: string
	readonly description: string
	readonly color: string
	readonly dateStart: string
	readonly dateEnd: string
}

export default IEvent
