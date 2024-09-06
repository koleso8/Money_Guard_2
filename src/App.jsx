import { useEffect, useState } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeTab from './pages/HomeTab/HomeTab';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import CurrencyTab from './pages/CurrencyTab/CurrencyTab';
import StatisticsTab from './pages/StatisticsTab/StatisticsTab';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import Layout from './components/Layout/Layout';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(refreshUserThunk());
  // }, [dispatch]);

  //selectIsRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  return (
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
  );
}
export default App;
