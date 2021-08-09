import * as React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider resetCSS>
			<ColorModeScript />
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
