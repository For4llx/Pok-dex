import React from 'react';

interface Props {
  id: string;
  click: any;
  variant: string;
  children: string;
}

const Button: React.FC<Props> = function Button({
  id,
  click,
  variant,
  children,
}) {
  return (
    <button id={id} type="button" onClick={click} className={variant}>
      {children}
    </button>
  );
};

export default Button;
