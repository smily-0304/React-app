import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import Text from "./text";
import TextComponent from "./text";
import ButtonComponent from "./button";

const UseCallbackEx = () => {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(10000);
  const ageIncrement = useCallback(() => {
    setAge(age + 5);
  }, [age]);

  const salaryIncrement = useCallback(() => {
    setSalary(salary + 500);
  }, [salary]);

  return (
    <>
      <TextComponent text={age} />
      <ButtonComponent handleChange={ageIncrement} title="+age" />
      <TextComponent text={salary} />
      <ButtonComponent handleChange={salaryIncrement} title="increment" />
    </>
  );
};
export default UseCallbackEx;
