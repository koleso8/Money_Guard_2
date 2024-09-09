import { useDispatch, useSelector } from 'react-redux';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { useEffect } from 'react';
import {
  fetchAllTrnThunk,
  getCategoriesThunk,
} from '../../redux/transactions/operations';

const HomeTab = () => {
  return (
    <>
      <TransactionsList />
    </>
  );
};

export default HomeTab;
