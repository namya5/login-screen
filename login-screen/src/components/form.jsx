import React from "react";
import Input from "./input";

function Form(props)
{
    return (<form className="form">
    <Input text = "username" placeholder="Username"/>
    <Input text = "password" placeholder="Password"/>
    {!props.isRegistered && <Input text = "password" placeholder="Confirm Password"/> }
    <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
  </form>);
}

export default Form;