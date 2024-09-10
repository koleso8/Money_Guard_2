import clsx from 'clsx';
import s from './TransactionsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTransactions } from '../../redux/transactions/selector';
import TransactionsItem from '../TransactionsItem/TransactionsItem';
import { FiPlus } from 'react-icons/fi';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
import { openModal, closeModal } from '../../redux/modal/slice';
import { useState } from 'react';

const TransactionsList = () => {
  const allTransactions = useSelector(selectTransactions)
    .slice()
    .sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate));
  const dispatch = useDispatch();

  const [editedItem, setEditedItem] = useState(null);

  const openAddModal = () => {
    setEditedItem(null);
    dispatch(openModal('addTransaction'));
  };

  const openEditModal = item => {
    setEditedItem(item);
    dispatch(openModal('editTransaction'));
  };

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
            <TransactionsItem
              key={item.id}
              {...item}
              setEditedItem={() => openEditModal(item)}
            />
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

      <ModalBackdrop modalType="addTransaction" noCloseButton={false}>
        <AddTransactionForm closeModal={() => dispatch(closeModal())} />
      </ModalBackdrop>

      <ModalBackdrop modalType="editTransaction" noCloseButton={false}>
        {editedItem && (
          <EditTransactionForm
            closeModal={() => dispatch(closeModal())}
            {...editedItem}
          />
        )}
      </ModalBackdrop>
    </div>
  );
};

export default TransactionsList;
