import {define} from 'https://cdn.skypack.dev/hybrids@6';
import {render} from './render.js';
import * as layout from './layout.js';
import * as scales from './scales.js';

export const TwoStackedBar = {
	data: [],
	margin: 20,
	width: 100,
	height: 100,
	barWidth: 1,
	gap: 0,
	render,
	...layout,
	...scales,
};

define('two-stacked-bar', TwoStackedBar);
