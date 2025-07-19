import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: /^persian-figlet$/,
				replacement: resolve(__dirname, '../index.ts'),
			},
		],
	},
});
