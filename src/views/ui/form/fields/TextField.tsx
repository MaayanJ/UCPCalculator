import * as React from 'react'

import { SupportedFormEvent } from 'models/formstate'

interface Props {
  type: string
  value: string
  handler: (e: SupportedFormEvent) => void
  content: any
}

const TextField: React.SFC<Props> = (props: Props) => {

  const {
    value,
    type,
    handler,
    content
  } = props

  const {
    max
  } = content

  return (
    <textarea 
      className={ `${ (value === null || value === '') || 'hasContent' } ${ type === 'lg_text' ? 'lg_text' : 'sm_text' }` } 
      maxLength={ max || null } 
      onChange={ handler } 
      value={ value }
    ></textarea>
  )
}

export default TextField
