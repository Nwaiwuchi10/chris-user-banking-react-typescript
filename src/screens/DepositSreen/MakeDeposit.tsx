import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import deposit from "../../assets/Images/deposit.jpg";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Container } from "react-bootstrap";
import { DepositApi, UserLoginApi } from "../../Data/Api";
import { Deposit, UserLogin } from "../../Data/DataTypes";
import CircularIndeterminate from "../../components/Loader/Loader";
import UserDashboard from "../UserScreen/UserDashboard/UserDashboard";
type Props = {};

const MakeDeposit: React.FC = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userId");
  const [amount, setAmount] = useState(Number);

  const [userId, setUserId] = useState(localStorage.getItem("userId") as any);

  const [loading, setLoading] = useState(false);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };

  //////

  /////
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: Deposit = {
      amount: amount,
      userId: userId,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(DepositApi + user, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setAmount(Number);
          setUserId("");

          // localStorage.setItem("email", res.data.email);
          // localStorage.setItem("userId", res.data._id);

          // localStorage.setItem("Token", res.data.token);
          console.log(res.data);
          toast.success("post sucessful");
          navigate("/makeWithdrawal");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          "Failed to create a post, check your network connection or input the correct textfields"
        );
      });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="col mb-4 field">
          <TextField
            className="input-label-input-dash"
            required
            rows={4}
            id="outlined-required"
            label="Amount "
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
        </div>
        {loading ? (
          <CircularIndeterminate />
        ) : (
          <div className="use-button">
            <Button
              className="div-btn-btn-dash"
              variant="contained"
              onSubmit={handleLoader}
              type="submit"
            >
              Make a Deposit
            </Button>
            <ToastContainer />
          </div>
        )}
      </form>
    </div>
  );
};

export default MakeDeposit;
