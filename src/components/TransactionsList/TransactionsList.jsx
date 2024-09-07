import clsx from 'clsx';
import s from './TransactionsList.module.css';
// import { useSelector } from "react-redux";
// import { selectTransactions } from "../../redux/transactions/selector";
import TransactionsItem from '../TransactionsItem/TransactionsItem';
import transactionData from '../../helpers/placeholderTransactions.json';
import { FiPlus } from 'react-icons/fi';
import { useState } from 'react';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';

const TransactionsList = () => {
  //   const allTransactions = useSelector(selectTransactions);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const allTransactions = transactionData;

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
        YA MODALKA
      </ModalBackdrop>
    </div>
  );
};

export default TransactionsList;
