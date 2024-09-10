import clsx from 'clsx';
import s from './CurrencyTab.module.css';
import Currency from '../../components/Currency/Currency';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import { useNavigate } from 'react-router-dom';

const CurrencyTab = () => {
  const navigate = useNavigate();
  const { isSmallScreen } = useScreenWidth();
  !isSmallScreen && navigate('/', { replace: true });

  return (
    <div className={clsx(s.wrapper)}>
      <Currency />
    </div>
  );
};

export default CurrencyTab;
