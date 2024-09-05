import { Suspense } from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <Suspense fallback={'____loader__'}>
        <Outlet />
      </Suspense>
    </div>
  );
};
