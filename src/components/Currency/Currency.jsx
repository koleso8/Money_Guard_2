import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import CurrencyAreaChart from './CurrencyAreaChart';

import {
  selectCurrencies,
  selectLastRequestTime,
} from '../../redux/currency/selectors';
import { fetchCurrencies } from '../../redux/currency/operations';
import s from './Currency.module.css';

const Currency = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(selectCurrencies);
  const lastRequestTime = useSelector(selectLastRequestTime);

  const currenciesForChart = [
    {
      name: 'Point 1',
      showDot: false,
      uv: currencies[0]?.rateBuy.toFixed(2) * 0.7,
    },
    {
      name: 'Point 2',
      showDot: true,
      uv: currencies[0]?.rateBuy.toFixed(2),
    },
    {
      name: 'Point 3',
      showDot: false,
      uv: currencies[1]?.rateBuy.toFixed(2) * 0.5,
    },
    {
      name: 'Point 4',
      showDot: false,
      uv: currencies[1]?.rateBuy.toFixed(2) * 0.6,
    },
    {
      name: 'Point 5',
      showDot: false,
      uv: currencies[1]?.rateBuy.toFixed(2) * 0.8,
    },
    {
      name: 'Point 6',
      showDot: true,
      uv: currencies[1]?.rateBuy.toFixed(2),
    },
    {
      name: 'Point 7',
      showDot: false,
      uv: currencies[1]?.rateBuy.toFixed(2) - 6,
    },
  ];

  useEffect(() => {
    const currentTime = Date.now();

    if (currentTime.toString().slice(0, 10) - lastRequestTime < 3600000) {
      return;
    }
    dispatch(fetchCurrencies());
  }, [dispatch, lastRequestTime]);

  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead>
          <tr className={clsx(s.row, s.mainRow)}>
            <th className={clsx(s.item, s.mainItem)}>Currency</th>
            <th className={clsx(s.item, s.mainItem)}>Purchase</th>
            <th className={clsx(s.item, s.mainItem)}>Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr className={s.row}>
            <td className={s.item}>USD</td>
            <td className={s.item}>
              {currencies[0]?.rateBuy.toFixed(2) ?? 'no data'}
            </td>
            <td className={s.item}>
              {currencies[0]?.rateSell.toFixed(2) ?? 'no data'}
            </td>
          </tr>
          <tr className={s.row}>
            <td className={s.item}>EUR</td>
            <td className={s.item}>
              {currencies[1]?.rateBuy.toFixed(2) ?? 'no data'}
            </td>
            <td className={s.item}>
              {currencies[1]?.rateSell.toFixed(2) ?? 'no data'}
            </td>
          </tr>
        </tbody>
      </table>
      <CurrencyAreaChart data={currenciesForChart} />
    </div>
  );
};

export default Currency;
