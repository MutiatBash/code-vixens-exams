import styled from "styled-components";
import { useForm } from "react-hook-form";

// STYLING
const Form = styled.form`
  max-width: 500px;
  display: flex;
  border: none;
  border-radius: 6px;
  box-shadow: 1px 2px 20px rgb(223, 230, 242);
  margin: 2rem auto;
  padding: 3rem 5rem;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-items: space-between;
`;
const Label = styled.label`
  text-align: left;
  font-weight: 700;
`;
const Input = styled.input`
  border-radius: 3px;
  border: 1px solid black;
  padding: 0.7rem 6rem 0.7rem 0.8rem;
`;
const Button = styled.button`
  background-color: purple;
  border: none;
  display: flex;
  margin: 1rem auto;
  font-weight: 600;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  padding: 1rem 4rem;
  color: white;
`;
const Head = styled.h1`
  font-size: 1.8rem;
  margin-top: 0;
`;
const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Errormsg = styled.span`
  color: red;
  font-size: 0.8rem;
  padding: 0;
  margin: 0;
  font-weight: 600;
  text-align: right;
`;
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    alert("Registration successful");
  };

  const password = watch("password");
  const confirmPassword = watch("confirmpassword");
  return (
    <div className="form">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Head>Registration Form</Head>
        <Field>
          <Label htmlFor="FirstName">First Name: </Label>
          <Input
            type="text"
            name="firstname"
            placeholder="First Name"
            {...register("firstname", {
              required: "required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "invalid input, numbers and characters not allowed",
              },
            })}
          />
        </Field>
        {errors.firstname && <Errormsg>{errors.firstname.message}</Errormsg>}
        <Field>
          <Label htmlFor="lastName">Last Name: </Label>
          <Input
            type="text"
            name="lastname"
            placeholder="Last Name"
            {...register("lastname", {
              required: "required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "invalid input, numbers and characters not allowed",
              },
            })}
          />
        </Field>
        {errors.lastname && <Errormsg>{errors.lastname.message}</Errormsg>}
        <Field>
          <Label htmlFor="email">Email address: </Label>

          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "invalid email format",
              },
            })}
          />
        </Field>
        {errors.email && <Errormsg>{errors.email.message}</Errormsg>}
        <Field>
          <Label htmlFor="password">Password: </Label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: "required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characers",
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
              },
            })}
          />
        </Field>
        {errors.password && <Errormsg>{errors.password.message}</Errormsg>}
        <Field>
          <Label htmlFor="password"> Confirm password: </Label>
          <Input
            type="password"
            name="confirmpassword"
            placeholder=" Confirm password"
            {...register("confirmpassword", {
              required: "required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characers",
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
              },
            })}
          />
        </Field>
        {errors.confirmpassword && (
          <Errormsg>{errors.confirmpassword.message}</Errormsg>
        )}
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationForm;
