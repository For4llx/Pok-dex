import React from 'react';

interface Props {
  variant: string;
  children: JSX.Element | JSX.Element[];
}

const Wrapper: React.FC<Props> = function Wrapper({ variant, children }) {
  return <div className={variant}>{children}</div>;
};

export default Wrapper;
