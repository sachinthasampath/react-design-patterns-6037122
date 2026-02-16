import React from "react";

export const UnControlledForm = () => {

  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hariColorInput = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value, ageInput.current.value, hariColorInput.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="number" placeholder="Age" ref={ageInput} />
      <input name="hariColor" type="text" placeholder="Hari Color" ref={hariColorInput} />
      <button type="submit">Submit</button>
    </form>)
}

export default UnControlledForm;