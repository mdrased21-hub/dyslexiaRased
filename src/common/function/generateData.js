const generateData = (baseval, count, yrange) => {
	let i = 0;
	const series = [];
	while (i < count) {
		const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
		const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
		const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

		series.push([x, y, z]);
		baseval += 86400000;
		i += 1;
	}
	return series;
};
export default generateData;
