import { useEffect, useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeTab from "./pages/HomeTab/HomeTab";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CurrencyTab from "./pages/CurrencyTab/CurrencyTab";
import StatisticsTab from "./pages/StatisticsTab/StatisticsTab";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUserThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  const refreshPending = useSelector(selectIsRefreshing);

  return refreshPending ? (
    <b style={{ color: "#000" }}>Refreshing user...</b>
  ) : (
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
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
export default App;
