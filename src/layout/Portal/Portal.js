import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import ThemeContext from '../../contexts/themeContext';

const Portal = ({ id, children }) => {
	const { fullScreenStatus } = useContext(ThemeContext);

	const mount = document.getElementById(id);
	if (fullScreenStatus) return children;
	return ReactDOM.createPortal(children, mount);
};
Portal.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
};
Portal.defaultProps = {
	id: 'portal-root',
};

export default Portal;
