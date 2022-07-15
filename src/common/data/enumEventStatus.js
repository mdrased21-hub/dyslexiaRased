import COLORS from './enumColors';

const EVENT_STATUS = {
	APPROVED: { name: 'Approved', color: COLORS.SUCCESS.name },
	PENDING: { name: 'Pending', color: COLORS.WARNING.name },
	CANCELED: { name: 'Canceled', color: COLORS.DANGER.name },
	REJECTED: { name: 'Rejected', color: COLORS.DARK.name },
};
export default EVENT_STATUS;
