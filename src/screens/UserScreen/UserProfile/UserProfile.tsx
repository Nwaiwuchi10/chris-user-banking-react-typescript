import React from "react";
import UserDashboard from "../UserDashboard/UserDashboard";
import { FiUsers } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineReconciliation } from "react-icons/ai";
import { BsDatabaseFill, BsDatabaseFillAdd } from "react-icons/bs";
import "./style.css";
import { FaHandHoldingMedical } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { Button, TextField } from "@mui/material";
const UserProfile = () => {
  //   const user = localStorage.getItem("userId");
  return (
    <UserDashboard>
      <div className="main-profile-div">
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
              <p className="write-up">$600</p>
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
            <div className="col mb-4 field">
              <TextField
                className="input-label-input-dash"
                required
                rows={4}
                id="outlined-required"
                label="Amount "
                type="text"
              />
            </div>

            <div className="use-button">
              <Button className="div-btn-btn-dash" variant="contained">
                Make a Deposit
              </Button>
            </div>
          </div>
          <div className="trans-border">
            <div className="deposit">Withdrawal</div>
            <div className="col mb-4 field">
              <TextField
                className="input-label-input-dash"
                required
                rows={4}
                id="outlined-required"
                label="Amount "
                type="text"
              />
            </div>

            <div className="use-button">
              <Button className="div-btn-btn-dash" variant="contained">
                Make a Withdrawal
              </Button>
            </div>
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
