import { useEffect, useRef, useState } from "react";
import Modal from "./components/Modal";
import Todo from "./components/ToDo";
import useDebounce from "../hooks/useDebounce";

function App() {
  // const [showModal, setShowModal] = useState(true);

  const inputRef = useRef(null);
  const [input, setInput] = useState("");

  const fetchData = () => {
    console.log("Fetched Data...");
  };

  const debounceValue = useDebounce(fetchData, 1000);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    debounceValue();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Show Modal</button> */}
      {/* <Todo /> */}
      {/* <Modal isOpen={showModal} closeModal={() => setShowModal(false)} /> */}

      <input
        ref={inputRef}
        onChange={handleInputChange}
        value={input}
        type="text"
      />
    </>
  );
}

export default App;
