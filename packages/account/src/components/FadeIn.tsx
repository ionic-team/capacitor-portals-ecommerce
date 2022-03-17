import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeIn.scss';

const FadeIn: React.FC<{ isLoaded: boolean }> = ({ isLoaded, children }) => {
  return (
    <CSSTransition in={isLoaded} timeout={500} classNames="fade-in">
      {children}
    </CSSTransition>
  );
};

export default FadeIn;
