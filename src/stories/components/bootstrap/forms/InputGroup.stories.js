import React from 'react';

import InputGroup, { InputGroupText } from '../../../../components/bootstrap/forms/InputGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import Select from '../../../../components/bootstrap/forms/Select';
import Textarea from '../../../../components/bootstrap/forms/Textarea';
import Checks from '../../../../components/bootstrap/forms/Checks';
import Button from '../../../../components/bootstrap/Button';
import {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';

export default {
	title: 'Forms/<InputGroup>',
	component: InputGroup,
	subcomponents: { InputGroupText, Input, Select, Textarea },
	argTypes: {
		size: { control: { type: 'inline-radio', options: [null, 'sm', 'lg'] } },
	},
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <InputGroup {...args} />;
};

export const Start = Template.bind({});
Start.args = {
	children: [<InputGroupText>Text</InputGroupText>, <Input ariaLabel='Input' />],
};

export const End = Template.bind({});
End.args = {
	children: [<Input ariaLabel='Input' />, <InputGroupText>Text</InputGroupText>],
};

export const Multiple = Template.bind({});
Multiple.args = {
	children: [
		<InputGroupText>Start</InputGroupText>,
		<Input ariaLabel='First input' />,
		<InputGroupText>Center</InputGroupText>,
		<Input ariaLabel='Second input' />,
		<InputGroupText>End</InputGroupText>,
	],
};

export const WithChecks = Template.bind({});
WithChecks.args = {
	children: [
		<InputGroupText tag='div' id='addon-wrapping'>
			<Checks id='exampleInputCheck' aria-label='Checkbox for following text input' />
		</InputGroupText>,
		<Input
			id='exampleInput'
			placeholder='Username'
			ariaLabel='Username'
			ariaDescribedby='addon-wrapping'
			autoComplete='username'
		/>,
		<InputGroupText>End</InputGroupText>,
	],
};

export const WithButton = Template.bind({});
WithButton.args = {
	children: [
		<Button isOutline color='primary' id='button-addon1'>
			Button
		</Button>,
		<Input
			placeholder=''
			ariaLabel='Example text with button addon'
			ariaDescribedby='button-addon1'
		/>,
	],
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
	children: [
		<DropdownToggle>
			<Button color='primary' isOutline hoverShadow='sm'>
				Dropdown
			</Button>
		</DropdownToggle>,
		<DropdownMenu>
			<DropdownItem>
				<a href='/'>Link Item</a>
			</DropdownItem>
		</DropdownMenu>,
		<Input placeholder='' ariaLabel='Text input with dropdown button' />,
	],
};

export const Custom = Template.bind({});
Custom.args = {
	children: [
		<Input type='file' />,
		<Button isOutline color='dark' icon='CloudUpload'>
			Upload
		</Button>,
	],
};
