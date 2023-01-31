import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";

const Logout = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(logout());
    if (isLoggedIn) alert.success("Logout successfully");
    navigate("/");
  }, []);
  return <div>Logout</div>;
};

export default Logout;
