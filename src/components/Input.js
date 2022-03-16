import { useFormContext } from "react-hook-form";

const InputControl = ({ name, ...props }) => {
  const { register, control } = useFormContext();
  console.log("🚀 ~ file: Input.js ~ line 5 ~ InputControl ~ control", control)

  return <input {...props} {...register(name)} />;
};

export default InputControl;