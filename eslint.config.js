import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginTurbo from 'eslint-plugin-turbo';
import eslint from '@eslint/js';

export default tseslint.config(
	{
		// Global ignores
		ignores: ['dist', 'node_modules', '.vscode', '.husky', 'eslint.config.js'],
	},
	// Base configs
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		// Config for TypeScript/React files, assuming they are in `src`
		files: ['src/**/*.{ts,tsx}'],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
			globals: {
				...globals.browser,
			},
		},
		plugins: {
			react: pluginReact,
			'react-hooks': pluginReactHooks,
			'react-refresh': pluginReactRefresh,
			turbo: pluginTurbo,
		},
		rules: {
			...pluginReact.configs.recommended.rules,
			...pluginReactHooks.configs.recommended.rules,
			...pluginTurbo.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
			'react/prop-types': 'off', // Not needed with TypeScript
			'react-refresh/only-export-components': 'warn',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
);
