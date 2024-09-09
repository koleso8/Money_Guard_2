import { useDispatch, useSelector } from 'react-redux';
import s from './Header.module.css';
import clsx from 'clsx';
import { selectUser } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import { logoutThunk } from '../../redux/auth/operations';
import { setHeaderHeight } from '../../redux/modal/slice';

const Header = () => {
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const headerRef = useRef(null);

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (headerRef.current) {
      dispatch(setHeaderHeight(headerRef.current.offsetHeight));
    }
  }, [dispatch]);

  return (
    <div className={clsx(s.container)} ref={headerRef}>
      <NavLink to="/">
        <div className={clsx(s.logo)}>
          <svg className={clsx(s.logosvg)}>
            <use href="./src/images/icons.svg#logo"></use>
          </svg>
          <p className={clsx(s.title)}>Money Guard</p>
        </div>
      </NavLink>
      <div className={clsx(s.logout)}>
        <p className={clsx(s.username)}>{user.username}</p>

        <button className={clsx(s.logoutButton)} onClick={handleLogout}>
          <svg width="18" height="18">
            <use href="./src/images/icons.svg#logout"></use>
          </svg>
        </button>

        <button className={clsx(s.exitButton)} onClick={handleLogout}>
          Exit
        </button>
      </div>

      <ModalBackdrop isOpen={isModalOpen} closeModal={closeModal} noCloseButton>
        <div className={s.back}>
          <div className={clsx(s.logo)}>
            <svg className={clsx(s.logosvg)}>
              <use href="./src/images/icons.svg#logo"></use>
            </svg>
            <p className={clsx(s.title)}>Money Guard</p>
          </div>
          <div className={s.modalContent}>
            <p className={s.modalText}>Are you sure you want to log out?</p>
            <button
              className={s.logoutBtn}
              onClick={() => {
                dispatch(logoutThunk());
              }}
            >
              L O G O U T
            </button>
            <button className={s.cancelBtn} onClick={closeModal}>
              C A N C E L
            </button>
          </div>
        </div>
      </ModalBackdrop>
    </div>
  );
};

export default Header;
