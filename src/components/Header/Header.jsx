import s from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  return (
    <div className={clsx(s.container)}>
      <div className={clsx(s.logo)}>
        <svg className={clsx(s.logosvg)} width="18" height="18">
          <use href="./src/images/icons.svg#logo"></use>
        </svg>
        <p className={clsx(s.title)}>Money Guard</p>
      </div>
      <div className={clsx(s.logout)}>
        <p className={clsx(s.username)}>Name</p>
        <svg className={clsx(s.logoutSvg)} width="18" height="18">
          <use href="./src/images/icons.svg#logout"></use>
        </svg>
        <p className={clsx(s.exit)}>Exit</p> 
      </div>
    </div>
  );
};

export default Header;
