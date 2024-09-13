import React, { lazy, Suspense } from 'react';

const LazyReducerComponent = lazy(() => import('./ReducerComponent'));

const ReducerComponent = props => (
  <Suspense fallback={null}>
    <LazyReducerComponent {...props} />
  </Suspense>
);

export default ReducerComponent;
