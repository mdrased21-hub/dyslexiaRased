import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Brand from '../Brand/Brand';
import Navigation from '../Navigation/Navigation';
import User from '../User/User';
import { dmsMenu, dmsStudentMenu } from '../../menu';
import ThemeContext from '../../contexts/themeContext';

import Tooltips from '../../components/bootstrap/Tooltips';
import useAsideTouch from '../../hooks/useAsideTouch';

const Aside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);

	const { asideStyle, touchStatus, hasTouchButton, asideWidthWithSpace, x } = useAsideTouch();

	const isModernDesign = process.env.REACT_APP_MODERN_DESGIN === 'true';

	const constraintsRef = useRef(null);

	const user = useSelector((state) => state.user);

	return (
		<>
			<motion.aside
				style={asideStyle}
				className={classNames(
					'aside',
					{ open: asideStatus },
					{
						'aside-touch-bar': hasTouchButton && isModernDesign,
						'aside-touch-bar-close': !touchStatus && hasTouchButton && isModernDesign,
						'aside-touch-bar-open': touchStatus && hasTouchButton && isModernDesign,
					},
				)}>
				<div className='aside-head'>
					<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
				</div>
				<div className='aside-body'>
					{user.data.role === 'admin' ? (
						<Navigation menu={dmsMenu} id='aside-dashboard' />
					) : (
						<Navigation menu={dmsStudentMenu} id='aside-dashboard' />
					)}
				</div>
				<div className='aside-foot'>
					<User />
				</div>
			</motion.aside>
			{asideStatus && hasTouchButton && isModernDesign && (
				<>
					<motion.div className='aside-drag-area' ref={constraintsRef} />
					<Tooltips title='Toggle Aside' flip={['top', 'right']}>
						<motion.div
							className='aside-touch'
							drag='x'
							whileDrag={{ scale: 1.2 }}
							whileHover={{ scale: 1.1 }}
							dragConstraints={constraintsRef}
							// onDrag={(event, info) => console.log(info.point.x, info.point.y)}
							dragElastic={0.1}
							style={{ x, zIndex: 1039 }}
							onClick={() => x.set(x.get() === 0 ? asideWidthWithSpace : 0)}
						/>
					</Tooltips>
				</>
			)}
		</>
	);
};

export default Aside;
