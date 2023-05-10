import React, { useEffect, useState } from "react";
import UserDashboard from "../UserDashboard/UserDashboard";
import { FiUsers } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineReconciliation } from "react-icons/ai";
import { BsDatabaseFill, BsDatabaseFillAdd } from "react-icons/bs";
import "./style.css";
import { FaHandHoldingMedical } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { DepositApi, GetUsersApi, WithdrawalApi } from "../../../Data/Api";
import { useNavigate } from "react-router-dom";
import { Deposit } from "../../../Data/DataTypes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import CircularIndeterminate from "../../../components/Loader/Loader";
import MakeDeposit from "../../DepositSreen/MakeDeposit";
const UserProfile = () => {
  const user = localStorage.getItem("Name");
  const id = localStorage.getItem("userId");
  const [userIdData, setUserIdData] = useState({} as any);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(GetUsersApi + id);
      console.log(data);
      setUserIdData(data);
    };

    fetchPosts();
  }, [id]);
  const navigate = useNavigate();
  const userData = localStorage.getItem("userId");
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
      .post(WithdrawalApi + userData, data, headers)

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
          navigate("/makeDeposit");
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
    <UserDashboard>
      <div className="main-profile-div">
        <div
          style={{
            paddingTop: "20px",
            marginBottom: "20px",
            fontSize: "x-large",
            textAlign: "center",
          }}
        >
          Hello {user}, Welcome to your Dashboard
        </div>
        <div className="div-flex-border-c">
          <div className="user-border">
            <div>
              <div>Total Deposit</div>
              <p className="write-up">$600</p>
            </div>
            <div>
              {" "}
              <FaHandHoldingMedical
                style={{ color: "#5718FF" }}
                className="hold-icon"
              />
            </div>
          </div>
          <div className="user-border">
            <div>
              <div>Total Withdrawal</div>
              <p className="write-up">$600</p>
            </div>
            <div>
              {" "}
              <BiMoneyWithdraw
                style={{ color: "#F55F44" }}
                className="hold-icon"
              />
            </div>
          </div>
          <div className="user-border">
            <div>
              <div>Total Balance</div>
              <p className="write-up">${userIdData.accountBalance} </p>
            </div>
            <div>
              {" "}
              <BsDatabaseFillAdd
                style={{ color: "#FF3366" }}
                className="hold-icon"
              />
            </div>
          </div>
        </div>
        <div className="div-flex-border-c">
          <div className="trans-border">
            <div className="deposit">Deposit</div>
            <MakeDeposit />
          </div>
          <div className="trans-border">
            <div className="deposit">Withdrawal</div>
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
                    Make a Withdrawal
                  </Button>
                  <ToastContainer />
                </div>
              )}
            </form>
          </div>
          <div className="trans-border">
            <div className="deposit">Transaction History</div>
            <div className="col mb-4 field">
              <TextField
                className="input-label-input-dash"
                required
                rows={4}
                id="outlined-required"
                label="Select Date "
                type="date"
              />
            </div>

            <div className="use-button">
              <Button className="div-btn-btn-dash" variant="contained">
                View Transactions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </UserDashboard>
  );
};

export default UserProfile;
