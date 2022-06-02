import React, { useState } from "react";
import image from "../../assets/imgs/wow.jpg";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import { toast } from "react-toastify";
import { createUser } from "../../api/Auth";
import { useNavigate, Link } from "react-router-dom";
import convertFileToBase64 from "../../utils/convertFileToBase64";
import { updateUser, uploadImage } from "../../api/User";

const SignUpSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  username: yup
    .string()
    .min(3, "Minimum 3 characters")
    .required("Username is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const [base64Image, setBase64Image] = useState<string>("");

  const handleSubmit = async (values: FormikValues) => {
    try {
      convertFileToBase64(values.image)
        .then((base64) => {
          setBase64Image(base64);
        })
        .then(async () => {
          const user = await createUser({
            email: values.email,
            password: values.password,
            username: values.username,
            image: base64Image,
          });
          const uploadedImage = await uploadImage(user.image);
          await updateUser(user._id, { imageUrl: uploadedImage.url });
          toast.success("User created successfully");
          navigate("/auth/login", { replace: true });
        });
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  const SignUpForm = (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
        username: "",
        image: null,
      }}
      validationSchema={SignUpSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className="flex flex-col justify-center p-12 bg-[#014f86] rounded-xl">
          <h1 className="mb-4 text-4xl font-bold">Sign up</h1>
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input-css"
            id="email"
            required
          />
          <ErrorMessage name="email" component="span" className="error" />
          <label htmlFor="">Password</label>
          <Field
            type="password"
            name="password"
            id="password"
            className="input-css"
            required
          />
          <ErrorMessage name="password" component="span" className="error" />
          <label htmlFor="password-confirm">Password Confirm</label>
          <Field
            type="password"
            name="passwordConfirm"
            id="password-confirm"
            className="input-css"
            required
          />
          <ErrorMessage
            name="passwordConfirm"
            component="span"
            className="error"
          />
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            name="username"
            className="input-css"
            id="username"
            required
          />
          <ErrorMessage name="username" component="span" className="error" />
          <label htmlFor="image">Cover picture</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(event) => {
              setFieldValue("image", event.currentTarget.files![0]);
            }}
          />
          {values.image && (
            <img
              src={URL.createObjectURL(values.image)}
              height={60}
              width={60}
            />
          )}
          <button
            className={
              isSubmitting ? "btn bg-matcha disabled" : "btn bg-matcha "
            }
            type="submit"
            disabled={isSubmitting}
          >
            Sign up
          </button>
          <Link
            to={isSubmitting ? "#" : "/auth/login"}
            className={
              isSubmitting
                ? "w-full text-center btn bg-oceanBlue disabled"
                : "w-full text-center btn bg-oceanBlue"
            }
          >
            Sign in
          </Link>
        </Form>
      )}
    </Formik>
  );

  return (
    <div className="h-screen">
      <div className="w-full h-full text-white">
        <div className="h-full flex items-center justify-between px-[150px]">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col gap-1">
              <h1 className="text-5xl font-bold text-oceanBlue">Fakebook</h1>
              <div className="text-2xl font-bold">
                Fakebook is a leading chat app
              </div>
            </div>
            <img
              src={image}
              alt="surprise"
              className="aspect-square h-[200px] rounded-full"
            />
          </div>
          {SignUpForm}
        </div>
      </div>
    </div>
  );
};

export default Signup;
