import React from "react";
import DialogModel from "../../../_molecule/Dialog";
import tick from "../../../images/tick-mark.png";
import { Button } from "../../../_atom/Buttons/styled";
const SignupDialog = () => {
  return (
    <DialogModel header="Custom Header 1" size="50vw">
      <div >
      <img src={tick} alt="icon" />
      <h1>Sign Up Successfully</h1>
      <p>
        To provide additional information about the academy and sports-related
        details, kindly proceed by selecting the "Continue" button.
      </p>
      <hr />
      <Button>Continue</Button>
      </div>
    </DialogModel>
  );
};

export default SignupDialog;
