import { useEffect } from 'react';
import s from './ModalBackdrop.module.css';

const ModalBackdrop = ({ children }) => {
  return <div className={s.back}>{children}</div>;
};

export default ModalBackdrop;
