import * as React from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from './split';
import UsePage from './use';
import UseCallbackPage from './use-callback';
import UseContextPage from './use-context';
import UseDeferredValuePage from './use-deferred-value';
import UseOptimisticPage from './use-optimistic';
import UseFormStatusPage from './use-form-status';
import UseReducerPage from './use-reducer';
import UseTransitionPage from './use-transition';

// Styles
import './tailwind.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="max-w-4xl m-auto p-12">
      <div className="flex flex-col">
        <UsePage />
        <UseCallbackPage />
        <UseContextPage />
        <UseDeferredValuePage />
        <UseOptimisticPage />
        <UseFormStatusPage />
        <UseReducerPage />
        <UseTransitionPage />
      </div>
    </div>
  </React.StrictMode>,
);
