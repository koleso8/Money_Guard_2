import clsx from 'clsx';
import s from './TransactionsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTransactions } from '../../redux/transactions/selector';
import { FiPlus } from 'react-icons/fi';
import { openModal, closeModal } from '../../redux/modal/slice';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
import TransactionsItemMobile from '../TransactionsItem/TransactionsItemMobile';
import { useState } from 'react';

const TransactionsListMobile = () => {
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
    <div>
      <ul>
        {allTransactions.map(item => (
          <TransactionsItemMobile
            key={item.id}
            {...item}
            setEditedItem={() => openEditModal(item)}
          />
        ))}
      </ul>
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

export default TransactionsListMobile;
