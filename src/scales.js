import {scaleLinear} from 'https://cdn.skypack.dev/d3-scale@4';

export const xDomain = {
	get: ({data}) => [
		Math.min(...data.map(element => element[0])),
		Math.max(...data.map(element => element[0])),
	],
};

export const yDomain = {
	get: ({data}) => [
		0,
		Math.max(
			Math.max(...data.map(element => element[1][0])),
			Math.max(...data.map(element => element[1][1])),
		),
	],
};

export const xScale = {
	get: ({xDomain, innerWidth}) =>
		scaleLinear()
			.domain(xDomain)
			.range([0, innerWidth]),
};

export const yScale = {
	get: ({yDomain, innerHeight}) =>
		scaleLinear()
			.domain(yDomain)
			.range([0, innerHeight / 2]),
};

