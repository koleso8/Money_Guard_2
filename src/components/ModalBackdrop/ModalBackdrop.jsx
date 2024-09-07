// import { useEffect } from 'react';
// import s from './ModalBackdrop.module.css';

// const ModalBackdrop = ({ children }) => {
//   return <div className={s.back}>{children}</div>;
// };

// export default ModalBackdrop;

import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 997,
    backdropFilter: 'blur(3px)',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(100px)',
    boxShadow: '0 4px 60px 0 rgba(25, 16, 16, 0.25)',
    borderRadius: '8px',
    zIndex: 999,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(25, 16, 16, 0.25)',
    padding: '50px',
  },
};

const ModalBackdrop = ({ children, isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      {children}
    </Modal>
  );
};

export default ModalBackdrop;
