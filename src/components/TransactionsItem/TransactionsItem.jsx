import clsx from "clsx";
import { LuPencil } from "react-icons/lu";
import s from "./TransactionsItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTrnThunk } from "../../redux/transactions/operations";
import { selectCategories } from "../../redux/transactions/selector";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import { useState } from "react";
import EditTransactionForm from "../EditTransactionForm/EditTransactionForm";

const TransactionsItem = ({
  transactionDate,
  type,
  categoryId,
  comment = "",
  amount,
  id,
}) => {
  const dispatch = useDispatch();
  const selectCategoryArr = useSelector(selectCategories);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}.${month}.${year.slice(-2)}`;
  };

  const sumClass = clsx(s.sum, {
    [s.sumNegative]: type === "EXPENSE",
    [s.sumPositive]: type === "INCOME",
  });

  const mobileItemBoxClass = clsx(s.mobileItemBox, {
    [s.mobileItemBoxIncome]: type === "INCOME",
    [s.mobileItemBoxExpense]: type === "EXPENSE",
  });

  const handleDelete = (transactionId) => {
    dispatch(deleteTrnThunk(transactionId));
  };

  const plusMinus = (type) => {
    if (type === "INCOME") return "+";
    return "-";
  };

  const getCategoryName = (categoryId) => {
    const category = selectCategoryArr.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown category";
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true,
    }).format(amount);
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  return (
    <div className={clsx(s.mobileOuterWrapper)}>
      <div className={mobileItemBoxClass}>
        <tr className={clsx(s.itemRow)}>
          <td className={clsx(s.date)}>{formatDate(transactionDate)}</td>
          <td className={clsx(s.type)}>{plusMinus(type)}</td>
          <td className={clsx(s.category)}>{getCategoryName(categoryId)}</td>
          <td className={clsx(s.comment)}>{comment}</td>
          <td className={sumClass}>{formatAmount(amount)}</td>
          <td className={clsx(s.btnBox)}>
            <button
              className={clsx(s.editBtn)}
              type="button"
              onClick={openEditModal}
            >
              <LuPencil size={14} color="fff" />
            </button>
            <button
              className={clsx(s.delBtn)}
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
            <ModalBackdrop isOpen={isEditModalOpen} closeModal={closeEditModal}>
              <EditTransactionForm
                closeModal={closeEditModal}
                transactionDate={transactionDate}
                type={type}
                categoryId={categoryId}
                comment={comment}
                amount={amount}
                id={id}
              />
            </ModalBackdrop>
          </td>
        </tr>
      </div>
    </div>
  );
};

export default TransactionsItem;
