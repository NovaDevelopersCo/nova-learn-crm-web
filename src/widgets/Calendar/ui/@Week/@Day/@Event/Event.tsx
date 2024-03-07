import React, { FC } from 'react'

import { IEvent } from '../../../../model/@interfaces'

const Event: FC<IEvent> = ({ id, name, description, color, date }) => {
	return (
		<div color={color}>
			{id.toString()} {name} {description} {date.toString()}
		</div>
	)
}

export default Event
