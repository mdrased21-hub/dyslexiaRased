import COLORS from './enumColors';

const TAGS = {
	critical: {
		id: 'critical',
		color: COLORS.SUCCESS.name,
		title: 'Critical',
	},
	design: {
		id: 'design',
		color: COLORS.WARNING.name,
		title: 'Design',
	},
	code: {
		id: 'code',
		color: COLORS.INFO.name,
		title: 'Code',
	},
	review: {
		id: 'review',
		color: COLORS.INFO.name,
		title: 'Review',
	},
	revise: {
		id: 'revise',
		color: COLORS.SECONDARY.name,
		title: 'Revise',
	},
};

export function getTagsDataWithId(id) {
	return TAGS[Object.keys(TAGS).filter((f) => TAGS[f].id.toString() === id.toString())];
}

export default TAGS;
