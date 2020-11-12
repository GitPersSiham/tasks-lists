import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaLong = () => (
    <div className="textarea-long">
  <Form>
  <h4>description détaillé de la tache</h4> 
    <TextArea placeholder='Tell us more' style={{ minHeight: 100 , minWidth: 600 }} />
  </Form>
  </div>
)

export default TextAreaLong