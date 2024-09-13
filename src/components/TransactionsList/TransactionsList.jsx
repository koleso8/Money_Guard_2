import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { openModal, closeModal } from "../../redux/modal/slice";
import { selectTransactions } from "../../redux/transactions/selector";
import TransactionsItem from "../TransactionsItem/TransactionsItem";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import AddTransactionForm from "../AddTransactionForm/AddTransactionForm";
import EditTransactionForm from "../EditTransactionForm/EditTransactionForm";

import { FiPlus } from "react-icons/fi";
import s from "./TransactionsList.module.css";

const TransactionsList = () => {
  const allTransactions = useSelector(selectTransactions)
    .slice()
    .sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate));

  const dispatch = useDispatch();

  const [editedItem, setEditedItem] = useState(null);

  const openAddModal = () => {
    setEditedItem(null);
    dispatch(openModal("addTransaction"));
  };

  const openEditModal = (item) => {
    setEditedItem(item);
    dispatch(openModal("editTransaction"));
  };

  return (
    <div className={s.transactionListBox}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.tableHeader}>
            <th className={s.date}>Date</th>
            <th className={s.type}>Type</th>
            <th className={s.category}>Category</th>
            <th className={s.comment}>Comment</th>
            <th className={s.sum}>Sum</th>
            <th className={s.actions}></th>
          </tr>
        </thead>
        <tbody className={s.tableBody}>
          {allTransactions.length > 0 ? (
            allTransactions.map((item) => (
              <TransactionsItem
                key={item.id}
                {...item}
                setEditedItem={() => openEditModal(item)}
              />
            ))
          ) : (
            <p className={s.emptyListPlaceholder}>
              Start by adding your first transaction!
            </p>
          )}
        </tbody>
      </table>
      <button type="button" className={s.addTrnBtn} onClick={openAddModal}>
        <FiPlus size={30} color="fff" />
      </button>

      <ModalBackdrop modalType="addTransaction" noCloseButton={false}>
        <AddTransactionForm
          closeModal={() => dispatch(closeModal())}
          title="Add transaction"
          buttonText="Add"
        />
      </ModalBackdrop>

      <ModalBackdrop modalType="editTransaction" noCloseButton={false}>
        {editedItem && (
          <AddTransactionForm
            closeModal={() => dispatch(closeModal())}
            editedItem={editedItem}
            title="Edit transaction"
            buttonText="Save"
          />
        )}
      </ModalBackdrop>
    </div>
  );
};

export default TransactionsList;
