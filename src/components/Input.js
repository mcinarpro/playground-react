import { useFormContext } from "react-hook-form";

const InputControl = ({ name, ...props }) => {
  const { register, control } = useFormContext();
  console.log({control})

  return <input {...props} {...register(name)} />;
};

export default InputControl;