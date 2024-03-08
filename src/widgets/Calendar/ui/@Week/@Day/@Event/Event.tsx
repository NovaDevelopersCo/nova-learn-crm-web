import React, { FC } from 'react'

import { ColorUtils, DateUtils, PosUtils } from '../../../../lib/@utils'
import { IEvent } from '../../../../model/@interfaces'

const Event: FC<IEvent & { clocks: string[] }> = ({
	id,
	name,
	description,
	color,
	dateStart,
	dateEnd,
	clocks
}) => {
	const dateSt = DateUtils.DateConverters.stringSecsToDate(dateStart)
	const dateEn = DateUtils.DateConverters.stringSecsToDate(dateEnd)

	return (
		<div
			className='absolute text-xs p-2 border border-solid rounded backdrop-opacity-50 backdrop-blur m-1 overflow-hidden'
			style={{
				borderColor: color,
				backgroundColor: ColorUtils.hexToRGBA(color, 0.05),
				top: `${PosUtils.getTopTimePos(dateSt, 70, clocks)}px`,
				height: `${PosUtils.getHeightTime(dateSt, dateEn, 70)}px`
			}}
		>
			<p
				style={{ backgroundColor: color }}
				className='px-2 py-1 rounded block w-fit'
			>
				{dateSt.getHours()} : {dateSt.getMinutes()}
			</p>
			<p className='truncate text-black mt-1'>{name}</p>
			<p className='truncate text-black mt-1'>{description}</p>
		</div>
	)
}

export default Event
