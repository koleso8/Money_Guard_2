import clsx from 'clsx';
import s from './TransactionsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactions } from '../../redux/transactions/selector';
import TransactionsItem from '../TransactionsItem/TransactionsItem';
import { FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import {
  fetchAllTrnThunk,
  getCategoriesThunk,
} from '../../redux/transactions/operations';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';

const TransactionsList = () => {
  const allTransactions = useSelector(selectTransactions).toSorted(
    (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
  );

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  return (
    <div className={clsx(s.transactionListBox)}>
      <table className={clsx(s.table)}>
        <thead>
          <tr className={clsx(s.tableHeader)}>
            <th className={clsx(s.date)}>Date</th>
            <th className={clsx(s.type)}>Type</th>
            <th className={clsx(s.category)}>Category</th>
            <th className={clsx(s.comment)}>Comment</th>
            <th className={clsx(s.sum)}>Sum</th>
            <th className={clsx(s.actions)}></th>
          </tr>
        </thead>
        <tbody className={clsx(s.tableBody)}>
          {allTransactions.map(item => (
            <TransactionsItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className={clsx(s.addTrnBtn)}
        onClick={openAddModal}
      >
        <FiPlus size={30} color="fff" />
      </button>
      <ModalBackdrop isOpen={isAddModalOpen} closeModal={closeAddModal}>
        <AddTransactionForm closeModal={closeAddModal} />
      </ModalBackdrop>
    </div>
  );
};

export default TransactionsList;
