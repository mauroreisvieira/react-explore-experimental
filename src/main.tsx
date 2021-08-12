import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './performance/v1/App';

import './main.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
