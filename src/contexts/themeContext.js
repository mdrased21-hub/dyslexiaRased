import React, { createContext, useLayoutEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import useDeviceScreen from '../hooks/useDeviceScreen';

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
	const deviceScreen = useDeviceScreen();
	const mobileDesign = deviceScreen?.width <= process.env.REACT_APP_MOBILE_BREAKPOINT_SIZE;

	const [darkModeStatus, setDarkModeStatus] = useState(
		localStorage.getItem('facit_darkModeStatus')
			? localStorage.getItem('facit_darkModeStatus') === 'true'
			: process.env.REACT_APP_DARK_MODE === 'true',
	);

	useLayoutEffect(() => {
		localStorage.setItem('facit_darkModeStatus', darkModeStatus.toString());
	}, [darkModeStatus]);

	const [fullScreenStatus, setFullScreenStatus] = useState(false);

	const [leftMenuStatus, setLeftMenuStatus] = useState(false);
	const [rightMenuStatus, setRightMenuStatus] = useState(false);
	const [asideStatus, setAsideStatus] = useState(
		localStorage.getItem('facit_asideStatus')
			? localStorage.getItem('facit_asideStatus') === 'true'
			: deviceScreen?.width >= process.env.REACT_APP_ASIDE_MINIMIZE_BREAKPOINT_SIZE,
	);
	useLayoutEffect(() => {
		localStorage.setItem('facit_asideStatus', asideStatus?.toString());
	}, [asideStatus]);

	const [rightPanel, setRightPanel] = useState(false);

	useLayoutEffect(() => {
		if (deviceScreen?.width >= process.env.REACT_APP_ASIDE_MINIMIZE_BREAKPOINT_SIZE) {
			if (localStorage.getItem('facit_asideStatus') === 'true') setAsideStatus(true);
			setLeftMenuStatus(false);
			setRightMenuStatus(false);
		}
		return () => {
			setAsideStatus(false);
		};
	}, [deviceScreen.width]);

	const values = useMemo(
		() => ({
			mobileDesign,
			darkModeStatus,
			setDarkModeStatus,
			fullScreenStatus,
			setFullScreenStatus,
			asideStatus,
			setAsideStatus,
			leftMenuStatus,
			setLeftMenuStatus,
			rightMenuStatus,
			setRightMenuStatus,
			rightPanel,
			setRightPanel,
		}),
		[
			asideStatus,
			darkModeStatus,
			fullScreenStatus,
			leftMenuStatus,
			mobileDesign,
			rightMenuStatus,
			rightPanel,
		],
	);

	return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
ThemeContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ThemeContext;
