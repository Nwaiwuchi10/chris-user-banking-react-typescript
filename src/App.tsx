import React from "react";

import "./App.css";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegisterScreen from "./screens/RegisterScreen/Register";
import DepositScreen from "./screens/DepositSreen/DepositSreen";
import Withdrawal from "./screens/WithdrawalScreen/Withdrawal";
import UserTransactHistory from "./screens/TransactionHistory/UserTransactHistory";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/makeDeposit" element={<DepositScreen />} />
        <Route path="/makeWithdrawal" element={<Withdrawal />} />
        <Route path="/history" element={<UserTransactHistory />} />
      </Routes>
    </div>
  );
}

export default App;
