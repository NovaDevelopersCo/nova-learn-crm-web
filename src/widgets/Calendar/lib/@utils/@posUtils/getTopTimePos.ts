export default function getTopTimePos(
	date: Date,
	hourHeightPx: number,
	clocks: string[]
): number {
	const minuteHeightPx = Math.floor(hourHeightPx / 60)
	const top =
		hourHeightPx * (date.getHours() - +clocks[0]) +
		minuteHeightPx * date.getMinutes()

	return top
}
