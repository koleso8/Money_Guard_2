// import { useSelector } from "react-redux";
// import ModalBackdrop from "../../components/ModalBackdrop/ModalBackdrop";
// import Loader from "../../Loader/Loader";
// import { selectIsLoading } from "../../redux/transactions/selector";
import TransactionsList from "../../components/TransactionsList/TransactionsList";

const HomeTab = () => {
  // const loading = useSelector(selectIsLoading());
  return (
    <>
      {/* {selectIsLoading() || (
        <ModalBackdrop>
          <Loader />
        </ModalBackdrop>
      )} */}
      <TransactionsList />
    </>
  );
};

export default HomeTab;
