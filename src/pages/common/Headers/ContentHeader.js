import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import Navigation from '../../../layout/Navigation/Navigation';
import { componentsMenu } from '../../../menu';
import useDeviceScreen from '../../../hooks/useDeviceScreen';
import CommonHeaderRight from './CommonHeaderRight';

const ContentHeader = () => {
	const deviceScreen = useDeviceScreen();

	return (
		<Header>
			<HeaderLeft>
				<Navigation
					menu={componentsMenu.content.subMenu}
					id={`${componentsMenu.content.id}top-menu`}
					horizontal={deviceScreen?.width >= process.env.REACT_APP_MOBILE_BREAKPOINT_SIZE}
				/>
			</HeaderLeft>
			<CommonHeaderRight />
		</Header>
	);
};

export default ContentHeader;
