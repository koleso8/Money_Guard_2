import clsx from 'clsx';
import s from './Balance.module.css';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/auth/selectors';

const Balance = () => {
  const currentBalance = useSelector(selectBalance);

  return (
    <div className={clsx(s.wrapper)}>
      <p className={clsx(s.title)}>Your balance</p>
      <p className={clsx(s.balance)}>₴ {currentBalance}</p>
    </div>
  );
};

export default Balance;
