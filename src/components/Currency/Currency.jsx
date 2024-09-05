import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrencies,
  selectLastRequestTime,
} from '../../redux/currency/selectors';
import { fetchCurrencies } from '../../redux/currency/operations';
import clsx from 'clsx';
import s from './Currency.module.css';

const Currency = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(selectCurrencies);
  const lastRequestTime = useSelector(selectLastRequestTime);

  useEffect(() => {
    const currentTime = Date.now();

    if (currentTime.toString().slice(0, 10) - lastRequestTime < 3600000) {
      return;
    }
    dispatch(fetchCurrencies());
  }, [dispatch, lastRequestTime]);

  return (
    // <div className={clsx(s.table)}>
    // 	<div className={clsx(s.row, s.mainRow)}>
    // 		<p>Currency</p>
    // 		<p>Purchase</p>
    // 		<p>Sale</p>
    // 	</div>
    // 	<div className={clsx(s.row)}>
    // 		<p>USD</p>
    // 		<p>{currencies[0].rateBuy ?? 'no data'}</p>
    // 		<p>{currencies[0].rateSell ?? 'no data'}</p>
    // 	</div>
    // 	<div className={clsx(s.row)}>
    // 		<p>EUR</p>
    // 		<p>{currencies[1].rateBuy ?? 'no data'}</p>
    // 		<p>{currencies[1].rateSell ?? 'no data'}</p>
    // 	</div>
    // </div>
    <div className={clsx(s.wrapper)}>
      <table className={clsx(s.table)}>
        <tr className={clsx(s.row, s.mainRow)}>
          <th className={clsx(s.item, s.mainItem)}>Currency</th>
          <th className={clsx(s.item, s.mainItem)}>Purchase</th>
          <th className={clsx(s.item, s.mainItem)}>Sale</th>
        </tr>
        <tr className={clsx(s.row)}>
          <td className={clsx(s.item)}>USD</td>
          <td className={clsx(s.item)}>
            {currencies[0]?.rateBuy ?? 'no data'}
          </td>
          <td className={clsx(s.item)}>
            {currencies[0]?.rateSell ?? 'no data'}
          </td>
        </tr>
        <tr className={clsx(s.row)}>
          <td className={clsx(s.item)}>EUR</td>
          <td className={clsx(s.item)}>
            {currencies[1]?.rateBuy ?? 'no data'}
          </td>
          <td className={clsx(s.item)}>
            {currencies[1]?.rateSell ?? 'no data'}
          </td>
        </tr>
      </table>
      <div className={clsx(s.diagramBox)}>
        <span className={clsx(s.pointNumber, s.pointFirst)}>
          {currencies[0]?.rateBuy ?? 'no data'}
        </span>
        <span className={clsx(s.pointNumber, s.pointSecond)}>
          {currencies[1]?.rateBuy ?? 'no data'}
        </span>
        <img
          className={clsx(s.diagram)}
          src="./src/images/graph.webp"
          alt="diagram"
        />
      </div>
    </div>
  );
};

export default Currency;
