import React, { useEffect, useState } from "react";

export const ControlledForm = ({ initialName, initialAge, initialHariColor }) => {

  const [name, setName] = useState(initialName || '');
  const [age, setAge] = useState(initialAge || 0);
  const [hariColor, setHariColor] = useState(initialHariColor || '');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (name.length < 3) {
      setError('Name must be at least 3 characters long');
    } else {
      setError(null);
    }
  }, [name])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value, ageInput.current.value, hariColorInput.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input value={name} name="name" type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
      <input value={age} name="age" type="number" placeholder="Age" onChange={e => setAge(e.target.value)} />
      <input value={hariColor} name="hariColor" type="text" placeholder="Hari Color" onChange={e => setHariColor(e.target.value)} />
      <button type="submit">Submit</button>
    </form>)
}

export default ControlledForm;