import classNames from 'classnames';
import * as React from 'react';

type ButtonAnchorNative = React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonProps extends ButtonAnchorNative {
    skin?: 'primary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    children?: React.ReactNode;
}

export const Button = React.memo(
    ({
        skin = 'primary',
        size = 'md',
        children,
        className,
        href,
        ...otherProps
    }: ButtonProps): React.ReactElement => {
        console.log('%cButton Render', 'color: red');
        const computedClassNames = classNames('button', className, {
            [`button-${skin}`]: skin,
            [`button-${size}`]: size,
        });

        const Tag = href ? 'a' : 'button';

        return (
            <Tag {...otherProps} className={computedClassNames}>
                {children}
            </Tag>
        );
    }
);
