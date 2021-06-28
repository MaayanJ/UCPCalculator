
import * as React from 'react'

import { connect } from 'react-redux'

import { FormState } from 'models/formstate'
import { AppState } from 'models/app'

interface Connected {
  form: FormState
}

interface Props {
  earned: number
}

const ProgressIcon: React.FC<Props & Connected> = (props) => {

  let { form, earned } = props

  console.log(earned)

  const max = [48, 52, 52, 60]
  earned = Math.round(100 * (earned / max[form.innovation]))

  function _calculateColor() {
    if (earned > 83) return 'green'
    if (earned > 67) return 'dark-green'
    if (earned > 50) return 'yellow'
    if (earned > 33) return 'dark-yellow'
    if (earned > 16) return 'red'
    if (earned > 0) return 'dark-red'  
  }

  console.log(earned)
  return (
    <svg viewBox="0 0 36 36" className="circular-chart">
      <path 
        className="circle-bg"
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path 
        className={`circle ${ _calculateColor() }`}
        strokeDasharray={ `${ earned }, ${ 100 }` }
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">{ earned }%</text>
    </svg>
  )
}

const mapToState = (state: AppState) => ({
  form: state.form
})

export default connect(mapToState)(ProgressIcon)