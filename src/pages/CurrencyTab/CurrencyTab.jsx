import clsx from 'clsx';
import s from './CurrencyTab.module.css';
import Currency from '../../components/Currency/Currency';

const CurrencyTab = () => {
  return (
    <div className={clsx(s.wrapper)}>
      <Currency />
    </div>
  );
};

export default CurrencyTab;
