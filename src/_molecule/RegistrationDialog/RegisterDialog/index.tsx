import React from 'react'
import DialogModel from "../../../_molecule/Dialog";
import tick from "../../../images/tick-mark.png";
import { Button } from "../../../_atom/Buttons/styled";

const RegisterDialog = () => {
  return (
    <DialogModel header="Custom Header 1" size="50vw">
    <div >
    <img src={tick} alt="icon" />
    <h1>Academy Register Successfully</h1>
    <p>
    Your Registration Confirmed! Regitrar, check your inbox for a confirmation
    email with all the details.
    </p>
    <hr />
    <Button>Continue</Button>
    </div>
  </DialogModel>
  )
}

export default RegisterDialog