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
				<Suspense fallback={'____loader__'}>
					<Outlet />
				</Suspense>
			</main>
		</div>
	);
};

export default Layout;
