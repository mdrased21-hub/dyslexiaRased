import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from './Avatar';
import useDarkMode from '../hooks/useDarkMode';

export const ChatListItem = ({
	src,
	srcSet,
	className,
	isOnline,
	color,
	size,
	name,
	surname,
	latestMessage,
	unreadMessage,
	isActive,
	lastSeenTime,
	...props
}) => {
	const { darkModeStatus } = useDarkMode();

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div className={classNames('col-12 cursor-pointer', className)} {...props}>
			<div
				className={classNames(
					'd-flex align-items-center',
					'p-3 rounded-2',
					'transition-base',
					{
						'bg-l25-info-hover': !darkModeStatus,
						'bg-lo50-info-hover': darkModeStatus,
						'bg-l10-info': !darkModeStatus && isActive,
						'bg-lo25-info': darkModeStatus && isActive,
					},
				)}>
				<ChatAvatar
					src={src}
					srcSet={srcSet}
					isOnline={isOnline}
					unreadMessage={unreadMessage}
					color={color}
					size={size}
					className='me-3'
				/>
				<div className='d-grid'>
					<div className='d-flex flex-wrap d-xxl-block'>
						<span className='fw-bold fs-5 me-3'>{`${name} ${surname}`}</span>
						{lastSeenTime && (
							<small
								className={classNames(
									'text-info fw-bold px-3 py-1 rounded-pill align-top text-nowrap',
									{
										'bg-l10-info': !darkModeStatus,
										'bg-lo25-info': darkModeStatus,
									},
								)}>
								{lastSeenTime}
							</small>
						)}
					</div>
					<div className='text-muted text-truncate'>{latestMessage}</div>
				</div>
			</div>
		</div>
	);
};
ChatListItem.propTypes = {
	src: PropTypes.string.isRequired,
	srcSet: PropTypes.string,
	className: PropTypes.string,
	isOnline: PropTypes.bool,
	color: PropTypes.string,
	size: PropTypes.number,
	name: PropTypes.string.isRequired,
	surname: PropTypes.string.isRequired,
	latestMessage: PropTypes.string,
	unreadMessage: PropTypes.number,
	isActive: PropTypes.bool,
	lastSeenTime: PropTypes.string,
};
ChatListItem.defaultProps = {
	srcSet: null,
	className: null,
	isOnline: false,
	color: 'primary',
	size: 64,
	latestMessage: null,
	unreadMessage: null,
	isActive: false,
	lastSeenTime: null,
};

export const ChatHeader = ({ to }) => {
	return (
		<>
			<strong className='me-2'>To:</strong>
			{to}
		</>
	);
};
ChatHeader.propTypes = {
	to: PropTypes.string.isRequired,
};

export const ChatMessages = ({ messages, isReply, ...props }) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div className='chat-messages' {...props}>
			{messages.map((i) => (
				<div
					key={i.id}
					className={classNames('chat-message', { 'chat-message-reply': isReply })}>
					{i.message}
				</div>
			))}
		</div>
	);
};
ChatMessages.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			message: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		}),
	).isRequired,
	isReply: PropTypes.bool,
};
ChatMessages.defaultProps = {
	isReply: false,
};

export const ChatAvatar = ({
	src,
	srcSet,
	className,
	color,
	unreadMessage,
	isOnline,
	size,
	...props
}) => {
	return (
		<div
			className={classNames('chat-avatar', className)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			<div className='position-relative'>
				{src && <Avatar srcSet={srcSet} src={src} size={size} color={color} />}
				{unreadMessage && (
					<span className='position-absolute top-15 start-85 translate-middle badge rounded-pill bg-danger'>
						{unreadMessage} <span className='visually-hidden'>unread messages</span>
					</span>
				)}
				{isOnline && (
					<span className='position-absolute top-85 start-85 translate-middle badge border border-2 border-light rounded-circle bg-success p-2'>
						<span className='visually-hidden'>Online user</span>
					</span>
				)}
			</div>
		</div>
	);
};
ChatAvatar.propTypes = {
	src: PropTypes.string,
	srcSet: PropTypes.string,
	className: PropTypes.string,
	color: PropTypes.string,
	unreadMessage: PropTypes.number,
	isOnline: PropTypes.bool,
	size: PropTypes.number,
};
ChatAvatar.defaultProps = {
	src: null,
	srcSet: null,
	className: null,
	color: null,
	unreadMessage: null,
	isOnline: false,
	size: 45,
};

export const ChatGroup = ({ isReply, messages, isOnline, color, user, ...props }) => {
	const _Avatar = (
		<ChatAvatar
			src={user.src}
			srcSet={user.srcSet}
			username={user.username}
			name={user.name}
			surname={user.surname}
			isOnline={user.isOnline}
			color={user.color}
		/>
	);
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div className={classNames('chat-group', { 'chat-group-reply': isReply })} {...props}>
			{!isReply && _Avatar}
			<ChatMessages messages={messages} isReply={isReply} />
			{isReply && _Avatar}
		</div>
	);
};
ChatGroup.propTypes = {
	isReply: PropTypes.bool,
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			message: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		}),
	).isRequired,
	isOnline: PropTypes.bool,
	color: PropTypes.string,
	user: PropTypes.shape({
		src: PropTypes.string,
		srcSet: PropTypes.string,
		username: PropTypes.string,
		name: PropTypes.string,
		surname: PropTypes.string,
		isOnline: PropTypes.bool,
		color: PropTypes.string,
	}).isRequired,
};
ChatGroup.defaultProps = {
	isReply: false,
	isOnline: false,
	color: null,
};

const Chat = ({ children, className }) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div className={classNames('chat-container', className)}>{children}</div>
	);
};
Chat.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
Chat.defaultProps = {
	className: null,
};

export default Chat;
