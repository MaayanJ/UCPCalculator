import * as React from 'react'

import { connect } from 'react-redux'

import { UpdateForm, updateForm } from 'controllers/formController'

interface Props {
  value: any
  content: any
  id: string
}

interface Connected {
  updateForm: UpdateForm
}

const NumberInput: React.SFC<Props & Connected> = (props: Props & Connected) => {

  const {
    value, 
    id, 
    updateForm
  } = props

  return (
    <input
      type="number"
      value={ value }
      onChange={ (e) => { updateForm(id, Number(e.target.valueAsNumber)) } }
    >
    </input>
  )
}

const mapToState = {
  updateForm
}

export default connect(null, mapToState)(NumberInput)