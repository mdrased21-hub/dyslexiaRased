const generateDayWiseTimeSeries = (baseval, count, yrange) => {
	let i = 0;
	const series2 = [];
	while (i < count) {
		const x = baseval;
		const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

		series2.push([x, y]);
		baseval += 86400000;
		i += 1;
	}
	return series2;
};

export default generateDayWiseTimeSeries;
