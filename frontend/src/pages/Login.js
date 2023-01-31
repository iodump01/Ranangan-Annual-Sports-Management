import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GithubIcon, TwitterIcon } from "../icons";
import { Label, Input, Button } from "@windmill/react-ui";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../actions/userActions";
import { useAlert } from "react-alert";
import Loader from "../components/Loader";

function Login() {
  const { user, error, loading, isLoggedIn } = useSelector(
    (state) => state.user
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({});
  const dispatch = useDispatch();
  const alert = useAlert();
  let navigate = useNavigate();

  const handleLogin = () => {
    if (email.length < 1) {
      return setValidation({
        email: "Please enter email address",
      });
    }else{
      setValidation({
        email: false,
      });
    }
    if (password.length < 1) {
      return setValidation({
        password: "Please enter password",
      });
    }else{
      setValidation({
        password: false,
      });
    }
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isLoggedIn) {
      navigate("/app");
    }
  }, [error, dispatch, alert, isLoggedIn]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
          <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div className="flex flex-col overflow-y-auto md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2">
                <img
                  aria-hidden="true"
                  className="object-cover w-full h-full dark:hidden"
                  src="https://wallpapercave.com/dwp1x/wp2688732.jpg"
                  alt="Office"
                />
                <img
                  aria-hidden="true"
                  className="hidden object-cover w-full h-full dark:block"
                  src="https://wallpapercave.com/dwp1x/wp2688723.jpg"
                  alt="Office"
                />
              </div>
              <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full">
                  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                    Login
                  </h1>
                  <Label>
                    <span>Email</span>
                    <Input
                      className="mt-1"
                      valid={!validation.email}
                      type="email"
                      placeholder="john@doe.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {validation?.email && 
                    <span className="text-red-500 mt-2">{validation.email}</span>
                    }
                  </Label>

                  <Label className="mt-4">
                    <span>Password</span>
                    <Input
                      className="mt-1"
                      valid={!validation.password}
                      type="password"
                      placeholder="***************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {validation?.password && 
                    <span className="text-red-500 mt-2">{validation.password}</span>
                    }
                  </Label>

                  <Button className="mt-4" onClick={handleLogin}>
                    Log in
                  </Button>

                  <hr className="my-8" />

                  <Button block layout="outline">
                    <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                    Github
                  </Button>
                  <Button className="mt-4" block layout="outline">
                    <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                    Twitter
                  </Button>

                  <p className="mt-4">
                    <Link
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                      to="/forgot-password"
                    >
                      Forgot your password?
                    </Link>
                  </p>
                  <p className="mt-1">
                    <Link
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                      to="/create-account"
                    >
                      Create account
                    </Link>
                  </p>
                </div>
              </main>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Login;
