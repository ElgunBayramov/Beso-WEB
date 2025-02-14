import React from "react";
import { useFormik } from "formik";
// import { registerFormSchemas } from "../schemas/RegisterFormSchemas";
import loginPage from "../../assets/Images/header-images/Frame 1321314682.png";
import appIcon from "../../assets/Images/BesoLogIcon/App 2.png";
import "./Login.css";

function Login() {
  const submit = (values, action) => {
    console.log(values);
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
        term: "",
      },
      // validationSchema: registerFormSchemas,
      onSubmit: submit,
    });

  return (
    <div className="LoginPage">
      <div className="firstDiv">
        <div>
          <img src={appIcon} alt="" />
        </div>
        <h3>Get Started</h3>
        <p>Welcome to Beso - Let’s create your account.</p>
        <div className="horizontal"></div>
        <div className="form-container">
          <form className="styled-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              id="email"
              // placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* {touched.email && errors.email && <p>{errors.email}</p>} */}
            <br />
            <label>Password</label>
            <input
              type="password"
              id="password"
              // placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* {touched.password && errors.password && <p>{errors.password}</p>} */}
            <p>Forgot password ?</p>

            <button type="submit">Sign up</button>
            <div
              className="info"
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "#767676",
              }}
            >
              Already have an account?{" "}
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Log in
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="secondDiv">
        <img
          style={{ width: "689px", height: "964px" }}
          src={loginPage}
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
