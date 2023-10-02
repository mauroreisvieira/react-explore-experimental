import * as React from 'react';
import { cn } from '../utils';

type ButtonAnchorNative = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonProps extends ButtonAnchorNative {
  skin?: 'primary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export const Button = ({
  skin = 'primary',
  size = 'md',
  children,
  className,
  href,
  ...otherProps
}: ButtonProps): React.ReactElement => {
  console.log('%cButton Render', 'color: red');
  const computedClassNames = cn(
    'button',
    className,
    size && `button-${size}`,
    skin && `button-${skin}`,
  );

  const Tag = href ? 'a' : 'button';

  return (
    <Tag {...otherProps} className={computedClassNames}>
      {children}
    </Tag>
  );
};
