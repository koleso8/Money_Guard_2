import { useSelector } from 'react-redux';

import AnimatedNumber from '../AnimatedNumber/AnimatedNumber';

import { selectBalance } from '../../redux/auth/selectors';
import s from './Balance.module.css';

const Balance = () => {
  const currentBalance = useSelector(selectBalance);

  return (
    <div className={s.wrapper}>
      <p className={s.title}>Your balance</p>
      <p className={s.balance}>
        ₴ <AnimatedNumber value={currentBalance} duration={800} />
      </p>
    </div>
  );
};

export default Balance;
