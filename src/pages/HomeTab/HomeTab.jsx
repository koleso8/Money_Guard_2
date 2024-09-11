import TransactionsList from '../../components/TransactionsList/TransactionsList';
import TransactionsListMobile from '../../components/TransactionsList/TransactionsListMobile';
import { useScreenWidth } from '../../hooks/useScreenWidth';

const HomeTab = () => {
  const { isSmallScreen } = useScreenWidth();
  return (
    <>{isSmallScreen ? <TransactionsListMobile /> : <TransactionsList />}</>
  );
};

export default HomeTab;
