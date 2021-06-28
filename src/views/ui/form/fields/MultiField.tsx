import * as React from 'react'

import { connect } from 'react-redux'

import { UpdateForm, updateForm } from 'controllers/formController'

import { AppState } from 'models/app'

interface Props {
  value: any
  id: string
  content: any
}

interface Connected {
  updateForm: UpdateForm
  alignmentsSelected: number
}

const MultiField: React.SFC<Props & Connected> = (props: Props & Connected) => {

  const {
    value,
    id,
    updateForm,
    alignmentsSelected
  } = props

  function _checkHelper() {
    if (value[0]) {
      updateForm(id, [!value[0], value[1], value[2]] )
      updateForm('alignmentsSelected', alignmentsSelected - 1)
    } else if (!value[0]) {
      if (alignmentsSelected < 3) {
        updateForm(id, [!value[0], value[1], value[2]] )
        updateForm('alignmentsSelected', alignmentsSelected + 1)
      } else return
    }
  }

  return (
    <section className="multiField">

      <label>
        <input type="checkbox" checked={ value[0] } onChange={ _checkHelper } />
        <span className="customCheck"></span>
        <textarea
            onChange={ (e) => updateForm(id, [value[0], value[1], e.target.value])}
            value={ value[2] }
            name={ id }
            className="customValue">
          </textarea>
      </label>


      <div className="selectContainer">
        <select onChange={ (e) => updateForm(id, [value[0], e.currentTarget.value, value[2]])}>
          <option value={ 1 }>Low</option>
          <option value={ 2 }>Medium</option>
          <option value={ 3 }>High</option>
        </select>
      </div>
    </section>
  )
}

const mapDispatch = {
  updateForm
}

const mapToState = (state: AppState) => ({
  alignmentsSelected: state.form.alignmentsSelected || 0
})

export default connect(mapToState, mapDispatch)(MultiField)
