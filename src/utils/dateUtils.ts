export const formatDate = (date: Date): string => {
	const year = date.getFullYear()
	let month = (date.getMonth() + 1).toString()
	let day = date.getDate().toString()

	if (month.length === 1) {
		month = '0' + month // Добавляем ведущий ноль, если месяц однозначный
	}

	if (day.length === 1) {
		day = '0' + day // Добавляем ведущий ноль, если день однозначный
	}

	return `${year}-${month}-${day}` // Возвращаем дату в формате "гггг-мм-дд"
}
