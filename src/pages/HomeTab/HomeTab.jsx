import { useSelector } from 'react-redux';
import ModalBackdrop from '../../components/ModalBackdrop/ModalBackdrop';
import Loader from '../../Loader/Loader';
import { selectIsLoading } from '../../redux/transactions/selector';

const HomeTab = () => {
  // const loading = useSelector(selectIsLoading());
  return (
    <>
      {/* {selectIsLoading() || (
        <ModalBackdrop>
          <Loader />
        </ModalBackdrop>
      )} */}
    </>
  );
};

export default HomeTab;
