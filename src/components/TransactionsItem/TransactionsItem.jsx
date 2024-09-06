import clsx from "clsx";
import { LuPencil } from "react-icons/lu";
import s from "./TransactionsItem.module.css";

const TransactionsItem = ({
  transactionDate,
  type,
  categoryId,
  comment = "",
  amount,
}) => {
  //   const openModalAdd = ({
  //     transactionDate,
  //     type,
  //     categoryId,
  //     comment,
  //     amount,
  //   }) => {
  //     addCurrentTransaction(transactionDate, type, categoryId, comment, amount);
  //     <ModalBackdrop />;
  //   };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}.${month}.${year.slice(-2)}`;
  };

  const sumClass = clsx(s.sum, {
    [s.sumNegative]: type === "-",
    [s.sumPositive]: type === "+",
  });

  return (
    <tr className={clsx(s.itemRow)}>
      <td className={clsx(s.date)}>{formatDate(transactionDate)}</td>
      <td className={clsx(s.type)}>{type}</td>
      <td className={clsx(s.category)}>{categoryId}</td>
      <td className={clsx(s.comment)}>{comment}</td>
      <td className={sumClass}>{amount}</td>
      <td className={clsx(s.btnBox)}>
        <button
          className={clsx(s.editBtn)}
          type="button"
          //   onClick={openModalAdd({
          //     transactionDate,
          //     type,
          //     categoryId,
          //     comment,
          //     amount,
          //   })}
        >
          <LuPencil size={14} color="fff" />
        </button>
        <button className={clsx(s.delBtn)} type="button">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TransactionsItem;
