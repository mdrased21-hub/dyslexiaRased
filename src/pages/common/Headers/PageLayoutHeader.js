import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import Navigation from '../../../layout/Navigation/Navigation';
import { layoutMenu } from '../../../menu';
import useDeviceScreen from '../../../hooks/useDeviceScreen';
import CommonHeaderRight from './CommonHeaderRight';

const PageLayoutHeader = () => {
	const deviceScreen = useDeviceScreen();
	return (
		<Header>
			<HeaderLeft>
				<Navigation
					menu={{
						...layoutMenu.pageLayout.subMenu,
						...layoutMenu.asideTypes.subMenu,
					}}
					id='header-top-menu'
					horizontal={deviceScreen?.width >= process.env.REACT_APP_MOBILE_BREAKPOINT_SIZE}
				/>
			</HeaderLeft>
			<CommonHeaderRight />
		</Header>
	);
};

export default PageLayoutHeader;
