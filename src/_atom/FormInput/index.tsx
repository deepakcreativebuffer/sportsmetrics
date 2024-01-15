import React from "react";
import { InputWrapper, TextInput } from "./styled";
import { FormInputProps } from "./types";
export const FormInput: React.FC<FormInputProps> = ({
  field,
  form,
  tooltip,
  errorMessage,
  labelicon,
  passicon,
  ...props
}) => {

  return labelicon ? (
    <InputWrapper>
      <img className="labelIcon" src={labelicon} alt="icon" />
      <TextInput
        {...field}
        tooltipOptions={{ position: "left" }}
        tooltip={tooltip}
        {...props}
        error={errorMessage}
      />{
        passicon &&
      <img className="passicon" src={passicon} alt="icon" />
      }
    </InputWrapper>
  ) : (
    <TextInput
      {...field}
      tooltipOptions={{ position: "left" }}
      tooltip={tooltip}
      {...props}
      error={errorMessage}
    />
  );
};
