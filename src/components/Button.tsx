import * as React from 'react';
import { cn } from '../utils';

type ButtonNative = React.ButtonHTMLAttributes<HTMLButtonElement>;

const SKINS = {
  primary: 'bg-indigo-500 text-white hover:bg-indigo-600 outline-indigo-500',
  danger: 'bg-red-500 text-white  hover:bg-red-600 outline-red-500',
};

interface ButtonProps extends ButtonNative {
  skin: keyof typeof SKINS;
}

export const Button = React.forwardRef(
  (
    { skin = 'primary', children, className, ...otherProps }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ): React.ReactElement => {
    const cssClasses = cn(
      'p-4 rounded outline-offset-2',
      skin && SKINS[skin],
      className,
    );

    return (
      <button ref={ref} className={cssClasses} {...otherProps}>
        {children}
      </button>
    );
  },
);
