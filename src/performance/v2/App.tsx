import * as React from 'react';
import { Counter } from './Counter';
import { Search } from './Search';

export const App = (): React.ReactElement => {
    console.log('%cApp Render', 'color: blue');
    return (
        <>
            <h1>Hey Folks 👋🏼</h1>
            <div>
                <Search />
            </div>
            <Counter />
        </>
    );
};
