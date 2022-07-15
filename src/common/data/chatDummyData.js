import USERS from './userDummyData';

const CHLOE_VS_JOHN = [
	{
		id: 1,
		messages: [
			{
				id: 1,
				message: 'Has everyone screened the new edit? Any thoughts?',
			},
		],
		user: USERS.CHLOE,
	},
	{
		id: 2,
		messages: [
			{
				id: 2,
				message: "Ah, can't wait to hear your notes!",
			},
		],
		user: USERS.JOHN,
		isReply: true,
	},
	{
		id: 3,
		messages: [
			{
				id: 3,
				message: 'Just watched it.',
			},
			{
				id: 4,
				message: 'The driving scenes are working well.',
			},
			{
				id: 5,
				message:
					'I think the new sequence made a huge improvement with the pacing and flow',
			},
		],
		user: USERS.CHLOE,
	},
	{
		id: 4,
		messages: [
			{
				id: 6,
				message: "Ella, I'd like to finesse the night scenes before color grading.",
			},
		],
		user: USERS.JOHN,
		isReply: true,
	},
	{
		id: 5,
		messages: [
			{
				id: 7,
				message: 'Agreed! The ending is perfect! 🎉',
			},
			{
				id: 8,
				message: "I think it's really starting to shine.",
			},
		],
		user: USERS.CHLOE,
	},
];

const GRACE_VS_JOHN = [
	{
		id: 1,
		messages: [
			{
				id: 1,
				message: 'Fusce maximus vulputate lorem, non eleifend ex egestas vel',
			},
			{
				id: 2,
				message:
					'Morbi posuere, sapien a convallis auctor, lorem lacus aliquet metus, in laoreet orci nisl quis metus',
			},
		],
		user: USERS.JOHN,
		isReply: true,
	},
	{
		id: 2,
		messages: [
			{
				id: 3,
				message: 'Praesent pulvinar.',
			},
			{
				id: 4,
				message:
					'Leo sit amet dapibus sodales, metus ex tristique nibh, id elementum mauris dolor vitae enim',
			},
		],
		user: USERS.GRACE,
	},
	{
		id: 3,
		messages: [
			{
				id: 5,
				message: 'Ut auctor odio id ante cursus luctus',
			},
		],
		user: USERS.JOHN,
		isReply: true,
	},
	{
		id: 4,
		messages: [
			{
				id: 7,
				message: 'Curabitur ornare mattis urna euismod molestie.',
			},
		],
		user: USERS.GRACE,
	},
];

const JANE_VS_JOHN = [
	{
		id: 1,
		messages: [
			{
				id: 1,
				message: 'Cras eu lobortis ex, id aliquam sem.',
			},
		],
		user: USERS.JANE,
	},
	{
		id: 2,
		messages: [
			{
				id: 2,
				message:
					'Maecenas pellentesque turpis vel ex sollicitudin, eget dapibus mi interdum.',
			},
		],
		user: USERS.JOHN,
		isReply: true,
	},
	{
		id: 3,
		messages: [
			{
				id: 3,
				message: 'Mauris id ante commodo eros viverra efficitur vel et elit.',
			},
		],
		user: USERS.JANE,
	},
	{
		id: 4,
		messages: [
			{
				id: 4,
				message: 'Nullam lobortis cursus purus ornare dignissim.',
			},
		],
		user: USERS.JOHN,
		isReply: true,
	},
	{
		id: 5,
		messages: [
			{
				id: 5,
				message: 'Nunc odio nulla, mattis ac nisl sed, eleifend cursus neque.',
			},
			{
				id: 6,
				message:
					'Nulla sollicitudin consectetur arcu, sit amet rutrum felis tincidunt non.',
			},
		],
		user: USERS.JANE,
	},
];

const RYAN_VS_JOHN = [
	{
		id: 1,
		messages: [
			{
				id: 1,
				message: 'Nullam faucibus mauris sed fermentum posuere.',
			},
		],
		user: USERS.RYAN,
	},
	{
		id: 2,
		messages: [
			{
				id: 2,
				message: 'Quisque efficitur semper sem, ac tempor ex.',
			},
		],
		user: USERS.JOHN,
		isReply: true,
	},
	{
		id: 3,
		messages: [
			{
				id: 3,
				message: 'Aenean erat tellus, pretium sed venenatis ac, pulvinar quis odio.',
			},
			{
				id: 4,
				message: 'Quisque cursus feugiat orci, id aliquet nulla congue et.',
			},
			{
				id: 5,
				message:
					'Nulla facilisi. Nam ac blandit ex, nec dignissim leo. Etiam mauris orci, malesuada ac vehicula in, tempor ac eros. ',
			},
		],
		user: USERS.RYAN,
	},
	{
		id: 4,
		messages: [
			{
				id: 6,
				message:
					'Donec luctus felis justo, eget tempus ipsum fermentum ac. Quisque egestas tincidunt eros id convallis. Sed tincidunt risus odio, a sodales ligula rutrum vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus volutpat magna commodo erat maximus, eget bibendum libero aliquet. Suspendisse nec condimentum sem. Morbi rutrum dictum felis, vitae maximus elit hendrerit viverra.',
			},
		],
		user: USERS.JOHN,
		isReply: true,
	},
	{
		id: 5,
		messages: [
			{
				id: 7,
				message: 'Aliquam vulputate dolor quis ipsum mollis rutrum.',
			},
			{
				id: 8,
				message: 'Vivamus fermentum dui sit amet orci interdum pulvinar.',
			},
		],
		user: USERS.RYAN,
	},
];

const ELLA_VS_JOHN = [
	{
		id: 1,
		messages: [
			{
				id: 1,
				message:
					'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
			},
		],
		user: USERS.ELLA,
	},
	{
		id: 2,
		messages: [
			{
				id: 2,
				message:
					'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer lorem erat, pharetra eget tempor sit amet, ullamcorper sed urna. Pellentesque lacinia euismod tellus, eu eleifend felis. Nunc suscipit, nisl ac fringilla vestibulum, lectus erat elementum odio, quis tristique urna est a nunc.',
			},
		],
		user: USERS.JOHN,
		isReply: true,
	},
	{
		id: 3,
		messages: [
			{
				id: 3,
				message:
					'Cras at libero et nunc aliquam fermentum vel sed mauris. Cras id nisl vitae purus tincidunt suscipit. Quisque sagittis, enim quis volutpat luctus, eros leo commodo arcu, sit amet faucibus massa nunc at nisl. Praesent fringilla malesuada porttitor. Proin vehicula velit sem, ut consequat eros gravida quis.',
			},
			{
				id: 4,
				message: 'Pellentesque a mauris magna.',
			},
			{
				id: 5,
				message: 'In lectus dolor, hendrerit dictum viverra vel, consectetur eu arcu.',
			},
		],
		user: USERS.ELLA,
	},
	{
		id: 4,
		messages: [
			{
				id: 6,
				message: 'Donec gravida.',
			},
		],
		user: USERS.JOHN,
		isReply: true,
	},
	{
		id: 5,
		messages: [
			{
				id: 7,
				message: 'Velit nec.',
			},
			{
				id: 8,
				message: 'Eleifend sagittis!',
			},
		],
		user: USERS.ELLA,
	},
];

const SAM_VS_JOHN = [
	{
		id: 1,
		messages: [
			{
				id: 1,
				message: 'Fusce sed efficitur ligula, vel iaculis ipsum.',
			},
		],
		user: USERS.SAM,
	},
	{
		id: 2,
		messages: [
			{
				id: 2,
				message:
					'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			},
		],
		user: USERS.JOHN,
		isReply: true,
	},
	{
		id: 3,
		messages: [
			{
				id: 3,
				message: 'Aenean nec magna non eros tempor ornare ac a dolor.',
			},
			{
				id: 4,
				message: 'Integer scelerisque a libero ac convallis.',
			},
			{
				id: 5,
				message: 'Morbi hendrerit nibh eget semper malesuada.',
			},
		],
		user: USERS.SAM,
	},
	{
		id: 4,
		messages: [
			{
				id: 6,
				message: 'Nullam viverra mauris in viverra semper.',
			},
			{
				id: 7,
				message: 'Donec sodales justo orci, at iaculis lacus maximus nec.',
			},
			{
				id: 8,
				message: 'Pellentesque sollicitudin urna at tortor egestas facilisis.',
			},
		],
		user: USERS.JOHN,
		isReply: true,
	},
	{
		id: 5,
		messages: [
			{
				id: 9,
				message: 'Pellentesque a massa at magna laoreet luctus sed dignissim erat.',
			},
		],
		user: USERS.SAM,
	},
];

const CHATS = {
	ELLA_VS_JOHN,
	GRACE_VS_JOHN,
	JANE_VS_JOHN,
	RYAN_VS_JOHN,
	CHLOE_VS_JOHN,
	SAM_VS_JOHN,
};

export default CHATS;
