/// <reference types="vitest" />
import {codecovVitePlugin} from '@codecov/vite-plugin';
import {defineConfig, type LibraryOptions} from 'vite';
import dts from 'vite-plugin-dts';

import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		dts({
			rollupTypes: true,
			tsconfigPath: './tsconfig.app.json',
			exclude: ['node_modules/', 'src/test/', '/cli', 'website/'],
		}),
		codecovVitePlugin({
			enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
			bundleName: 'persian-figlet',
			uploadToken: process.env.CODECOV_TOKEN,
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
		reporters: ['junit'],
		outputFile: 'test-report.junit.xml',
		coverage: {
			enabled: true,
			all: true,
			include: ['src/**/*.{ts,tsx}'],
			exclude: ['website/', 'cli/'],
		},
	},
});
