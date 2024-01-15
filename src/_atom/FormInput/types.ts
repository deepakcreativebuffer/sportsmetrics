import { FieldProps } from "formik";
export interface FormInputProps extends FieldProps {
    tooltip?: string;
    errorMessage?: string;
    labelicon?:string;
    passicon?:string;
  }