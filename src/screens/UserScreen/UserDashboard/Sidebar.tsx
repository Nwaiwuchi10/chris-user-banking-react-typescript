import React from "react";

import clipboard from "./imgs/clipboard.png";

import dashboard from "./imgs/home.png";
import loanReq from "./imgs/loanReq.png";

import pigggy from "./imgs/pigggy.png";

import transactions from "./imgs/transaction.png";
import services from "./imgs/services.png";

import loan from "./imgs/Vectorloan.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="ul-list">
        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src={dashboard}
            alt="img"
            style={{
              fontSize: "20px",
            }}
          />
          <div
            style={{
              marginLeft: "5px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Dashboard
            </Link>
          </div>
        </li>

        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src={loan}
            alt="img"
            style={{
              fontSize: "20px",
            }}
          />
          <div> Loans</div>
        </li>

        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src={pigggy}
            alt="img"
            style={{
              fontSize: "20px",
            }}
          />

          <div>
            <Link
              to="/makeDeposit"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Deposit
            </Link>{" "}
          </div>
        </li>
        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src={loanReq}
            alt="img"
            style={{
              fontSize: "20px",
            }}
          />
          <div>
            {" "}
            <Link
              to="/makeWithdrawal"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Withdrawal
            </Link>{" "}
          </div>
        </li>

        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src={transactions}
            alt="img"
            style={{
              fontSize: "20px",
            }}
          />
          <div> Transactions</div>
        </li>
        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src={services}
            alt="img"
            style={{
              fontSize: "20px",
            }}
          />
          <div> Services</div>
        </li>

        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src={services}
            alt="img"
            style={{
              fontSize: "20px",
            }}
          />
          <div>SETTINGS</div>
        </li>

        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src={clipboard}
            alt="img"
            style={{
              fontSize: "20px",
            }}
          />
          <div> Audit Logs</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
