import * as React from 'react';
import ReactDOM from 'react-dom';

// import { App } from './use';
import { App } from './use-deferred-value';

import './main.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
