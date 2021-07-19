import {html, svg} from 'https://cdn.skypack.dev/hybrids@6';
import style from './style.js';

export function render({
	width,
	height,
	globalTransform,
	data,
	xScale,
	yScale,
	innerHeight,
	barWidth,
	gap,
}) {
	return html`
		${style}
		<svg width=${width} height=${height}>
			<g transform="${globalTransform}">
				${data.map(d =>
		svg`
						<g transform="translate(${xScale(d[0])}, 0)">
							<rect
								class="top"
								width="${barWidth}"
								y="${(innerHeight / 2) - (gap / 2) - yScale(d[1][0])}"
								height="${yScale(d[1][0])}"
							/>
							<rect
								class="bottom"
								width="${barWidth}"
								y="${(innerHeight / 2) + (gap / 2)}"
								height="${yScale(d[1][1])}"
							/>
						</g>
					`,
	)}
			</g>
		</svg>
	`;
}
