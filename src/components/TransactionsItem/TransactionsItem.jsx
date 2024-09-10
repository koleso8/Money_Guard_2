import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { deleteTrnThunk } from "../../redux/transactions/operations";
import { selectCategories } from "../../redux/transactions/selector";

import s from "./TransactionsItem.module.css";
import { LuPencil } from "react-icons/lu";

const TransactionsItem = ({
  transactionDate,
  type,
  categoryId,
  comment = "",
  amount,
  id,
  setEditedItem,
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

  return (
    <tr className={s.itemRow}>
      <td className={s.date}>{formatDate(transactionDate)}</td>
      <td className={s.type}>{plusMinus(type)}</td>
      <td className={s.category}>{getCategoryName(categoryId)}</td>
      <td className={s.comment}>{comment}</td>
      <td className={sumClass}>{formatAmount(amount)}</td>
      <td className={s.btnBox}>
        <button className={s.editBtn} type="button" onClick={setEditedItem}>
          <LuPencil size={14} color="fff" />
        </button>
        <button
          className={s.delBtn}
          type="button"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TransactionsItem;
