import adapter from '@sveltejs/adapter-vercel';
import { importAssets } from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [importAssets(
		{sources: [{
			tag: 'img',
			srcAttributes: ['src'],
			srcsetAttributes: ['srcset'],
		}]}
	)]
};

export default config;
