import { useDispatch, useSelector } from 'react-redux';
import s from './Header.module.css';
import clsx from 'clsx';
import { selectUser } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import { logoutThunk } from '../../redux/auth/operations';
import {
  setHeaderHeight,
  openModal,
  closeModal,
} from '../../redux/modal/slice';
import Icon from '../Icon/Icon';
import { useScreenWidth } from '../../hooks/useScreenWidth';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const headerRef = useRef(null);
  const { isSmallScreen } = useScreenWidth();

  useEffect(() => {
    if (headerRef.current) {
      dispatch(setHeaderHeight(headerRef.current.offsetHeight));
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(openModal('logoutConfirmation'));
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <div className={clsx(s.container)} ref={headerRef}>
      <NavLink to="/">
        <div className={clsx(s.logo)}>
          <Icon name="logo2" className={clsx(s.logosvg)} />
          <p className={clsx(s.title)}>Money Guard</p>
        </div>
      </NavLink>
      <div className={clsx(s.logout)}>
        <p className={clsx(s.username)}>{user.username}</p>
        <button className={clsx(s.logoutButton)} onClick={handleLogout}>
          <Icon name="logout" />
          {!isSmallScreen && 'Exit'}
        </button>
      </div>

      <ModalBackdrop modalType="logoutConfirmation">
        <div className={s.back}>
          <div className={s.modalContent}>
            <div className={clsx(s.logoModal)}>
              <Icon name="logo2" className={clsx(s.logosvgModal)} />
              <p className={clsx(s.titleModal)}>Money Guard</p>
            </div>

            <p className={s.modalText}>Are you sure you want to log out?</p>
            <button
              className={s.logoutBtn}
              onClick={() => {
                dispatch(logoutThunk());
                closeModalHandler();
              }}
            >
              L O G O U T
            </button>
            <button className={s.cancelBtn} onClick={closeModalHandler}>
              C A N C E L
            </button>
          </div>
        </div>
      </ModalBackdrop>
    </div>
  );
};

export default Header;
