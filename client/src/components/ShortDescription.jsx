import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaShort = () => (
    <div className="textarea-short">
  <Form>
    <h4>Courte description de la tache</h4>
    <span className="star">*</span> <TextArea className="textArea" rows={2} placeholder='Tell us more' />
  </Form>
  </div>
)

export default TextAreaShort