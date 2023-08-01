import Link from 'next/link';
import React, { Fragment } from 'react';

function HomePage() {
  return (
    <Fragment>
      <h1>The main page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">Next Js</Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
