import * as React from 'react';
import { cn } from '../utils';

type InputNative = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends InputNative {
  skin?: 'primary' | 'danger';
}

export const Input: React.FC<InputProps> = React.memo(
  ({
    skin = 'primary',
    className,
    ...otherProps
  }: InputProps): React.ReactElement => {
    console.log('%cInput Render', 'color: green');
    const computedClassNames = cn('input', className, skin && `input-${skin}`);

    return <input {...otherProps} className={computedClassNames} />;
  },
);
