import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import s from './Currency.module.css';
import {
  selectCurrencies,
  selectLastRequestTime,
} from '../../redux/currency/selectors';
import { fetchCurrencies } from '../../redux/currency/operations';
import graphDesktop1x from '../../images/graph_desktop_1x.webp';
import graphDesktop2x from '../../images/graph_desktop_2x.webp';
import graphTablet1x from '../../images/graph_tablet_1x.webp';
import graphTablet2x from '../../images/graph_tablet_2x.webp';
import graphMobile1x from '../../images/graph_mobile_1x.webp';
import graphMobile2x from '../../images/graph_mobile_2x.webp';

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
    <div className={clsx(s.wrapper)}>
      <table className={clsx(s.table)}>
        <thead>
          <tr className={clsx(s.row, s.mainRow)}>
            <th className={clsx(s.item, s.mainItem)}>Currency</th>
            <th className={clsx(s.item, s.mainItem)}>Purchase</th>
            <th className={clsx(s.item, s.mainItem)}>Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr className={clsx(s.row)}>
            <td className={clsx(s.item)}>USD</td>
            <td className={clsx(s.item)}>
              {currencies[0]?.rateBuy.toFixed(2) ?? 'no data'}
            </td>
            <td className={clsx(s.item)}>
              {currencies[0]?.rateSell.toFixed(2) ?? 'no data'}
            </td>
          </tr>
          <tr className={clsx(s.row)}>
            <td className={clsx(s.item)}>EUR</td>
            <td className={clsx(s.item)}>
              {currencies[1]?.rateBuy.toFixed(2) ?? 'no data'}
            </td>
            <td className={clsx(s.item)}>
              {currencies[1]?.rateSell.toFixed(2) ?? 'no data'}
            </td>
          </tr>
        </tbody>
      </table>
      <div className={clsx(s.diagramBox)}>
        <span className={clsx(s.pointNumber, s.pointFirst)}>
          {currencies[0]?.rateBuy.toFixed(2) ?? ''}
        </span>
        <span className={clsx(s.pointNumber, s.pointSecond)}>
          {currencies[1]?.rateBuy.toFixed(2) ?? ''}
        </span>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={'.' + graphDesktop1x + ' 2x, ' + graphDesktop2x + ' 2x'}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={'.' + graphTablet1x + ' 2x, ' + graphTablet2x + ' 2x'}
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet={'.' + graphMobile1x + ' 2x, ' + graphMobile2x + ' 2x'}
            type="image/webp"
          />
          <img
            className={clsx(s.diagram)}
            src={graphDesktop1x}
            alt="diagram"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};

export default Currency;
