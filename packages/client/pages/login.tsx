import { Mutation } from "react-apollo";
import { loginMutation } from "../graphql/user/mutation/login";
import { LoginMutationVariables, LoginMutation } from "../lib/schema-types";
import { Formik, Field } from "formik";
import { InputField } from "../components/formik-fields/InputField";
import { Button, Form } from "semantic-ui-react";
import { ErrorMessage } from "../components/ErrorMessage";
import { normalizeErrors } from "../utils/normalizeErrors";

interface FormValues {
  usernameOrEmail: string;
  password: string;
}

export default () => (
  <Mutation<LoginMutation, LoginMutationVariables> mutation={loginMutation}>
    {mutate => (
      <Formik<FormValues>
        initialValues={{
          usernameOrEmail: "",
          password: ""
        }}
        onSubmit={async (input, { setErrors, setSubmitting }) => {
          const response = await mutate({
            variables: { input }
          });
          if (
            response &&
            response.data &&
            response.data.login.errors &&
            response.data.login.errors.length
          ) {
            setSubmitting(false);
            return setErrors(normalizeErrors(response.data.login.errors));
          } else {
            console.log("login Success");
          }
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors, isSubmitting, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="usernameOrEmail"
              label="Username Or Email"
              placeholder="Username Or Email"
              component={InputField}
            />
            <Field
              name="password"
              label="Password"
              placeholder="Password"
              component={InputField}
              type="password"
            />
            <Button type="submit" disabled={isSubmitting}>
              {" "}
              Login{" "}
            </Button>
            <ErrorMessage errors={errors} />
          </Form>
        )}
      </Formik>
    )}
  </Mutation>
);
