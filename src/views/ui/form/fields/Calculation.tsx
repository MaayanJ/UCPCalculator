//* no-eval
import * as React from 'react'

import { connect } from 'react-redux'

import { AppState } from 'models/app'
import { HourglassIcon } from 'views/ui/icons/HourglassIcon'

interface Props {
  content: any
}

interface Connected {
  found: any
}

const Calculation: React.FC<Props & Connected> = (props: Props & Connected) => {

  const {
    found,
    content
  } = props

  const {
    dependencies,
    formula,
    resultType,
    float
  } = content

  function _renderFormula(dependencies: string[], formula: string, matched: any, resultType: string, float: number) {
    let temp = formula

    dependencies.map((_depend, index) => temp = temp.replace(new RegExp(`\\{${index}}`, 'g'), matched[index] || 0))

    let sanitize = temp.replace(/[^-()\d/*+^.]/g, '')
    // eslint-disable-next-line
    let calculated = eval(sanitize)

    if (resultType === 'percentage')
      calculated = (calculated * 100)

    if (float !== null) calculated = calculated.toFixed(float)

    return _renderResult(calculated)
  }

  function _renderResult(calculated: any) {
    if (isNaN(calculated)) return <HourglassIcon />

    return `${calculated} ${resultType === 'percentage' && '%'}`
  }

  return (
    <h4 className="calculationResult">
      {_renderFormula(dependencies, formula, found, resultType, float)}
    </h4>
  )
}

const mapState = (state: AppState, props: Props) => ({
  found: props.content.dependencies ? props.content.dependencies.map((dependency: string) => {
    return state.form[dependency]
  }) : null
})

export default connect(mapState)(Calculation)
