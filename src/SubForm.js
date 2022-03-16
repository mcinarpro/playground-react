import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import InputControl from './components/Input';

function SubForm() {
  const formMethods = useForm();
  
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit((data) => console.log(data))}>
        <InputControl type="text" name="test" placeholder="test" />
        <input type="file" {...formMethods.register("file")} />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

export default SubForm