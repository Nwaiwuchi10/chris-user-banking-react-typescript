import React, { useEffect, useState } from "react";
import UserDashboard from "../UserScreen/UserDashboard/UserDashboard";
import axios from "axios";
import { GetUsersApi } from "../../Data/Api";

const UserTransactHistory = () => {
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
  return (
    <UserDashboard>
      <>
        <div></div>

        {/* <div>{userIdData.transactions}</div> */}
        <div className="wrapper rounded">
          <nav className="navbar navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start">
            <a className="navbar-brand" href="#">
              Transactions
              <p className="text-muted pl-1">Welcome to your transactions</p>
              <p className="text-muted pl-1">Name:{userIdData.name} </p>
              <p className="text-muted pl-1">
                Account Name:{userIdData.accountName}{" "}
              </p>
              <p className="text-muted pl-1">
                Account Number:{userIdData.accountNumber}{" "}
              </p>
              <p className="text-muted pl-1">
                Bank Name:{userIdData.bankName}{" "}
              </p>
            </a>
          </nav>{" "}
          <div className="d-flex justify-content-between align-items-center mt-3">
            {" "}
            <ul className="nav nav-tabs w-75">
              <li className="nav-item">
                {" "}
                <a className="nav-link active" href="#history">
                  History
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="#">
                  Reports
                </a>{" "}
              </li>{" "}
            </ul>
            <button className="btn btn-primary">New Transaction</button>{" "}
          </div>
          <div className="table-responsive mt-3">
            {" "}
            <table className="table table-dark table-borderless">
              <thead>
                {" "}
                <tr>
                  {" "}
                  <th scope="col">Transaction Type</th>
                  <th scope="col" className="text-right">
                    Amount
                  </th>{" "}
                  <th scope="col">Date</th>{" "}
                </tr>{" "}
              </thead>{" "}
              <tbody>
                {" "}
                {userIdData.transactions?.map((item: any) => (
                  <>
                    <tr>
                      <td scope="row">{item?.transactionType} </td>
                      <td scope="row">{item?.amount} </td>
                      <td scope="row"> {item?.createdAt} </td>
                    </tr>
                  </>
                ))}{" "}
              </tbody>{" "}
            </table>{" "}
          </div>
          <div className="d-flex justify-content-between align-items-center results">
            <span className="pl-md-3">
              Showing
              <b className="text-gray"></b> trasactions
            </span>
            <div className="pt-3">
              {" "}
              <nav aria-label="Page navigation example">
                {" "}
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      {" "}
                      <span aria-hidden="true">&lt;</span>
                    </a>{" "}
                  </li>{" "}
                  <li className="page-item">
                    {" "}
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&gt;</span>{" "}
                    </a>
                  </li>{" "}
                </ul>{" "}
              </nav>{" "}
            </div>{" "}
          </div>
        </div>
      </>
    </UserDashboard>
  );
};

export default UserTransactHistory;
