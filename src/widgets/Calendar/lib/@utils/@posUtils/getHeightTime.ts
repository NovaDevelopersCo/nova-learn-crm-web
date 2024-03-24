export default function getHeightTime(
	dateStart: Date,
	dateEnd: Date,
	hourHeightPx: number
): number {
	const differenceMs = Math.abs(dateStart.getTime() - dateEnd.getTime())
	const minuteHeightPx = hourHeightPx / 60
	const differenceMinutes = differenceMs / 60000

	return Math.floor(minuteHeightPx * differenceMinutes)
}
