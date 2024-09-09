import { useDispatch, useSelector } from 'react-redux';
import ModalBackdrop from '../../components/ModalBackdrop/ModalBackdrop';
import Loader from '../../Loader/Loader';
import { selectIsLoading } from '../../redux/transactions/selector';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { useEffect } from 'react';
import {
  fetchAllTrnThunk,
  getCategoriesThunk,
} from '../../redux/transactions/operations';

const HomeTab = () => {
  // const loading = useSelector(selectIsLoading());
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);
  useEffect(() => {
    console.log('kit');

    if (!isRefresh) {
      console.log('pes');

      dispatch(fetchAllTrnThunk());
      dispatch(getCategoriesThunk());
    }
  }, [dispatch, isRefresh]);

  return (
    <>
      <TransactionsList />
    </>
  );
};

export default HomeTab;
