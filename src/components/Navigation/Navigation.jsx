import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import Icon from '../Icon/Icon';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.linkActive);
};

const Navigation = () => {
  const { isSmallScreen } = useScreenWidth();

  return (
    <nav>
      <ul className={clsx(s.list)}>
        <li className={clsx(s.listItem)}>
          <NavLink className={buildLinkClass} to="/">
            <div className={clsx(s.iconBackground)}></div>
            <Icon name="home" width="24" height="24" className={clsx(s.icon)} />
            {!isSmallScreen && 'Home'}
          </NavLink>
        </li>
        <li className={clsx(s.listItem)}>
          <NavLink className={buildLinkClass} to="/statistics">
            <div className={clsx(s.iconBackground)}></div>
            <Icon
              name="statistics"
              width="24"
              height="24"
              className={clsx(s.icon)}
            />
            {!isSmallScreen && 'Statistics'}
          </NavLink>
        </li>
        {isSmallScreen && (
          <li className={clsx(s.listItem)}>
            <NavLink className={buildLinkClass} to="/currency">
              <div className={clsx(s.iconBackground)}></div>
              <Icon
                name="dollar"
                width="24"
                height="24"
                className={clsx(s.icon)}
              />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
