import * as React from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from './split';
// import { App } from './use';
// import { App } from './use-callback';
// import { App } from './use-context';
// import { App } from './use-deferred-value';
import { App } from './use-optimistic';
// import { App } from './use-reducer';
// import { App } from './use-transition';

// Styles
import './tailwind.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="max-w-4xl m-auto p-12">
      <App />
    </div>
  </React.StrictMode>,
);
