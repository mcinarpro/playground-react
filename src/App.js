import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import InputControl from "./components/Input";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";
import SubForm from "./SubForm";

function App() {
  const [showForm2, setShowForm2] = useState(false);
  const formMethods = useForm();
  const formMethods2 = useForm();

  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: "friends",
  });

  return (
    <div className="App">
      {/* <button onClick={() => setShowForm2(!showForm2)}>Toggle Form 2</button> */}

      <button
        type="button"
        onClick={() => {
          append({ firstName: "new", lastName: "new" });
        }}
      >
        append
      </button>

      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit((data) => console.log(data))}>
          <InputControl type="text" name="username" placeholder="username" />
          <br />
          <ul>
            {fields.map((item, index) => {
              return (
                <li key={item.id}>
                  <InputControl type="text" name={`friends.${index}.firstName`} placeholder="firstName" />
                  <InputControl type="text" name={`friends.${index}.lastName`} placeholder="lastName" />
                  <button type="button" onClick={() => remove(index)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
          <br />

          <input type="submit" />
        </form>
      </FormProvider>
      <br />
      <br />
      {showForm2 && (
        <FormProvider {...formMethods2}>
          <form onSubmit={formMethods2.handleSubmit((data) => console.log(data))}>
            <InputControl type="email" name="email" placeholder="email" />
            <InputControl type="password" name="password" placeholder="password" />
            <br />
            <br />
            <input type="submit" />
          </form>
        </FormProvider>
      )}
      {/* <SubForm /> */}
    </div>
  );
}

export default App;
