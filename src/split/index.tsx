import * as React from 'react';
import { Counter } from './Counter';
import { Search } from './Search';

export const App = (): React.ReactElement => {
    console.log('%cApp Render', 'color: blue');
    return (
        <>
            <h1>
                Before you apply optimizations like <code>memo</code> or{' '}
                <code>useMemo</code>, it might make sense to look if you can
                split the parts that change from the parts that don’t change.
            </h1>
            <div>
                <Search />
            </div>
            <Counter />
        </>
    );
};
