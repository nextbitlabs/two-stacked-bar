import {html} from 'https://cdn.skypack.dev/hybrids@6';

export default html`
	<style>

		svg {
			background: var(--background, transparent);
		}

		rect.top {
			fill: var(--color-top, #999);
		}

		rect.bottom {
			fill: var(--color-bottom, #666);
		}

	</style>
`;
