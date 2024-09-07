import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import clsx from 'clsx';
import s from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={clsx(s.page)}>
      <Header />
      <main className={clsx(s.main)}>
        <Dashboard />
        <div className={clsx(s.outlet)}>
          <Suspense fallback={'____loader__'}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <div className={clsx(s.gradient, s.gradientOne)}></div>
      <div className={clsx(s.gradient, s.gradientTwo)}></div>
      <div className={clsx(s.gradient, s.gradientThree)}></div>
      <div className={clsx(s.gradient, s.gradientFour)}></div>
    </div>
  );
};

export default Layout;
