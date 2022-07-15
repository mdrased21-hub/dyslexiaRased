import '../src/styles/styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { ThemeContextProvider } from '../src/contexts/themeContext';

const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');

addDecorator(jsxDecorator);

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	html: {
		prettier: {
			tabWidth: 2,
			useTabs: true,
		},
	},
};

export const decorators = [
	(Story) => (
		<ThemeContextProvider>
			<Router>
				<Story />
			</Router>
		</ThemeContextProvider>
	),
];
