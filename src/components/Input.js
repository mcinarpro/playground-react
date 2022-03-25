import { useController, useFormContext } from "react-hook-form";

const InputControl = ({ name, ...props }) => {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: "required" },
    defaultValue: "",
  });

  return (
    <>
      <input {...props} {...field} />
      {error && <div>{error.message}</div>}
    </>
  );
};

export default InputControl;
