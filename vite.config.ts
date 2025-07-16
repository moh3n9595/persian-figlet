/// <reference types="vitest" />
import {defineConfig, type LibraryOptions} from 'vite';
import dts from 'vite-plugin-dts';

import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		dts({
			rollupTypes: true,
			tsconfigPath: './tsconfig.app.json',
			exclude: ['node_modules/'],
		}),
	],
	build: {
		sourcemap: false,
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, 'index.ts'),
			name: 'PersianFiglet',
			fileName: (
				format: Required<Exclude<LibraryOptions['fileName'], string>>,
			) => `persian-figlet.${format}.js`,
		},
	},
	test: {
		globals: true,
		setupFiles: './src/test/setup.ts',
		environment: 'jsdom',
		coverage: {
			enabled: true,
			all: true,
			include: ['src/**/*.{ts,tsx}'],
		},
	},
});
