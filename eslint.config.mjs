import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	{files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
	{languageOptions: {globals: globals.browser, ecmaVersion: '2020'}},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	importPlugin.flatConfigs.recommended,
	{
		plugins: {
			'unused-imports': unusedImports,
		},
		rules: {
			'import/no-unresolved': 'off',
			'import/order': [
				'error',
				{
					groups: [
						'external',
						'unknown',
						'index',
						'sibling',
						'parent',
						'builtin',
						'object',
						'type',
						'internal',
					],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
					warnOnUnassignedImports: true,
				},
			],
			'@typescript-eslint/no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
		settings: {
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
					paths: ['src', 'eslint.config.mjs'],
				},
			},
		},
	},
	{
		ignores: [
			'node_modules',
			'.yarn',
			'commitlint.config.js',
			'lib',
			'coverage',
		],
	},
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
];
