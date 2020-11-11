import React, { useState } from 'react'

import {
  TextBox,
  DateTime,
  Form,
} from 'react-form-elements'

const Date = () => {
  const [values, setValues] = useState({})

  return (
    <div>
      <h2>Date d'echeance</h2>
      <Form
        name="testForm"
        onSubmit={data => {
          setValues(data)
        }}
      >
        <TextBox label="Titre de la tache" name="myTextBox" />
        <DateTime label="Date de création" name="myDate" />
        <button onClick={e => {}}>Save</button>
      </Form>
      <div data-testid="ref-out">
        <ul>
          <li>Nom de la tache: {values.myTextBox}</li>
          <li>Date: {values.myDate}</li>
        </ul>
      </div>
    </div>
  )
}

export default Date