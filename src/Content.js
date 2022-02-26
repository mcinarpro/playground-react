import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Mehmet");
  const [counter, setCounter] = useState(0);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Mehmet"];
    const random = Math.floor(Math.random() * 3);
    setName(names[random]);
  };

  const handleCounterChange = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    console.log(counter);
  };

  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleCounterChange}>Change Counter</button>
    </main>
  );
};

export default Content;
