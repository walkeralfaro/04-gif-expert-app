import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onInputSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onInputSubmit}>
      <input
        type="text"
        placeholder="Search Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
