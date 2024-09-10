import Modal from 'react-modal';
import clsx from 'clsx';
import s from './ModalBackdrop.module.css';
import Icon from '../Icon/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import {
  selectHeaderHeight,
  selectActiveModal,
} from '../../redux/modal/selector';
import { useScreenWidth } from '../../hooks/useScreenWidth';

Modal.setAppElement('#root');

const ModalBackdrop = ({ children, modalType, noCloseButton = false }) => {
  const { isSmallScreen } = useScreenWidth();
  const headerHeight = useSelector(selectHeaderHeight);
  const activeModal = useSelector(selectActiveModal);
  const dispatch = useDispatch();

  const modalMarginFromTop = isSmallScreen ? headerHeight : 0;

  const customStyles = {
    overlay: {
      top: modalMarginFromTop,
    },
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      isOpen={activeModal === modalType}
      onRequestClose={closeModalHandler}
      className={s.modal}
      overlayClassName={clsx(s.modalOverlay)}
      style={customStyles}
    >
      {!noCloseButton && !isSmallScreen && (
        <button className={clsx(s.iconButton)} onClick={closeModalHandler}>
          <Icon
            name="icon-close"
            height="16px"
            width="16px"
            className={clsx(s.closeIcon)}
          />
        </button>
      )}
      <div className={clsx(s.gradient)}></div>
      {children}
    </Modal>
  );
};

export default ModalBackdrop;
