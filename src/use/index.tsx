import React, { use } from 'react';

type Product = {
  title: string;
};

const getProduct = fetch('https://dummyjson.com/products').then((res) =>
  res.json(),
);
const beforeHook = false;

export default function UsePage(): React.ReactElement {
  if (beforeHook) return <div>if before hooks are also ok</div>;

  const product = use<Product>(getProduct);
  if (!product) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-2xl font-normal mb-12">Experimental `use` hook</h1>
      <pre>{JSON.stringify(product, null, 4)}</pre>
    </>
  );
}
