/// <reference types="vitest" />
import {defineConfig} from 'vite';

import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{
				find: /^persian-figlet$/,
				replacement: resolve(__dirname, '../index.ts'),
			},
		],
	},
	build: {
		sourcemap: false,
		outDir: '../lib',
		lib: {
			entry: resolve(__dirname, 'index.ts'),
			name: 'CLI',
			formats: ['es'],
		},
		rollupOptions: {
			external: ['persian-figlet', 'commander', 'chalk', 'fs'],
		},
	},
});
