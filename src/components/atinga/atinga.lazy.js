import React, { lazy, Suspense } from 'react';

const Lazyatinga = lazy(() => import('./atinga'));

const atinga = props => (
  <Suspense fallback={null}>
    <Lazyatinga {...props} />
  </Suspense>
);

export default atinga;
