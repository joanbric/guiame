import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
    paths:{
        assets: '/static',
        base: '/base'
    }
};

export default config;
