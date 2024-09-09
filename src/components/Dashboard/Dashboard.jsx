import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';
import Navigation from '../Navigation/Navigation';
import clsx from 'clsx';
import s from './Dashboard.module.css';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const { isSmallScreen } = useScreenWidth();
  const location = useLocation();

  return (
    <div className={clsx(s.wrapper)}>
      <div className={clsx(s.topPart)}>
        <div className={clsx(s.navigationBox)}>
          <Navigation />
        </div>
        {(isSmallScreen && location.pathname !== '/') || (
          <div className={clsx(s.balanceBox)}>
            <Balance />
          </div>
        )}
      </div>
      {!isSmallScreen && (
        <div className={clsx(s.currencyBox)}>
          <Currency />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
