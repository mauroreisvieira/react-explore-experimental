 import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="flex min-h-full h-full">
      <aside className="h-full p-12 bg-gray-50">
        <nav className="flex flex-col gap-2 w-52">
          {[
            { to: '/use', text: 'Use' },
            { to: '/use-callback', text: 'Use Callback' },
            { to: '/use-context', text: 'Use Context' },
            { to: '/use-deferred-value', text: 'Use Deferred Value' },
            { to: '/use-effect-event', text: 'Use Effect Event' },
            { to: '/use-form-status', text: 'Use Form Status' },
            { to: '/use-Optimistic', text: 'Use Optimistic' },
            { to: '/use-reducer', text: 'Use Reducer' },
            { to: '/use-transition', text: 'Use Transition' },
          ].map(({ to, text }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
            >
              {text}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="p-12 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
