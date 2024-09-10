import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

import Icon from '../Icon/Icon';

import { closeModal } from '../../redux/modal/slice';
import {
  selectHeaderHeight,
  selectActiveModal,
} from '../../redux/modal/selector';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import s from './ModalBackdrop.module.css';

Modal.setAppElement('#root');

const ModalBackdrop = ({ children, modalType, noCloseButton = false }) => {
  const dispatch = useDispatch();
  const { isSmallScreen } = useScreenWidth();
  const headerHeight = useSelector(selectHeaderHeight);
  const activeModal = useSelector(selectActiveModal);

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
      overlayClassName={s.modalOverlay}
      style={customStyles}
    >
      {!noCloseButton && !isSmallScreen && (
        <button className={s.iconButton} onClick={closeModalHandler}>
          <Icon
            name="icon-close"
            height="16px"
            width="16px"
            className={s.closeIcon}
          />
        </button>
      )}
      <div className={s.gradient}></div>
      {children}
    </Modal>
  );
};

export default ModalBackdrop;
