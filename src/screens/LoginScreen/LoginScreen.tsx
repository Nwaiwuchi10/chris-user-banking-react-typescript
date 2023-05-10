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
import "./style.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import fint from "../../assets/Images/fint.png";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Container } from "react-bootstrap";
import { UserLoginApi } from "../../Data/Api";
import { UserLogin } from "../../Data/DataTypes";
import CircularIndeterminate from "../../components/Loader/Loader";
type Props = {};
const LoginScreen: React.FC<Props> = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
    const data: UserLogin = {
      email: email,
      password: password,
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
          setEmail("");
          setPassword("");
          localStorage.setItem("Name", res.data.name);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("userId", res.data._id);
          localStorage.setItem("AccountNumber", res.data.accoutnNumber);
          localStorage.setItem("AccountName", res.data.accoutnName);
          localStorage.setItem("BankName", res.data.bankName);
          localStorage.setItem("PhoneNumber", res.data.phoneNumber);
          localStorage.setItem("Token", res.data.token);
          localStorage.setItem("isAdmin", res.data.isAdmin);
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
    <div className="userl-div">
      <Container>
        <div
          className="img-background"
          style={{
            backgroundImage: `url(${fint})`,
          }}
        ></div>
        <div className="form-background-color">
          <div className="form-card">
            <div className=" card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 d-flex justify-content-center">
                Login Form
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
                      label="Email Address "
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}

                      //   defaultValue="Match Day"
                    />
                  </div>

                  <div style={{ marginBottom: "15px" }}>
                    <FormControl
                      sx={{ m: 1 }}
                      variant="outlined"
                      className="input-label-input-divs"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
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
                        Login
                      </Button>
                      <ToastContainer />
                    </div>
                  )}
                </div>
              </form>
              <div
                style={{
                  textDecoration: "none",
                  color: "green",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "green",
                  }}
                  to="/register"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginScreen;
