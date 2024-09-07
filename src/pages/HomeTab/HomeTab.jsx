import { useSelector } from 'react-redux';
import ModalBackdrop from '../../components/ModalBackdrop/ModalBackdrop';
import Loader from '../../Loader/Loader';
import { selectIsLoading } from '../../redux/transactions/selector';
import TransactionsList from '../../components/TransactionsList/TransactionsList';

const HomeTab = () => {
  // const loading = useSelector(selectIsLoading());
  return (
    <>
      <TransactionsList />
      {/* {selectIsLoading() || (
        <ModalBackdrop>
          <Loader />
        </ModalBackdrop>
      )} */}
    </>
  );
};

export default HomeTab;
