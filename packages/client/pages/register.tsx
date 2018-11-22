import { Button, Form } from "semantic-ui-react";
import { Formik, Field } from "formik";
import { registerSchema } from "@personalblog/common";

import { InputField } from "../components/formik-fields/InputField";
import { ErrorMessage } from "../components/ErrorMessage";

import { normalizeErrors } from "../utils/normalizeErrors";
import { registerMutation } from "../graphql/user/mutation/register";
import {
  RegisterMutation,
  RegisterMutationVariables
} from "../lib/schema-types";
import { Mutation } from "react-apollo";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

export default () => (
  <Mutation<RegisterMutation, RegisterMutationVariables>
    mutation={registerMutation}
  >
    {mutate => (
      <Formik<FormValues>
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={async (input, { setErrors, setSubmitting }) => {
          const response = await mutate({
            variables: { input }
          });
          console.log("register Response", response);
          if (response && response.data && response.data.register.errors) {
            setSubmitting(false);
            return setErrors(normalizeErrors(response.data.register.errors));
          } else {
            //navigate screen
          }
        }}
        validationSchema={registerSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="username"
              label="Username"
              placeholder="Username"
              component={InputField}
            />
            <Field
              name="email"
              label="Email"
              placeholder="Email"
              component={InputField}
            />
            <Field
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              component={InputField}
            />
            <Button type="submit">Create Account</Button>
            <ErrorMessage errors={errors} />
          </Form>
        )}
      </Formik>
    )}
  </Mutation>
);
