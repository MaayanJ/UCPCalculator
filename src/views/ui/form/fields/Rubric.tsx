import * as React from 'react'

import { connect } from 'react-redux'

import { AppState } from 'models/app'

import { evaluateCalculation } from 'helpers/EvaluateCalculation'

import { updateForm, UpdateForm } from 'controllers/formController'

interface Connected {
  form: any
  updateForm: UpdateForm
}

const Rubric: React.SFC<Connected> = (props) => {

  const {
    form,
    updateForm
  } = props

  const earnedOne = evaluateCalculation(form, ['alignmentOne', 'alignmentTwo', 'alignmentThree', 'alignmentFour']) / 4
  const earnedTwo = evaluateCalculation(form, ['disruptiveness', 'productMarketFit', 'testability', 'overheadResource'])
  const earnedThree = evaluateCalculation(form, ['speedToProductionStage', 'flexibilityToPivot'])
  const earnedFour = evaluateCalculation(form, ['cashFlow', 'margin', 'benefitCost', 'acquisitionProposition', 'customerCompetition'])
  const earnedFive = evaluateCalculation(form, ['keyMarkerContribution', 'srio'])
  const earnedSix = evaluateCalculation(form, ['speedToImplementation', 'flexibilityToPivotImplementation'])
  const earnedSeven = evaluateCalculation(form, ['reportingDetail', 'methodOfCollection', 'timeliness', 'systemsAndTech'])
  const earnedEight = evaluateCalculation(form, ['originality', 'clarity'])
  const earnedNine = evaluateCalculation(form, ['longitude', 'productMarketFitStability', 'stickiness', 'overheadResourceUsageStability'])

  const earnedTen = earnedOne + earnedTwo + earnedThree + earnedFour + earnedFive + earnedSix + earnedSeven + earnedEight + earnedNine

  React.useEffect(() => {
    updateForm('alignmentTotal', earnedOne)
    updateForm('scalabilityTotal', earnedTwo)
    updateForm('timeToMarketTotal', earnedThree)
    updateForm('financialTotal', earnedFour)
    updateForm('serviceTotal', earnedFive)
    updateForm('implementationTotal', earnedSix)
    updateForm('outcomeTotal', earnedSeven)
    updateForm('creativityTotal', earnedEight)
    updateForm('stabilityTotal', earnedNine)
    updateForm('totalRubric', earnedTen)
  }, [updateForm, earnedOne, earnedTwo, earnedThree, earnedFour, earnedFive, earnedSix, earnedSeven, earnedEight, earnedNine, earnedTen])

  const RubricLine: React.SFC<{ label: string, value: number, max: number, background: boolean}> = (props) => {

    const {
      background,
      label,
      value,
      max
    } = props

    return (
      <div className={ `rubricLine ${ background && 'gray-bg' }` }>
        <em className="label">{ label }</em>
        <em className="value">{ value }</em>
        <em className="max">{ max }</em>
      </div>
    )
  }

  function _renderRubricLines(labels: string[], values: number[], maxes: number[]) {
    let rendered = 0

    return values.map((val, i) => {

      if (val === 0) return null

      rendered += 1

      return (
        <RubricLine 
          key={ i } 
          label={ labels[i] } 
          value={ val } 
          max={ maxes[i] } 
          background={ rendered % 2 === 0 } 
        />
      )
    })
  }

  const labels = [
    "Strategic",
    "Scalability",
    "Time to Market",
    "Financial",
    "Service",
    "Implementation",
    "Outcome",
    "Creativity",
    "Stability"
  ]

  const maxes = [
    4, 16, 8, 20, 8, 8, 16, 8, 16
  ]

  const maxTotal = [48, 52, 52, 60]

  return (
    <div className="rubric">

      <div className="rubricLine withBottom">
        <em className="label">Criteria</em>
        <em className="value">Score</em>
        <em className="max">/ Max Score</em>
      </div>

      {
        _renderRubricLines(labels, [
          earnedOne,
          earnedTwo,
          earnedThree,
          earnedFour,
          earnedFive,
          earnedSix,
          earnedSeven,
          earnedEight,
          earnedNine,
        ], maxes)
      }

      <div className="rubricLine withTop">
        <em className="label">Total</em>
        <em className="value">{ earnedTen }</em>
        <em className="max">/ { maxTotal[parseInt(form.innovation)] }</em>
      </div>

    </div>
  )
}

const mapToState = (state: AppState) => ({
  form: state.form
})

const mapToDispatch = {
  updateForm
}

export default connect(mapToState, mapToDispatch)(Rubric)
