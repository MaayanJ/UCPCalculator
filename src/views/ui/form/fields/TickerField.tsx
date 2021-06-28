import * as React from 'react'
import { SupportedFormEvent } from 'models/formstate';

interface Props {
  value: any
  handler: (e: SupportedFormEvent) => void
  increment: (id: string, value: any) => void
  id: string
}

const TickerField: React.SFC<Props> = (props: Props) => {

  const {
    value,
    increment,
    handler,
    id
  } = props


  return (
    <div className="ticker">
      <input onChange={ handler } type="number" name="field1" value={ value } />
      <section className="tickerButtons">
        <button onClick={ () => increment(id, parseInt(value) - 1) }>-</button>
        <button onClick={ () => increment(id, parseInt(value) + 1) }>+</button>
      </section>
    </div>
  )
}

export default TickerField
