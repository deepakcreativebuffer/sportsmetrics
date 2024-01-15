import styled from "styled-components";
import { InputText, InputTextProps } from 'primereact/inputtext';

interface CustomInputTextProps extends InputTextProps {
  error?: string;
}


export const InputWrapper  = styled.div`
.labelIcon{
  position: absolute;
  margin-top: 17px;
  margin-left: 10px;
}
.passicon{
  position: absolute;
  margin-top: -30px;
  margin-left: 450px;
}
` 
export const TextInput = styled(InputText)<CustomInputTextProps>`
  border-radius: 5px;
  border: ${({ error, theme }) => (error ? `1px solid ${theme.colors.error}` : `1px solid ${theme.colors.formBorder}`)};
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: 11px;
  padding-left:30px;
  height: 50px;
  flex-direction: column;
  &:focus {
    outline: none;
    border: ${({ error, theme }) => (error ? `1px solid ${theme.colors.error}` : `1px solid ${theme.colors.formBorder}`)};
  }
`;
