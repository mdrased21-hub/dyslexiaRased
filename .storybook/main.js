module.exports = {
	staticDirs: ['../public'],
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-links',
		'@storybook/preset-create-react-app',
		'@storybook/addon-a11y',
		'@whitespace/storybook-addon-html',
		'@storybook/addon-knobs',
	],
	core: {
		builder: 'webpack5',
	},
};
