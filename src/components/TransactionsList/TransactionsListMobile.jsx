import clsx from "clsx";
import s from "./TransactionsList.module.css";
import { useSelector } from "react-redux";
import { selectTransactions } from "../../redux/transactions/selector";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import AddTransactionForm from "../AddTransactionForm/AddTransactionForm";
import EditTransactionForm from "../EditTransactionForm/EditTransactionForm";
import TransactionsItemMobile from "../TransactionsItem/TransactionsItemMobile";

const TransactionsListMobile = () => {
  const allTransactions = useSelector(selectTransactions)
    .slice()
    .sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate));

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editedItem, setEditedItem] = useState(null);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setEditedItem(null);
  };

  return (
    <div>
      <ul>
        {allTransactions.map((item) => (
          <TransactionsItemMobile
            key={item.id}
            {...item}
            setEditedItem={() => {
              setEditedItem(item);
              openAddModal();
            }}
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
      <ModalBackdrop isOpen={isAddModalOpen} closeModal={closeAddModal}>
        {editedItem ? (
          <EditTransactionForm closeModal={closeAddModal} {...editedItem} />
        ) : (
          <AddTransactionForm closeModal={closeAddModal} />
        )}
      </ModalBackdrop>
    </div>
  );
};

export default TransactionsListMobile;
