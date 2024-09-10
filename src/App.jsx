import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loader from './Loader/Loader';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';

import { refreshUserThunk } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

const Layout = lazy(() => import('./components/Layout/Layout'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const HomeTab = lazy(() => import('./pages/HomeTab/HomeTab'));
const CurrencyTab = lazy(() => import('./pages/CurrencyTab/CurrencyTab'));
const StatisticsTab = lazy(() => import('./pages/StatisticsTab/StatisticsTab'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense>
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute redirectTo="/login" component={<Layout />} />}
        >
          <Route index element={<HomeTab />} />
          <Route path="/currency" element={<CurrencyTab />} />
          <Route path="/statistics" element={<StatisticsTab />} />
        </Route>
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/" component={<RegistrationPage />} />
          }
        />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Suspense>
  );
}
export default App;
