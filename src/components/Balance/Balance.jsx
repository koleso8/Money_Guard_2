import clsx from 'clsx';
import s from './Balance.module.css';

const Balance = () => {
	return (
		<div className={clsx(s.wrapper)}>
			<p className={clsx(s.title)}>Your balance</p>
			<p className={clsx(s.balance)}>₴ 24 000.00</p>
		</div>
	);
};

export default Balance;
