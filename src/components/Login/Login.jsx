import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/Preloader/FormControls/FormControls";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"login"} name={"login"} component={Input} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={Input}/>
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit } />
    </div>
  );
};

export default Login;
