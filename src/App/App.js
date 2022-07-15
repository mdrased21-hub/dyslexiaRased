import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'react-jss';
import { ReactNotifications } from 'react-notifications-component';
import { useFullscreen } from 'react-use';
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { TourProvider } from '@reactour/tour';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/themeContext';

import Aside from '../layout/Aside/Aside';
import Wrapper from '../layout/Wrapper/Wrapper';
import Portal from '../layout/Portal/Portal';
import { demoPages, dmsMenu, dmsMenu2, dmsStudentMenu } from '../menu';
import { Toast, ToastContainer } from '../components/bootstrap/Toasts';
import useDarkMode from '../hooks/useDarkMode';
import COLORS from '../common/data/enumColors';
import { getOS } from '../helpers/helpers';
import steps, { styles } from '../steps';
import { auth, db } from '../firebase-config';
import { setUser } from '../userSlice';

const ProtectedRoutes = ({ isAuth }) => {
	return isAuth ? <Outlet /> : <Navigate to={demoPages.login.path} />;
};
ProtectedRoutes.propTypes = {
	isAuth: PropTypes.bool.isRequired,
};

const ProtectedLoginRoutes = ({ isAuth, role }) => {
	return !isAuth ? (
		<Outlet />
	) : (
		<>
			{/* eslint-disable-next-line react/jsx-no-useless-fragment */}
			{role === 'admin' ? (
				<Navigate to={dmsMenu.studentList.path} />
			) : (
				<Navigate to={dmsStudentMenu.quizList.path} />
			)}
		</>
	);
};
ProtectedLoginRoutes.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	role: PropTypes.string.isRequired,
};

const ProtectedAdminRoutes = ({ isAuth, role }) => {
	return isAuth ? (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>{role === 'admin' ? <Outlet /> : <Navigate to={demoPages.page404.path} />}</>
	) : (
		<Navigate to={demoPages.login.path} />
	);
};
ProtectedAdminRoutes.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	role: PropTypes.string.isRequired,
};

const ProtectedStudentRoutes = ({ isAuth, role }) => {
	return isAuth ? (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>{role === 'student' ? <Outlet /> : <Navigate to={demoPages.page404.path} />}</>
	) : (
		<Navigate to={demoPages.login.path} />
	);
};
ProtectedStudentRoutes.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	role: PropTypes.string.isRequired,
};

const App = () => {
	getOS();

	/**
	 * Dark Mode
	 */
	const { themeStatus, darkModeStatus } = useDarkMode();
	const theme = {
		theme: themeStatus,
		primary: COLORS.PRIMARY.code,
		secondary: COLORS.SECONDARY.code,
		success: COLORS.SUCCESS.code,
		info: COLORS.INFO.code,
		warning: COLORS.WARNING.code,
		danger: COLORS.DANGER.code,
		dark: COLORS.DARK.code,
		light: COLORS.LIGHT.code,
	};

	useEffect(() => {
		if (darkModeStatus) {
			document.documentElement.setAttribute('theme', 'dark');
		}
		return () => {
			document.documentElement.removeAttribute('theme');
		};
	}, [darkModeStatus]);

	/**
	 * Full Screen
	 */
	const { fullScreenStatus, setFullScreenStatus } = useContext(ThemeContext);
	const ref = useRef(null);
	useFullscreen(ref, fullScreenStatus, {
		onClose: () => setFullScreenStatus(false),
	});

	/**
	 * Modern Design
	 */
	useLayoutEffect(() => {
		if (process.env.REACT_APP_MODERN_DESGIN === 'true') {
			document.body.classList.add('modern-design');
		} else {
			document.body.classList.remove('modern-design');
		}
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		auth.onAuthStateChanged((data) => {
			if (data) {
				checkUser(data);
			} else {
				dispatch(
					setUser({
						id: '',
						name: '',
						subName: '',
						imageUrl: '',
						role: '',
					}),
				);
				setIsAuth(false);
				navigate(`/${demoPages.login.path}`);
			}
		});
		const checkUser = async (data) => {
			const adminData = await getDocs(collection(db, 'admin'));
			const adminDocs = adminData.docs; // eslint-disable-line prefer-destructuring
			const isAdmin = adminDocs.filter((doc) => doc.id === data.uid)[0];
			if (isAdmin) {
				const userData = isAdmin.data();
				dispatch(
					setUser({
						id: isAdmin.id,
						name: userData.name,
						subName: userData.schoolName,
						imageUrl: userData.imageUrl,
						role: 'admin',
					}),
				);
				setIsAuth(true);
				return;
			}

			const studentData = await getDocs(collection(db, 'students'));
			const studentDocs = studentData.docs; // eslint-disable-line prefer-destructuring
			const isStudent = studentDocs.filter((doc) => doc.id === data.uid)[0];
			if (isStudent) {
				const userData = isStudent.data();
				dispatch(
					setUser({
						id: isStudent.id,
						name: userData.name,
						subName: userData.studentNo,
						imageUrl: userData.imageUrl,
						role: 'student',
					}),
				);
				setIsAuth(true);
				return;
			}

			navigate(`/${demoPages.login.path}`);
			setIsAuth(false);
		};
	}, [dispatch, navigate]);

	return (
		<ThemeProvider theme={theme}>
			<ToastProvider components={{ ToastContainer, Toast }}>
				<TourProvider
					steps={steps}
					styles={styles}
					showNavigation={false}
					showBadge={false}>
					<div
						ref={ref}
						className='app'
						style={{
							backgroundColor: fullScreenStatus && 'var(--bs-body-bg)',
							zIndex: fullScreenStatus && 1,
							overflow: fullScreenStatus && 'scroll',
						}}>
						<Routes>
							<Route exact path='/' element={<Navigate replace to='/login' />} />

							<Route
								element={
									<ProtectedLoginRoutes isAuth={isAuth} role={user.data.role} />
								}>
								<Route path={demoPages.login.path} />
							</Route>

							<Route
								element={
									<ProtectedAdminRoutes isAuth={isAuth} role={user.data.role} />
								}>
								<Route path={dmsMenu.studentList.path} element={<Aside />} />
								<Route path={dmsMenu2.registerStudent.path} element={<Aside />} />
							</Route>

							<Route
								element={
									<ProtectedStudentRoutes isAuth={isAuth} role={user.data.role} />
								}>
								<Route path={`${dmsMenu2.quiz.path}/:id`} element={<Aside />} />
							</Route>

							<Route element={<ProtectedRoutes isAuth={isAuth} />}>
								<Route path={dmsStudentMenu.quizList.path} element={<Aside />} />
								<Route path={dmsMenu2.studentDetails.path} element={<Aside />} />
								<Route
									path={`${dmsMenu2.studentDetails.path}/:id`}
									element={<Aside />}
								/>
								<Route
									path={`${dmsMenu2.editStudent.path}/:id`}
									element={<Aside />}
								/>
								<Route path={dmsMenu.changePassword.path} element={<Aside />} />
							</Route>
						</Routes>
						<Wrapper />
					</div>
					<Portal id='portal-notification'>
						<ReactNotifications />
					</Portal>
				</TourProvider>
			</ToastProvider>
		</ThemeProvider>
	);
};

export default App;
