import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import clsx from 'clsx';
import s from './Layout.module.css';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import {
  fetchAllTrnThunk,
  getCategoriesThunk,
} from '../../redux/transactions/operations';
import Loader from '../../Loader/Loader';

export const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrnThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  return (
    <div className={clsx(s.page)}>
      <Toaster position="top-right" />

      <Header />
      <main className={clsx(s.main)}>
        <Dashboard />
        <div className={clsx(s.outlet)}>
          <Suspense fallback={<Loader />}>
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
