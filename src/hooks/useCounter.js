import {useState} from "react";

const useCounter = (initialValue = 0) => {

  const [counter, setCounter] = useState(initialValue);

  const addValue = (value = 1) => {
    setCounter(counter + value)
  }

  const subValue = (value = 1) => {
    if(counter === 0) return;
    setCounter(counter - value);
  }

  const resetValue = (value = 0) => {
    setCounter(value);
  }


  return {
    counter,
    addValue,
    subValue,
    resetValue
  }
}

export default useCounter;