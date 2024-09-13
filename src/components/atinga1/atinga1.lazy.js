import React, { lazy, Suspense } from 'react';

const Lazyatinga1 = lazy(() => import('./atinga1'));

const atinga1 = props => (
  <Suspense fallback={null}>
    <Lazyatinga1 {...props} />
  </Suspense>
);

export default atinga1;
