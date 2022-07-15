import React, { useEffect, useState } from 'react';

import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';
import Button from '../../../../components/bootstrap/Button';
import Icon from '../../../../components/icon/Icon';
import Badge from '../../../../components/bootstrap/Badge';

export default {
	title: `Components/<Dropdown>`,
	component: Dropdown,
	subcomponents: { DropdownToggle, DropdownMenu, DropdownItem },
	argTypes: {
		isOpen: { control: { type: 'boolean' }, table: { category: 'Dropdown' } },
		setIsOpen: { table: { category: 'Dropdown' } },
		direction: { control: { type: 'inline-radio' }, table: { category: 'Dropdown' } },
		isButtonGroup: { control: { type: 'boolean' }, table: { category: 'Dropdown' } },
		children: { table: { category: 'Dropdown' } },
		className: { table: { category: 'Dropdown' } },

		/**
		 * DropdownToggle
		 */
		hasIconDropdownToggle: {
			table: {
				category: 'DropdownToggle',
				type: {
					summary: 'bool',
				},
				defaultValue: {
					summary: 'true',
				},
			},
			control: { type: 'boolean' },
			name: 'hasIcon',
		},
		childrenDropdownToggle: {
			name: 'children',
			type: { required: true },
			table: {
				category: 'DropdownToggle',
				type: {
					summary: 'node',
					detail: `String, HTML or React Component (<Component {...props} />)`,
				},
			},
		},

		/**
		 * DropdownMenu
		 */
		isAlignmentEndDropdownMenu: {
			table: {
				category: 'DropdownMenu',
				type: {
					summary: 'bool',
				},
				defaultValue: {
					summary: 'false',
				},
			},
			control: { type: 'boolean' },
			name: 'isAlignmentEnd',
		},
		breakpointDropdownMenu: {
			table: {
				category: 'DropdownMenu',
				type: {
					summary: "'sm', 'md', 'lg', 'xl', 'xxl'",
				},
			},
			control: { type: 'inline-radio', options: ['sm', 'md', 'lg', 'xl', 'xxl'] },
			name: 'breakpoint',
		},
		sizeDropdownMenu: {
			table: {
				category: 'DropdownMenu',
				type: {
					summary: "'sm', 'md', 'lg'",
				},
			},
			control: { type: 'inline-radio', options: ['sm', 'md', 'lg'] },
			name: 'size',
		},
		classNameDropdownMenu: {
			table: {
				category: 'DropdownMenu',
				type: {
					summary: 'string',
				},
			},
			name: 'className',
		},
		childrenDropdownMenu: {
			table: {
				category: 'DropdownMenu',
				type: {
					summary: 'node',
				},
			},
			control: { type: 'array' },
			name: 'children',
		},

		/**
		 * DropdownItem
		 */
		childrenDropdownItem: { table: { category: 'DropdownItem' }, name: 'children' },
		isHeaderDropdownItem: {
			table: {
				category: 'DropdownItem',
				type: {
					summary: 'bool',
				},
				defaultValue: {
					summary: 'false',
				},
			},
			control: { type: 'boolean' },
			name: 'isHeader',
		},
		isDividerDropdownItem: {
			table: {
				category: 'DropdownItem',
				type: {
					summary: 'bool',
				},
				defaultValue: {
					summary: 'false',
				},
			},
			control: { type: 'boolean' },
			name: 'isDivider',
		},
		isTextDropdownItem: {
			table: {
				category: 'DropdownItem',
				type: {
					summary: 'bool',
				},
				defaultValue: {
					summary: 'false',
				},
			},
			control: { type: 'boolean' },
			name: 'isText',
		},
	},
	args: {
		childrenDropdownToggle: (
			<Button color='primary' isLight icon='Bolt'>
				Example Dropdown Menu
			</Button>
		),
		childrenDropdownItem: 'Editable Item',
		hasIconDropdownToggle: true,
	},
};

export const DropdownTemplate = ({
	/* eslint-disable react/prop-types */
	childrenDropdownToggle,
	hasIconDropdownToggle,
	isAlignmentEndDropdownMenu,
	breakpointDropdownMenu,
	sizeDropdownMenu,
	classNameDropdownMenu,
	childrenDropdownMenu,
	childrenDropdownItem,
	isHeaderDropdownItem,
	isDividerDropdownItem,
	isTextDropdownItem,
	/* eslint-enable react/prop-types */
	...args
}) => {
	const [state, setState] = useState(true);
	useEffect(() => {
		setState(args.isOpen);
		return () => {};
	}, [args.isOpen]);

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Dropdown {...args} isOpen={state} setIsOpen={() => setState(!state)}>
			<DropdownToggle hasIcon={hasIconDropdownToggle}>
				{childrenDropdownToggle}
			</DropdownToggle>
			<DropdownMenu
				className={classNameDropdownMenu}
				size={sizeDropdownMenu}
				breakpoint={breakpointDropdownMenu}
				isAlignmentEnd={isAlignmentEndDropdownMenu}>
				<DropdownItem
					isHeader={isHeaderDropdownItem}
					isDivider={isDividerDropdownItem}
					isText={isTextDropdownItem}>
					{childrenDropdownItem}
				</DropdownItem>
				<DropdownItem isHeader>Sample Header</DropdownItem>
				<DropdownItem isDivider />
				<DropdownItem isText>This is a sample text</DropdownItem>
				<DropdownItem>
					<a href='/'>
						<div className='col text-nowrap overflow-hidden text-overflow-ellipsis'>
							<Icon icon='Send' />
							Sample Link
						</div>
						<div className='col-auto'>
							<Badge>2</Badge>
						</div>
					</a>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};
DropdownTemplate.storyName = 'Default';
