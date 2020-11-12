import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Ajouter une nouvelle tache
        </label>
      </h4>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Ajouter
      </button>
    </form>
    
  );
}

export default Form;