import * as React from 'react';
import ReactDOM from 'react-dom';
// import { List } from './useTransition/List';
import { App } from './useContext';

import './main.css';

const Main = (): React.ReactElement => (
    <>
        <App />
    </>
)

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<Main />);
