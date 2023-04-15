import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [expenseObjects, setExpenseObjects] = useState([]);

  interface FormData {
    description: string;
    amount: number;
    category: string;
  }

  // const handleFormSubmit = (data: FormData) => {
  //   setExpenseObjects([...expenseObjects: , data]);
  // };

  return (
    <>
      <Form />
    </>
  );
}

export default App;
