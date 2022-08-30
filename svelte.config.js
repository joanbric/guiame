import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
    env:{
        dir: process.cwd(),
    },
    paths:{
        assets: '/static',
        base: '/base'
    }
};

export default config;
