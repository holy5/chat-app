import image from "../../assets/imgs/wow.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { login } from "../../api/Auth";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const formSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  let navigate = useNavigate();
  const handleSubmit = async (values: any) => {
    try {
      await login({
        email: values.email,
        password: values.password,
      });
      toast.success("Login Successfully");
      navigate("/", { replace: true });
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  const LoginForm = (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ isSubmitting }: { isSubmitting: boolean }) => (
        <Form className="flex flex-col justify-center p-12 bg-[#014f86] rounded-xl">
          <h1 className="mb-4 text-4xl font-bold">Sign in</h1>
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            className="input-css"
            id="email"
            placeholder="Enter your email"
            required
          />
          <ErrorMessage name="email" className="error" component="span" />
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            name="password"
            id="password"
            className="input-css"
            placeholder="Enter your password"
            required
          />
          <ErrorMessage name="password" className="error" component="span" />
          <button
            className={
              isSubmitting ? "btn bg-matcha disabled" : "btn bg-matcha"
            }
            type="submit"
            disabled={isSubmitting}
          >
            Sign in
          </button>
          <Link
            to={isSubmitting ? "#" : "/auth/signup"}
            className={
              isSubmitting
                ? "w-full text-center btn bg-oceanBlue disabled"
                : "w-full text-center btn bg-oceanBlue"
            }
          >
            Sign up
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
          {LoginForm}
        </div>
      </div>
    </div>
  );
};

export default Login;
