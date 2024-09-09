import { useDispatch, useSelector } from "react-redux";
import s from "./Header.module.css";
import clsx from "clsx";
import { selectUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import { logoutThunk } from "../../redux/auth/operations";
import { setHeaderHeight } from "../../redux/modal/slice";
import { Icon } from "@mui/material";

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
          <Icon name="logo2" className={clsx(s.logosvg)} />
          <p className={clsx(s.title)}>Money Guard</p>
        </div>
      </NavLink>
      <div className={clsx(s.logout)}>
        <p className={clsx(s.username)}>{user.username}</p>

        <button className={clsx(s.logoutButton)} onClick={handleLogout}>
          <Icon name="logout" />
        </button>

        <button className={clsx(s.exitButton)} onClick={handleLogout}>
          Exit
        </button>
      </div>

      <ModalBackdrop isOpen={isModalOpen} closeModal={closeModal} noCloseButton>
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
