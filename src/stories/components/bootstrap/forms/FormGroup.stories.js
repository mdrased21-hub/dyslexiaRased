import React from 'react';

import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Label from '../../../../components/bootstrap/forms/Label';
import Input from '../../../../components/bootstrap/forms/Input';
import FormText from '../../../../components/bootstrap/forms/FormText';
import * as InputStories from './Input.stories';

export default {
	title: 'Forms/<FormGroup>/Advance',
	component: FormGroup,
	subcomponents: { Label, Input, FormText },
	argTypes: {
		tag: { control: { type: 'inline-radio' } },
		className: { control: { type: 'text' } },
		isFloating: { control: { type: 'boolean' } },
		children: { control: false },
		id: { control: false },
		label: { control: false },
		isHiddenLabel: { control: false },
		size: { control: false },
		isColForLabel: { control: false },
		labelClassName: { control: false },
		childWrapperClassName: { control: false },
		formText: { control: false },
	},
};

const Template = (args) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<FormGroup {...args}>
			<Label htmlFor='storybook--name'>Name</Label>
			<Input
				id='storybook--name'
				placeholder='John Doe'
				ariaDescribedby='storybook--name__text'
			/>
			<FormText id='storybook--name__text'>This is a advance form group</FormText>
		</FormGroup>
	);
};

const TemplateFloat = (args) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<FormGroup {...args}>
			<Input
				id='storybook--name'
				placeholder='John Doe'
				ariaDescribedby='storybook--name__text'
			/>
			<Label htmlFor='storybook--name'>Name</Label>
			<FormText id='storybook--name__text'>This is a advance form group</FormText>
		</FormGroup>
	);
};

const TemplateHidden = (args) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<FormGroup {...args}>
			<Label htmlFor='storybook--name' isHidden>
				Name
			</Label>
			<Input
				id='storybook--name'
				placeholder='John Doe'
				ariaDescribedby='storybook--name__text'
			/>
			<FormText id='storybook--name__text'>This is a advance form group</FormText>
		</FormGroup>
	);
};

const TemplateSizeSm = (args) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<FormGroup {...args}>
			<Label htmlFor='storybook--name'>Name</Label>
			<Input
				id='storybook--name'
				placeholder='John Doe'
				ariaDescribedby='storybook--name__text'
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...InputStories.Small.args}
			/>
			<FormText id='storybook--name__text'>This is a advance form group</FormText>
		</FormGroup>
	);
};

const TemplateSizeLg = (args) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<FormGroup {...args}>
			<Label htmlFor='storybook--name'>Name</Label>
			<Input
				id='storybook--name'
				placeholder='John Doe'
				ariaDescribedby='storybook--name__text'
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...InputStories.Large.args}
			/>
			<FormText id='storybook--name__text'>This is a advance form group</FormText>
		</FormGroup>
	);
};

const TemplateCol = (args) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<FormGroup {...args}>
			<Label htmlFor='storybook--name' className='col-sm-2' isColForLabel>
				Name
			</Label>
			<div className='col-sm-10'>
				<Input
					id='storybook--name'
					placeholder='John Doe'
					ariaDescribedby='storybook--name__text'
				/>
				<FormText id='storybook--name__text'>This is a advance form group</FormText>
			</div>
		</FormGroup>
	);
};

export const Default = Template.bind({});

export const Float = TemplateFloat.bind({});
Float.args = {
	isFloating: true,
};

export const HiddenLabel = TemplateHidden.bind({});

export const SizeSm = TemplateSizeSm.bind({});
export const SizeLg = TemplateSizeLg.bind({});

export const ColUse = TemplateCol.bind({});
ColUse.args = {
	className: 'row',
};
