import { Form, Input } from "semantic-ui-react";

export const InputField = ({
  field,
  form: { touched, errors },
  label,
  ...props
}) => {
  const hasError = !!(touched[field.name] && errors[field.name]);
  return (
    <Form.Field error={hasError}>
      <label>{label}</label>
      <Input error={hasError} {...field} {...props} />
    </Form.Field>
  );
};
