import * as React from "react";
import { Counter } from "./Counter";
import { Search } from "./Search";

export const App = (): React.ReactElement => {
    console.log("%cApp Render", "color: blue");
    return (
        <>
            <h1>Single Responsibility</h1>
            <p>
                Before you apply optimizations like <code>memo</code> or{" "}
                <code>useMemo</code>, it might make sense to look if you can
                split the parts that change from the parts that don’t change.
            </p>
            <div>
                <Search />
            </div>
            <Counter />
        </>
    );
};
