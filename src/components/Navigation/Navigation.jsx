import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import Icon from '../Icon/Icon';

import { useScreenWidth } from '../../hooks/useScreenWidth';
import s from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.linkActive);
};

const Navigation = () => {
  const { isSmallScreen } = useScreenWidth();

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.listItem}>
          <NavLink className={buildLinkClass} to="/">
            <div className={s.iconBackground}></div>
            <Icon name="home" width="24" height="24" className={s.icon} />
            {!isSmallScreen && 'Home'}
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink className={buildLinkClass} to="/statistics">
            <div className={s.iconBackground}></div>
            <Icon name="statistics" width="24" height="24" className={s.icon} />
            {!isSmallScreen && 'Statistics'}
          </NavLink>
        </li>
        {isSmallScreen && (
          <li className={s.listItem}>
            <NavLink className={buildLinkClass} to="/currency">
              <div className={s.iconBackground}></div>
              <Icon name="dollar" width="24" height="24" className={s.icon} />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
