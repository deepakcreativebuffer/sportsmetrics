import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { toast } from "react-hot-toast";
// import { Error } from "../../api/Error";
import {
  LoginPageDiv,
  LoginWrapper,
  BubbleWrapper,
  BubbleImage,
  LoginColumn,
  LoginBody,
  FormWrapper,
  FormBody,
  FormBodyInner,
  FormTitle,
  // BubbleWrapperSecond,
  // BubbleImageSecond,
  Title,
  Divider,
  SignupButton,
} from "./styled";
// import AppIcon from "../../../src/ImagesIcons/AppIcon";
// import Bubble from "../../../src/ImagesIcons/bubble.png";
// import Bubble2 from "../../../src/ImagesIcons/bubble2.png";
import FormField from "../../_molecule/FormField";
import { FilledButton } from "../../_atom/Buttons";
// import IconText from "../../_molecule/IconText";
import { FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
// import { useGetloginMutation } from "../../api/loginApi";
// import Cookies from "js-cookie";
import { API, FormValues } from "./types";
import AuthHeader from "../../_molecule/AuthHeader";
import user from "../../images/user-icon.png";
import addtheRate from "../../images/adddrate-cion.png"
import passIcon from "../../images/lock-icon.png"
import teleIcon from "../../images/phone-cion.png"
import passViewIcon from "../../images/eye-icon.png" 
import gmail from "../../images/gmail.png";

const LoginPage = () => {
  const navigate = useNavigate();
  // const [saveLoginData] = useGetloginMutation();
  const [initialValues, setInitialValues] = useState<FormValues>({
    firstName: '',  
    lastName: '', 
    email: '',
    phone:'',
    password: ''
  });

  useEffect(() => {
    // const token = Cookies.get("authToken");
    // if (token) {
    //   navigate("/customers");
    // }
  }, []);

  const validationSchema = Yup.object().shape({
    // firstName: Yup.string().required("Please enter firstname"),
    // lastName: Yup.string().required("Please enter lastName"),
    // email: Yup.string().email("Please enter valid email").required("Please enter email"),
    // phone : Yup.string().required("Please enter phone number"),
    // password: Yup.string().required("Please enter password"),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    // try {
    //   const { data } = await axios_api.post('/tenant/register', values);
    //   setSubmitting(false);
    //   window.open(`${BACKEND_URL}signin/${data?.data?.data?.slug}`, "_self");
    // } catch (err) {
    //   setSubmitting(false);
    //   return Error(err?.response);
    // }

    // const promise = saveLoginData({ ...values });

    // toast.promise<API>(promise as Promise<API>, {
    //   loading: "Loading",
    //   success: (data: API) => {
    //     setSubmitting(false);
    //     const token = data.data.data.token;
    //     Cookies.set("authToken", token, { expires: 10 / 24 });
    //     if ("error" in data && data.error) {
    //       throw data.error;
    //     }
    //     navigate("/customers");
    //     return "login successfully";
    //   },
    //   error: (err: any): any => {
    //     setSubmitting(false);
    //     return Error(err);
    //   },
    // });
    navigate("/step")
    resetForm();
  };

  return (
    <>
    <AuthHeader />
    <LoginPageDiv>
      <LoginWrapper>
      <LoginColumn>
          <LoginBody>
            <FormWrapper>
              <FormBody>
                <FormBodyInner>
                  <FormTitle>Academy Sign Up</FormTitle>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    >
                    {({ isSubmitting, isValid }) => (
                      <Form>
                        <FormField
                          placeholder="Academy Director First Name"
                          name="firstName"
                          fieldName="firstName"
                          required
                          labelicon={user}
                        />
                            <FormField
                          placeholder="Academy Director Last Name"
                          name="lastName"
                          fieldName="lastName"
                          required
                          labelicon={user}
                        />
                            <FormField
                          placeholder="Academy Director Email"
                          name="email"
                          fieldName="Email"
                          required
                          labelicon={addtheRate}
                        />
                          <FormField
                          placeholder="Academy Director Phone No"
                          name="phone"
                          fieldName="Phone"
                          required
                          labelicon={teleIcon}
                        />
                        <FormField
                          // tooltip="Should consist of alphanumeric characters and be between 3-50 characters long"
                          placeholder="Password"
                          type="password"
                          name="password"
                          fieldName="Password"
                          required
                          labelicon={passIcon}
                          passicon={passViewIcon}
                        />
                        <FilledButton
                          disabled={!isValid || isSubmitting}
                          type="submit"
                          style={{ marginTop: "35px", width: "100%" }}
                          content="Sign Up"
                        />
                      </Form>
                    )}
                  </Formik>
                  <Divider className="md-3">
                    <p className="hr-line"><span>Or</span></p>
                </Divider>
                <SignupButton>
                <button type="submit" className="btn g-btn"><img src={gmail} className="me-2" alt="googleIcon" />
                Sign Up with Google</button>
                </SignupButton>
                </FormBodyInner>
              
              </FormBody>
            </FormWrapper>
          </LoginBody>
        </LoginColumn>
      </LoginWrapper>
    </LoginPageDiv>
    </>
  );
};

export default LoginPage;
