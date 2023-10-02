import * as React from 'react';
import { cn } from '../utils';

type InputNative = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef(
  (
    { className, ...otherProps }: InputNative,
    ref: React.Ref<HTMLInputElement>,
  ): React.ReactElement => {
    const computedClassNames = cn(
      'rounded outline-none focus:outline-offset-2 focus:outline-indigo-500 w-full',
      className,
    );

    return <input ref={ref} className={computedClassNames} {...otherProps} />;
  },
);
