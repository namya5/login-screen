import React from "react";
import Form from "./form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
     <h1>Hello</h1>
     <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;