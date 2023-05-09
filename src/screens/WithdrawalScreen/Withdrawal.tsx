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

import deposit from "../../assets/Images/with.jpg";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Container } from "react-bootstrap";
import { UserLoginApi } from "../../Data/Api";
import { Deposit, UserLogin } from "../../Data/DataTypes";
import CircularIndeterminate from "../../components/Loader/Loader";
import UserDashboard from "../UserScreen/UserDashboard/UserDashboard";
type Props = {};
const Withdrawal: React.FC<Props> = () => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");

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
      .post(UserLoginApi, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setAmount("");
          setUserId("");

          // localStorage.setItem("email", res.data.email);
          // localStorage.setItem("userId", res.data._id);

          // localStorage.setItem("Token", res.data.token);
          console.log(res.data);
          toast.success("post sucessful");
          navigate("/");
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
      <div className="userl-div">
        <Container>
          <div
            className="img-background"
            style={{
              backgroundImage: `url(${deposit})`,
            }}
          ></div>
          <div className="form-background-color">
            <div className="form-card">
              <div className=" card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 d-flex justify-content-center">
                  Withdrawal Form
                </h3>
                <p
                  className="d-flex justify-content-center"
                  style={{ marginLeft: "15px" }}
                >
                  *pls all the blanck inputs are been required*
                </p>
                <form onSubmit={submitHandler}>
                  <div className="form-div-input">
                    <div className="col mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        rows={4}
                        id="outlined-required"
                        label="Amount "
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>

                    {loading ? (
                      <CircularIndeterminate />
                    ) : (
                      <div
                        className=""

                        // onClick={handleLoader}
                      >
                        <Button
                          className="div-btn-btn"
                          onSubmit={handleLoader}
                          type="submit"
                          variant="contained"
                        >
                          Make a Withdrawal
                        </Button>
                        <ToastContainer />
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </UserDashboard>
  );
};

export default Withdrawal;
