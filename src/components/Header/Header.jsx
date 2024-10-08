import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import Icon from "../Icon/Icon";

import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import {
  setHeaderHeight,
  openModal,
  closeModal,
} from "../../redux/modal/slice";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import s from "./Header.module.css";

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
    dispatch(openModal("logoutConfirmation"));
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <div className={s.container} ref={headerRef}>
      <NavLink to="/">
        <div className={s.logo}>
          <Icon name="logo2" className={s.logosvg} />
          <p className={s.title}>Money Guard</p>
        </div>
      </NavLink>
      <div className={s.logout}>
        <p className={s.username}>{user.username}</p>
        <button className={s.logoutButton} onClick={handleLogout}>
          <Icon name="logout" />
          {!isSmallScreen && "Exit"}
        </button>
      </div>

      <ModalBackdrop modalType="logoutConfirmation">
        <div className={s.back}>
          <div className={s.modalContent}>
            <div className={s.logoModal}>
              <Icon name="logo2" className={s.logosvgModal} />
              <p className={s.titleModal}>Money Guard</p>
            </div>

            <p className={s.modalText}>Are you sure you want to log out?</p>
            <button
              className={s.logoutBtn}
              onClick={() => {
                dispatch(logoutThunk());
                closeModalHandler();
              }}
            >
              Logout
            </button>
            <button className={s.cancelBtn} onClick={closeModalHandler}>
              Cancel
            </button>
          </div>
        </div>
      </ModalBackdrop>
    </div>
  );
};

export default Header;
