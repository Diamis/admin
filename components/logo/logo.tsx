import React from 'react';

import IconLogo from './svg/logo.svg';
import { HTMLContainer, HTMLTitle } from './logo.styles';

export const Logo: React.FC<{}> = () => {
  return (
    <HTMLContainer>
      <IconLogo />
      <HTMLTitle>Admin Panel</HTMLTitle>
    </HTMLContainer>
  );
};
