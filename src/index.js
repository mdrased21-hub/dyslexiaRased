import React from 'react';
import ReactDOM from 'react-dom'; // For React 17
// import { createRoot } from 'react-dom/client'; // For React 18
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/themeContext';
import './i18n';
import { store } from './store';

const children = (
	<Router>
		<React.StrictMode>
			<ThemeContextProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</ThemeContextProvider>
		</React.StrictMode>
	</Router>
);

const container = document.getElementById('root');

ReactDOM.render(children, container); // For React 17
// createRoot(container).render(children); // For React 18

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
