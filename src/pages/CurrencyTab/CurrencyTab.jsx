import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Currency from '../../components/Currency/Currency';

import { useScreenWidth } from '../../hooks/useScreenWidth';
import s from './CurrencyTab.module.css';

const CurrencyTab = () => {
  const navigate = useNavigate();
  const { isSmallScreen } = useScreenWidth();

  useEffect(() => {
    !isSmallScreen && navigate('/', { replace: true });
  }, [isSmallScreen, navigate]);

  return (
    <div className={s.wrapper}>
      <Currency />
    </div>
  );
};

export default CurrencyTab;
