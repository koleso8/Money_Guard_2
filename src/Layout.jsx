import { Suspense } from 'react';

import { AppBar } from './components/AppBar/AppBar';
import Loader from './components/Loader/Loader';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};
