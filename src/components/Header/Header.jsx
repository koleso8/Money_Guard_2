import s from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleExit = () => {
    console.log("Exit clicked");
  };

  const redirectToHome = () => {
    console.log("Home clicked");
  };

  return (
    <div className={clsx(s.container)}>
      <div className={clsx(s.logo)} onClick={redirectToHome}>
        <svg className={clsx(s.logosvg)}>
          <use href="./src/images/icons.svg#logo"></use>
        </svg>
        <p className={clsx(s.title)}>Money Guard</p>
      </div>
      <div className={clsx(s.logout)}>
        <p className={clsx(s.username)}>Name</p>
        <button className={clsx(s.logoutButton)} onClick={handleLogout}>
          <svg width="18" height="18">
            <use href="./src/images/icons.svg#logout"></use>
          </svg>
        </button>
        <button className={clsx(s.exitButton)} onClick={handleExit}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default Header;
