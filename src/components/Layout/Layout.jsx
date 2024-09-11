import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import clsx from 'clsx';

import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Loader from '../../Loader/Loader';

import {
  fetchAllTrnThunk,
  getCategoriesThunk,
} from '../../redux/transactions/operations';
import s from './Layout.module.css';

export const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrnThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  return (
    <div className={s.page}>
      <Toaster position="top-right" />

      <Header />
      <main className={s.main}>
        <Dashboard />
        <div className={s.outlet}>
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
