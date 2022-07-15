import { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';

export default function useDarkMode() {
	const { darkModeStatus, setDarkModeStatus } = useContext(ThemeContext);

	const themeStatus = darkModeStatus ? 'dark' : 'light';

	return { themeStatus, darkModeStatus, setDarkModeStatus };
}
