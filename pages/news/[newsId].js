import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

function SomethingImportant() {
  const router = useRouter();

  const newsID = router.query.newsId;
  return (
    <Fragment>
      <h1>Something Important</h1>
      <p>{newsID}</p>
    </Fragment>
  );
}

export default SomethingImportant;
