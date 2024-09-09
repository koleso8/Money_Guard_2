import Modal from 'react-modal';
import clsx from 'clsx';
import s from './ModalBackdrop.module.css';
import Icon from '../Icon/Icon';
import { useSelector } from 'react-redux';
import { selectHeaderHeight } from '../../redux/modal/selector';
import { useScreenWidth } from '../../hooks/useScreenWidth';

Modal.setAppElement('#root');

const ModalBackdrop = ({
  children,
  isOpen,
  closeModal,
  noCloseButton = false,
}) => {
  const { isSmallScreen } = useScreenWidth();
  const headerHeight = useSelector(selectHeaderHeight);
  const customStyles = {
    overlay: {
      top: headerHeight,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={clsx(s.modal)}
      overlayClassName={clsx(s.modalOverlay)}
      style={customStyles}
    >
      {!noCloseButton && !isSmallScreen && (
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
