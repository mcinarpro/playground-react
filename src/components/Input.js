import { useFormContext } from "react-hook-form";

const InputControl = ({ name, ...props }) => {
  const { register } = useFormContext();

  return <input {...props} {...register(name)} />;
};

export default InputControl;