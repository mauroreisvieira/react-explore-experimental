import React, { use } from "react";

type Product = {
    title: string;
};

const getProduct = fetch("https://dummyjson.com/products").then((res) =>
    res.json(),
);
const beforeHook = false;

export function App(): React.ReactElement {
    if (beforeHook) return <div>if before hooks are also ok</div>;
    const product = use<Product>(getProduct);
    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <pre>{JSON.stringify(product, null, 4)}</pre>
        </div>
    );
}
