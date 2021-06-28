import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from 'models/app'
import { FormState } from 'models/formstate'
import { _evaluateRisk } from 'helpers/components/EvaluateRisk'

interface Connected {
  form: FormState
}

const Summary: React.FC<Connected> = ({ form }) => {

  const evalOne = _evaluateRisk([form['strategicProbability'], form['strategicImpact']], 'Strategic')
  const evalTwo = _evaluateRisk([form['complianceProbability'], form['complianceImpact']], 'Compliance')
  const evalThree = _evaluateRisk([form['financialProbability'], form['financialImpact']], 'Financial')
  const evalFour = _evaluateRisk([form['reputationalProbability'], form['reputationalImpact']], 'Other')

  return (
    <div className="summary">
      <div className="box">
        <section className="icons">
          {evalOne}
        </section>
      </div>
      <div className="box">
        <section className="icons">
          {evalTwo}
        </section>
      </div>
      <div className="box">
        <section className="icons">
          {evalThree}
        </section>
      </div>
      <div className="box">
        <section className="icons">
          {evalFour}
        </section>
      </div>
    </div>
  )
}

const mapToState = (state: AppState): Connected => ({
  form: state.form
})

export default connect(mapToState)(Summary)
