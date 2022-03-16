import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import InputControl from "./components/Input";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import SubForm from "./SubForm";

function App() {
  const [showForm2, setShowForm2] = useState(false);
  const formMethods = useForm();
  const formMethods2 = useForm();

  return (
    <div className="App">
    <button onClick={() => setShowForm2(!showForm2)}>Toggle Form 2</button>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit((data) => console.log(data))}>
          <InputControl type="text" name="username" placeholder="username" />
          <input type="submit" />
        </form>
      </FormProvider>
      {showForm2 && (
        <FormProvider {...formMethods2}>
          <form onSubmit={formMethods2.handleSubmit((data) => console.log(data))}>
            <InputControl type="email" name="email" placeholder="email" />
            <InputControl type="password" name="password" placeholder="password" />
            <input type="submit" />
          </form>
        </FormProvider>
      )}
      <SubForm />
    </div>
  );
}

export default App;
