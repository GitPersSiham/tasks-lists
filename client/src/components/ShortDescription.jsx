import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaShort = () => (
    <div className="textarea-short">
  <Form>
    <h2>Courte description de la tache</h2>
    <span className="star">*</span> <TextArea className="textArea" rows={2} placeholder='Tell us more' />
  </Form>
  </div>
)

export default TextAreaShort