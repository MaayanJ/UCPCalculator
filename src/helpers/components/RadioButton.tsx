import * as React from 'react'

export const RadioButton = (props: any) => {

    const {
      option, value, id, handler, label
    } = props
  
    let parsed = [parseInt(option), parseInt(value)]
  
    return (
      <label className="radioButtonContainer">
        { label }
        <input
          name={ id }
          type="radio"
          value={ option }
          onChange={ handler }
          checked={ parsed[0] === parsed[1] }
        ></input>
        <span className="circle"></span>
      </label>
    )
  }