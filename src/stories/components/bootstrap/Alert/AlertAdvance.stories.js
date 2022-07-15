import React from 'react';

import Alert, { AlertHeading } from '../../../../components/bootstrap/Alert';
import * as AlertStories from './Alert.stories';

export default {
	title: `Components/<Alert>`,
	component: Alert,
	argTypes: {
		...AlertStories.default.argTypes,
		alertHeadingChildren: {
			name: 'children',
			control: { type: 'text' },
			table: {
				category: 'AlertHeading',
				type: { summary: 'string' },
			},
		},
		alertHeadingTag: {
			name: 'tag',
			control: { type: 'text' },
			table: {
				category: 'AlertHeading',
				type: { summary: 'h1, h2, h3, h4, h5, h6, etc.' },
			},
		},
		alertHeadingClassName: {
			name: 'className',
			control: { type: 'text' },
			table: {
				category: 'AlertHeading',
				type: { summary: 'string' },
			},
		},
	},
};

const TemplateAlert = ({
	// eslint-disable-next-line react/prop-types
	alertHeadingTag,
	// eslint-disable-next-line react/prop-types
	alertHeadingClassName,
	// eslint-disable-next-line react/prop-types
	alertHeadingChildren,
	...args
}) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Alert {...args}>
		<AlertHeading tag={alertHeadingTag} className={alertHeadingClassName}>
			{alertHeadingChildren}
		</AlertHeading>
		{args.children}
	</Alert>
);

export const Advance = TemplateAlert.bind({});
Advance.args = {
	alertHeadingChildren: 'Well Done!',
	children: 'A simple alert—check it out!',
	icon: 'Info',
};
