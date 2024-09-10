import { useLocation } from 'react-router-dom';

import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';
import Navigation from '../Navigation/Navigation';

import { useScreenWidth } from '../../hooks/useScreenWidth';
import s from './Dashboard.module.css';

const Dashboard = () => {
  const location = useLocation();
  const { isSmallScreen } = useScreenWidth();

  return (
    <div className={s.wrapper}>
      <div className={s.topPart}>
        <div className={s.navigationBox}>
          <Navigation />
        </div>
        {(isSmallScreen && location.pathname !== '/') || (
          <div className={s.balanceBox}>
            <Balance />
          </div>
        )}
      </div>
      {!isSmallScreen && (
        <div className={s.currencyBox}>
          <Currency />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
