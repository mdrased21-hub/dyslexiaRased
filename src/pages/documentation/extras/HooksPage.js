import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import { componentsMenu } from '../../../menu';

const HookLink = ({ hook, path }) => {
	return (
		<a
			href={`https://github.com/streamich/react-use/blob/master/docs/${path || hook}.md`}
			target='_blank'
			rel='noreferrer'>
			{hook}
		</a>
	);
};
HookLink.propTypes = {
	hook: PropTypes.string.isRequired,
	path: PropTypes.string,
};
HookLink.defaultProps = {
	path: null,
};

const HooksPage = () => {
	return (
		<PageWrapper title={componentsMenu.hooks.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb list={[{ title: 'Hooks', to: '/hooks' }]} />
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Sensors'>
									<CardTitle>Sensors</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p className='lead'>
									"Sensor Hooks" listen to changes in some interface and force
									your components to be re-rendered with the new state, up-to-date
									state.
								</p>
								<ul>
									<li>
										<HookLink hook='useBattery' /> — tracks device battery
										state.
									</li>
									<li>
										<HookLink hook='useGeolocation' /> — tracks geo location
										state of user's device.
									</li>
									<li>
										<HookLink hook='useHover' /> and{' '}
										<HookLink hook='useHoverDirty' path='useHover' /> — tracks
										mouse hover state of some element
									</li>
									<li>
										<HookLink hook='useHash' /> — tracks location hash value.
									</li>
									<li>
										<HookLink hook='useIdle' /> — tracks whether user is being
										inactive.
									</li>
									<li>
										<HookLink hook='useIntersection' /> — tracks an HTML
										element's intersection.
									</li>
									<li>
										<HookLink hook='useKey' />, <HookLink hook='useKeyPress' />,{' '}
										<HookLink hook='useKeyboardJs' />, and{' '}
										<HookLink hook='useKeyPressEvent' /> — track keys.
									</li>
									<li>
										<HookLink hook='useLocation' /> and{' '}
										<HookLink hook='useSearchParam' /> — tracks page navigation
										bar location state.
									</li>
									<li>
										<HookLink hook='useLongPress' /> — tracks long press gesture
										of some element.
									</li>
									<li>
										<HookLink hook='useMedia' /> — tracks state of a CSS media
										query.
									</li>
									<li>
										<HookLink hook='useMediaDevices' /> — tracks state of
										connected hardware devices.
									</li>
									<li>
										<HookLink hook='useMotion' /> — tracks state of device's
										motion sensor.
									</li>
									<li>
										<HookLink hook='useMouse' /> and{' '}
										<HookLink hook='useMouseHovered' path='useMouse' /> — tracks
										state of mouse mouse position.
									</li>
									<li>
										<HookLink hook='useMouseWheel' /> — tracks deltaY of
										scrolled mouse wheel.
									</li>
									<li>
										<HookLink hook='useNetworkState' /> — tracks the state of
										browser's network connection.
									</li>
									<li>
										<HookLink hook='useOrientation' /> — tracks state of
										device's screen orientation.
									</li>
									<li>
										<HookLink hook='usePageLeave' /> — triggers when mouse
										leaves page boundaries.
									</li>
									<li>
										<HookLink hook='useScratch' /> — tracks mouse
										click-and-scrub state.
									</li>
									<li>
										<HookLink hook='useScroll' /> — tracks an HTML element's
										scroll position.
									</li>
									<li>
										<HookLink hook='useScrolling' /> — tracks whether HTML
										element is scrolling.
									</li>
									<li>
										<HookLink hook='useStartTyping' /> — detects when user
										starts typing.
									</li>
									<li>
										<HookLink hook='useWindowScroll' /> — tracks{' '}
										<code>Window</code> scroll position.
									</li>
									<li>
										<HookLink hook='useWindowSize' /> — tracks{' '}
										<code>Window</code> dimensions.
									</li>
									<li>
										<HookLink hook='useMeasure' /> and{' '}
										<HookLink hook='useSize' /> — tracks an HTML element's
										dimensions.
									</li>
									<li>
										<HookLink hook='createBreakpoint' /> — tracks{' '}
										<code>innerWidth</code>
									</li>
									<li>
										<HookLink hook='useScrollbarWidth' /> — detects browser's
										native scrollbars width.
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='DesktopMac'>
									<CardTitle>UI</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p className='lead'>
									"UI Hooks" allow you to control and subscribe to state changes
									of UI elements.
								</p>
								<ul>
									<li>
										<HookLink hook='useAudio' /> — plays audio and exposes its
										controls
									</li>
									<li>
										<HookLink hook='useClickAway' /> — triggers callback when
										user clicks outside target area
									</li>
									<li>
										<HookLink hook='useCss' /> — dynamically adjusts CSS.
									</li>
									<li>
										<HookLink hook='useDrop' /> and{' '}
										<HookLink hook='useDropArea' path='useDrop' /> — tracks
										file, link and copy-paste copy-paste drops.
									</li>
									<li>
										<HookLink hook='useFullscreen' /> — display an element or
										video full-screen.
									</li>
									<li>
										<HookLink hook='useSlider' /> — provides slide behavior over
										any HTML element.
									</li>
									<li>
										<HookLink hook='useSlider' /> — provides slide behavior over
										any HTML element.
									</li>
									<li>
										<HookLink hook='useVibrate' /> — provide physical feedback
										using the{' '}
										<a
											href='https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API'
											target='_blank'
											rel='noreferrer'>
											Vibration API
										</a>
										.
									</li>
									<li>
										<HookLink hook='useVideo' /> — plays video, tracks its
										state, and exposes playback controls.
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Animation'>
									<CardTitle>Animations</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p className='lead'>
									"Animation Hooks" usually interpolate numeric values over time.
								</p>
								<ul>
									<li>
										<HookLink hook='useRaf' /> — re-renders component on each{' '}
										<code>requestAnimationFrame</code>.
									</li>
									<li>
										<HookLink hook='useInterval' /> and{' '}
										<HookLink hook='useHarmonicIntervalFn' /> — re-renders
										component on a set interval using <code>setInterval</code>.
									</li>
									<li>
										<HookLink hook='useSpring' /> — interpolates number over
										time according to spring dynamics.
									</li>
									<li>
										<HookLink hook='useTimeout' /> — re-renders component after
										a timeout.
									</li>
									<li>
										<HookLink hook='useTimeoutFn' /> — calls given function
										after a timeout.
									</li>
									<li>
										<HookLink hook='useTween' /> — re-renders component, while
										tweening a number from 0 to 1.
									</li>
									<li>
										<HookLink hook='useUpdate' /> — returns a callback, which
										re-renders component when called.
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='FilterBAndW'>
									<CardTitle>Side-effects</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p className='lead'>
									"Side-effect Hooks" allow your app trigger various side-effects
									using browser's API.
								</p>
								<ul>
									<li>
										<HookLink hook='useAsync' />, <HookLink hook='useAsyncFn' />
										, and <HookLink hook='useAsyncRetry' /> — resolves an{' '}
										<code>async</code> function.
									</li>
									<li>
										<HookLink hook='useBeforeUnload' /> — shows browser alert
										when user try to reload or close the page.
									</li>
									<li>
										<HookLink hook='useCookie' /> — provides way to read, update
										and delete a cookie.
									</li>
									<li>
										<HookLink hook='useCopyToClipboard' /> — copies text to
										clipboard.
									</li>
									<li>
										<HookLink hook='useDebounce' /> — debounces a function.
									</li>
									<li>
										<HookLink hook='useError' /> — error dispatcher.
									</li>
									<li>
										<HookLink hook='useFavicon' /> — sets favicon of the page.
									</li>
									<li>
										<HookLink hook='useLocalStorage' /> — manages a value in{' '}
										<code>localStorage</code>.
									</li>
									<li>
										<HookLink hook='useLockBodyScroll' /> — lock scrolling of
										the body element.
									</li>
									<li>
										<HookLink hook='useRafLoop' /> — calls given function inside
										the RAF loop.
									</li>
									<li>
										<HookLink hook='useSessionStorage' /> — manages a value in
										<code>sessionStorage</code>.
									</li>
									<li>
										<HookLink hook='useThrottle' /> and{' '}
										<HookLink hook='useThrottleFn' path='useThrottle' /> —
										throttles a function.
									</li>
									<li>
										<HookLink hook='useTitle' /> — sets title of the page.
									</li>
									<li>
										<HookLink hook='usePermission' /> — query permission status
										for browser APIs.
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Shuffle'>
									<CardTitle>Lifecycle</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p className='lead'>
									"Lifecycle Hooks" modify and extend built-in React hooks or
									imitate React Class component lifecycle patterns.
								</p>
								<ul>
									<li>
										<HookLink hook='useEffectOnce' /> — a modified{' '}
										<a
											href='https://reactjs.org/docs/hooks-reference.html#useeffect'
											target='_blank'
											rel='noreferrer'>
											useEffect
										</a>{' '}
										hook that only runs once.
									</li>
									<li>
										<HookLink hook='useEvent' /> — subscribe to events.
									</li>
									<li>
										<HookLink hook='useLifecycles' /> — calls <code>mount</code>{' '}
										and <code>unmount</code> callbacks.
									</li>
									<li>
										<HookLink hook='useMountedState' /> and{' '}
										<HookLink hook='useUnmountPromise' /> — track if component
										is mounted.
									</li>
									<li>
										<HookLink hook='usePromise' /> — resolves promise only while
										component is mounted.
									</li>
									<li>
										<HookLink hook='useLogger' /> — logs in console as component
										goes through life-cycles.
									</li>
									<li>
										<HookLink hook='useMount' /> — calls <code>mount</code>{' '}
										callbacks.
									</li>
									<li>
										<HookLink hook='useUnmount' /> — calls <code>unmount</code>{' '}
										callbacks.
									</li>
									<li>
										<HookLink hook='useUpdateEffect' /> — run an{' '}
										<code>effect</code> only on updates.
									</li>
									<li>
										<HookLink hook='useIsomorphicLayoutEffect' /> —{' '}
										<code>useLayoutEffect</code> that does not show warning when
										server-side rendering.
									</li>
									<li>
										<HookLink hook='useDeepCompareEffect' />,{' '}
										<HookLink hook='useShallowCompareEffect' />, and
										<HookLink hook='useCustomCompareEffect' /> — run an{' '}
										<code>effect</code> depending on deep comparison of its
										dependencies
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='EditAttributes'>
									<CardTitle>State</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p className='lead'>
									"State Hooks" allow you to easily manage state of booleans,
									arrays, and maps.
								</p>
								<ul>
									<li>
										<HookLink hook='createMemo' /> — factory of memoized hooks.
									</li>
									<li>
										<HookLink hook='createReducer' /> — factory of reducer hooks
										with custom middleware.
									</li>
									<li>
										<HookLink hook='createReducerContext' /> and{' '}
										<HookLink hook='createStateContext' /> — factory of hooks
										for a sharing state between components.
									</li>
									<li>
										<HookLink hook='useDefault' /> — returns the default value
										when state is <code>null</code> or <code>undefined</code>.
									</li>
									<li>
										<HookLink hook='useGetSet' /> — returns state getter{' '}
										<code>get()</code> instead of raw state.
									</li>
									<li>
										<HookLink hook='useGetSetState' /> — as if{' '}
										<HookLink hook='useGetSet' /> and{' '}
										<HookLink hook='useSetState' /> had a baby.
									</li>
									<li>
										<HookLink hook='useLatest' /> — returns the latest state or
										props.
									</li>
									<li>
										<HookLink hook='usePrevious' /> — returns the previous state
										or props.
									</li>
									<li>
										<HookLink hook='usePreviousDistinct' /> — like{' '}
										<code>usePrevious</code> but with a predicate to determine
										if <code>previous</code> should update.
									</li>
									<li>
										<HookLink hook='useObservable' /> — tracks latest value of
										an <code>Observable</code>.
									</li>
									<li>
										<HookLink hook='useRafState' /> — creates{' '}
										<code>setState</code> method which only updates after{' '}
										<code>requestAnimationFrame</code>.
									</li>
									<li>
										<HookLink hook='useSetState' /> — creates{' '}
										<code>setState</code> method which works like{' '}
										<code>this.setState</code>.
									</li>
									<li>
										<HookLink hook='useStateList' /> — circularly iterates over
										an array.
									</li>
									<li>
										<HookLink hook='useToggle' /> and{' '}
										<HookLink hook='useBoolean' path='useToggle' /> — tracks
										state of a boolean.
									</li>
									<li>
										<HookLink hook='useCounter' /> and{' '}
										<HookLink hook='useNumber' path='useCounter' /> — tracks
										state of a number.
									</li>
									<li>
										<HookLink hook='useList' /> — tracks state of an array.
									</li>
									<li>
										<HookLink hook='useMap' /> — tracks state of an object.
									</li>
									<li>
										<HookLink hook='useSet' /> — tracks state of a Set.
									</li>
									<li>
										<HookLink hook='useQueue' /> — implements simple queue.
									</li>
									<li>
										<HookLink hook='useStateValidator' /> — tracks state of an
										object.
									</li>
									<li>
										<HookLink hook='useStateWithHistory' /> — stores previous
										state values and provides handles to travel through them.
									</li>
									<li>
										<HookLink hook='useMultiStateValidator' /> — alike the
										<code>useStateValidator</code>, but tracks multiple states
										at a time.
									</li>
									<li>
										<HookLink hook='useMediatedState' /> — like the regular
										<code>useState</code> but with mediation by custom function.
									</li>
									<li>
										<HookLink hook='useFirstMountState' /> — check if current
										render is first.
									</li>
									<li>
										<HookLink hook='useRendersCount' /> — count component
										renders.
									</li>
									<li>
										<HookLink hook='createGlobalState' /> — cross component
										shared state.
									</li>
									<li>
										<HookLink hook='useMethods' /> — neat alternative to
										useReducer.
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='MiscellaneousServices'>
									<CardTitle>Miscellaneous</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<ul>
									<li>
										<HookLink hook='useEnsuredForwardedRef' /> and{' '}
										<HookLink
											hook='ensuredForwardRef'
											path='useEnsuredForwardedRef'
										/>{' '}
										— use a React.forwardedRef safely.
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default HooksPage;
