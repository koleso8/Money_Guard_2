import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';
import Navigation from '../Navigation/Navigation';
import clsx from 'clsx';
import s from './Dashboard.module.css';

const Dashboard = () => {
	return (
		<div className={clsx(s.wrapper)}>
			<div className={clsx(s.navigationBox)}>
				<Navigation />
			</div>
			<div className={clsx(s.balanceBox)}>
				<Balance />
			</div>
			<div className={clsx(s.currencyBox)}>
				<Currency />
			</div>
		</div>
	);
};

export default Dashboard;
