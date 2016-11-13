import React from 'react';
import Link from 'react-router/lib/Link';

/**
 * <Core />
 * Wraps all our child components to provide a global navigation.
 * This makes it simple to have a component at the index '/' route
 * of our application.
 */
const Core = ({ children }) =>
  <div>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/help'>Help</Link>
    </nav>
    <main>
      { children }
    </main>
  </div>;

export default Core;
