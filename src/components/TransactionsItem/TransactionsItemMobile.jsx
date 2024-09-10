import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { deleteTrnThunk } from "../../redux/transactions/operations";
import { selectCategories } from "../../redux/transactions/selector";
import s from "./TransactionsItem.module.css";
import { LuPencil } from "react-icons/lu";

const TransactionsItemMobile = ({
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
  return (
    <div className={clsx(s.mobileOuterWrapper)}>
      <div className={mobileItemBoxClass}>
        <div className={clsx(s.itemRow)}>
          <span className={clsx(s.date)}>{formatDate(transactionDate)}</span>
          <span className={clsx(s.type)}>{plusMinus(type)}</span>
          <span className={clsx(s.category)}>
            {getCategoryName(categoryId)}
          </span>
          <span className={clsx(s.comment)}>{comment}</span>
          <span className={sumClass}>{formatAmount(amount)}</span>
          <div className={clsx(s.btnBox)}>
            <button
              className={clsx(s.editBtn)}
              type="button"
              onClick={setEditedItem}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsItemMobile;
