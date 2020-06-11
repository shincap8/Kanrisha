import React from 'react';

import { NavBar }  from './NavBar';

export function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <NavBar />
      {props.children}
    </React.Fragment>
  );
}
