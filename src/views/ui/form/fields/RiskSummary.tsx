import * as React from 'react'

import { connect } from 'react-redux'

import { AppState } from 'models/app'

import { _evaluateRisk } from 'helpers/components/EvaluateRisk'

interface Connected {
  summary: any
}

interface Props {
  content: any
  label: string
}

const RiskSummary: React.FC<Props & Connected> = (props: Props & Connected) => {

  const {
    summary,
    content
  } = props

  return (
    <div className="riskSummary">
      <div className="box">
        <section className="icons">
          {_evaluateRisk(summary, content.riskName)}
        </section>
      </div>
    </div>
  )
}

const mapToState = (state: AppState, props: Props) => ({
  summary: [state.form[props.content.dependencies[0] || null], state.form[props.content.dependencies[1] || null]]
})

export default connect(mapToState)(RiskSummary)
