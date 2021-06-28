import * as React from 'react'

import { SupportedFormEvent } from 'models/formstate'

import { RadioButton } from 'helpers/components/RadioButton'

interface Props {
  handler: (e: SupportedFormEvent) => void
  content: any
  value: any
  id: string
  option?: any
  optionsStyle?: number
}

const RadioField: React.SFC<Props> = (props: Props) => {

  const templateRadios = [
    ["0 - Poor", "1 - Low", "2 - Medium", "3 - High", "4 - Very High"],
    ["1 - Low", "2 - Medium", "3 - High"],
    ["Yes", "No"]
  ]

  const {
    id,
    value,
    handler,
    content
  } = props
  
  const {
    optionsStyle
  } = content

  const _renderInputRadios = (optionsStyle: number = 0) => {
    return templateRadios[optionsStyle].map((option, index) => {

      let label = option

      if (optionsStyle > -1)
        label = templateRadios[optionsStyle][index] 

      return (
        <RadioButton 
          key={ index } 
          label={ label } 
          option={ index } 
          id={ id } 
          value={ value }
          handler={ handler }
        />
      )
    })
  }

  return (
    <fieldset className="radio">
      { _renderInputRadios(optionsStyle) }
    </fieldset>
  )
}

export default RadioField
