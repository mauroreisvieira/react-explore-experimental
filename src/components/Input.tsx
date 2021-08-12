import classNames from 'classnames';
import * as React from 'react';

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
        const computedClassNames = classNames('input', className, {
            [`input-${skin}`]: skin,
        });

        return <input {...otherProps} className={computedClassNames} />;
    }
);
