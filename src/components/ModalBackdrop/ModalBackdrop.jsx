import Modal from 'react-modal';
import clsx from 'clsx';
import s from './ModalBackdrop.module.css';
import Icon from '../Icon/Icon';

Modal.setAppElement('#root');

const ModalBackdrop = ({
  children,
  isOpen,
  closeModal,
  noCloseButton = false,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={clsx(s.modal)}
      overlayClassName={clsx(s.modalOverlay)}
    >
      {!noCloseButton && (
        <button className={clsx(s.iconButton)} onClick={closeModal}>
          <Icon
            name="icon-close"
            height="16px"
            width="16px"
            className={clsx(s.closeIcon)}
          />
        </button>
      )}
      {children}
    </Modal>
  );
};

export default ModalBackdrop;
