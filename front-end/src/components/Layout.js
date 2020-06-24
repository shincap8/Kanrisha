/*
This code below is to create the layout of things that remain static
over the different views like the NavBar
*/
import React from 'react';

import { NavBar }  from './NavBar';

export function Layout(props) {
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
    </React.Fragment>
  );
}
