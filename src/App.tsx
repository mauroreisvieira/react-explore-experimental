import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
// Layout
import { Layout } from './components/Layout';
// Pages
// import { App } from './split';
import ComponentAsPropPage from './component-as-prop';
import FixedForwardRefPage from './fixed-forward-ref';
import UsePage from './use';
import UseCallbackPage from './use-callback';
import UseContextPage from './use-context';
import UseDeferredValuePage from './use-deferred-value';
import UseEffectEventPage from './use-effect-event';
import UseOptimisticPage from './use-optimistic';
import UseFormStatusPage from './use-form-status';
import UseReducerPage from './use-reducer';
import UseSyncExternalStorePage from './use-sync-external-store';
import UseTransitionPage from './use-transition';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="component-as-prop" element={<ComponentAsPropPage />} />
      <Route path="fixed-forward-ref" element={<FixedForwardRefPage />} />
      <Route path="use" element={<UsePage />} />
      <Route path="use-callback" element={<UseCallbackPage />} />
      <Route path="use-context" element={<UseContextPage />} />
      <Route path="use-deferred-value" element={<UseDeferredValuePage />} />
      <Route path="use-effect-event" element={<UseEffectEventPage />} />
      <Route path="use-optimistic" element={<UseOptimisticPage />} />
      <Route path="use-form-status" element={<UseFormStatusPage />} />
      <Route path="use-reducer" element={<UseReducerPage />} />
      <Route path="use-sync-external-store" element={<UseSyncExternalStorePage />} />
      <Route path="use-transition" element={<UseTransitionPage />} />
    </Route>,
  ),
);

export default function App(): React.ReactElement {
  return <RouterProvider router={router} />;
}
