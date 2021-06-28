import * as React from 'react'
import { connect } from 'react-redux'

import { setRoute } from 'controllers/routeController'
import { createAlert, deleteAlert } from 'controllers/alertController'

import { Route } from 'models/route'
import { Wizard } from 'models/wizard'
import { AppState, Alert } from 'models/app'
import { AlertAction } from 'models/alert'

import WizardNavigation from 'views/WizardNavigation'
import FormField from 'views/ui/form/FormField'
import { Boom } from 'views/ui/Boom'

import SkipComponent from 'helpers/components/SkipComponent'

import { CheckBox } from 'grommet'

interface Connected {
  form: any
  innovation: any

  setRoute: (payload: Route) => void
  createAlert: (payload: Alert) => AlertAction
  deleteAlert: (payload: Alert) => AlertAction
}

const WizardApp: React.SFC<Wizard & Connected> = (props: Wizard & Connected) => {

  const [toc, setToc] = React.useState(false)

  const {
    deleteAlert,
    createAlert,
    form,
    setRoute,
    innovation,
    data,
    pageCount,
    stepCount,
    route
  } = props

  const {
    page,
    step
  } = route

  let dataRoute = data[page].steps[step]

  const {
    innovationDependency
  } = dataRoute

  //###################
  // Helper functions
  //###################

  /**
   *
   * @param returnBooleanOrList If function will return value earned === need or if it will return a list of requiredFields
   * @returns Dependent on parameter, it will return a list of requiredFields or if the number of fields filled in is equal to the number of required fields.
   *
   */

  function _evaluateReady(returnBooleanOrList: boolean) {

    let earned = 0
    let needed = 0

    let requiredFields: string[] = []

    dataRoute.fields.forEach((field) => {

      let required = field.required || false

      if (required) {
        needed += 1
        requiredFields.push(field.id)

        let returnedData = form[field.id] || null

        if (returnedData === null || returnedData.length < 1 || returnedData === -1) return
        requiredFields = requiredFields.filter((fieldString) => fieldString !== field.id )
        earned += 1
      }
    })

    if (returnBooleanOrList) {
      return earned === needed
    } else {
      return requiredFields
    }
  }

  function _incrementWithSkipStepRecursive(nextPage: number, nextStep: number) {

    //console.log("Current Page " + page)
    //console.log("Current Step " + step)
    //console.log("Next Page " + nextPage)
    //console.log("Next Step " + nextStep)

    let nextDataRoute = data[nextPage].steps[nextStep]

    let nextInnovationDependencies = nextDataRoute.innovationDependency || null

    //console.log(nextInnovationDependencies)

    //console.log('IncrementWithRecursion > Should we skip next? ' + shouldSkip(nextInnovationDependencies, innovation))

    if (shouldSkip(nextInnovationDependencies, innovation)) {
      //console.log('IncrementWithRecursion you will need to skip the next step' )
      _increment(nextPage, nextStep)
    } else {
      setRoute({ page: nextPage, step: nextStep })
    }
  }

  function _decrementWithSkipStepRecursive(prevPage: number, prevStep: number) {
    //console.log("Current Page " + page)
    //console.log("Current Step " + step)
    //console.log("Prev Page " + prevPage)
    //console.log("Prev Step " + prevStep)

    let prevDataRoute = data[prevPage].steps[prevStep]
    let prevInnovationDependencies = prevDataRoute.innovationDependency || null

    //console.log(prevDataRoute)
    //console.log(prevInnovationDependencies)
    //console.log('IncrementWithRecursion > Should we skip next? ' + shouldSkip(prevInnovationDependencies, innovation))

    if (shouldSkip(prevInnovationDependencies, innovation)) {
      //console.log('IncrementWithRecursion you will need to skip the next step' )
      _decrement(prevPage, prevStep)
    } else {
      setRoute({ page: prevPage, step: prevStep })
    }
  }

  /**
   *
   * @param page Current page which is destructured from the route state.
   * @param step Current step which is destructured from the route state.
   *
   * @returns If the function returns, it was not successful
   *
   */

  async function _increment(page: number, step: number) {

    //console.log("PAGE > " + page)
    //console.log("STEP > " + step)

    let ready = _evaluateReady(true)
    let message = `You are missing required form fields: ${ _evaluateReady(false) }`

    if (page === pageCount && step + 1 === stepCount)
      if (!toc) {
        ready = false
        message += 'termsAndConditions'
      }


    if (!ready && !shouldSkip(innovationDependency, innovation)) {

      let key = Math.floor(Math.random() * Math.floor(50000))

      const alert = {
        key: `${ key }`,
        status: "error",
        message: message
      }

      createAlert(alert)

      await new Promise(resolve => setTimeout(resolve, 5000))

      deleteAlert(alert)

      return
    }

    if (page < pageCount) {
      if (step >= stepCount) {
        _incrementWithSkipStepRecursive(page + 1, 0)
      } else if (step < stepCount) {
        _incrementWithSkipStepRecursive(page, step + 1)
      }
    } else if (page === pageCount && step <= stepCount) {
      _incrementWithSkipStepRecursive(page, step + 1)
    } else return
  }

  /**
   *
   * @param page Current page which is destructured from the route state.
   * @param step Current step which is destructured from the route state.
   *
   */

  function _decrement(page: number, step: number) {

    //let ready = _evaluateReady()

    if (page < 0)
      return

    if (step <= 0) {
      _decrementWithSkipStepRecursive( page - 1, data[page - 1].steps.length - 1)
    } else if (step > 0 ) {
      _decrementWithSkipStepRecursive( page, step - 1)
    }
  }

  /**
   * This function is responsible for rendering the
   * previous and continue buttons, dependent on the
   * current page and step. If it is at the beginning
   * of the list, only the continue button will be rendered.
   *
   * The opposite happens at the end of the list.
   *
   * If anywhere else in the list, both buttons will be rendered.
   */

  function _renderCrementButtons() {
    if (page === 0 && step === 0) {
      return
    } else if (page >= pageCount && step >= stepCount) {
      return <DecrementButton />
    } else {
      return (
        <div>
          <DecrementButton />
          <IncrementButton />
        </div>
      )
    }
  }

  /**
   * This function is responsible for rendering the fields in the current step
   */

  function _renderFields() {
    return (
      <>
        { dataRoute.jumbo || '' }
        { dataRoute.fields.map((field, index) => <FormField key={index} { ...field } /> )}
      </>
    )
  }

  /**
   *
   * @param dependencies List innovation dependencies
   * @param innovation Innovation to test for
   *
   * @returns If dependencies has the current innovation. If so, then the step should render as normal.
   * If the current innovation does not match an innovation dependency, then the step should render
   * with a black square above it, blocking user interaction.
   */

  function shouldSkip(innovationDependencies: any[] | null = null, innovation: any) {

    if (innovationDependencies === null) { return false }

    return !innovationDependencies.includes(parseInt(innovation))
  }

  //####################
  //  Helper components
  //####################

  const IncrementButton = () => {
    return <button className="continue" onClick={() => _increment(page, step)}>{ page === pageCount && step + 1 === stepCount ? "Submit" : "Continue" }</button>
  }

  const DecrementButton = () => {
    return <button className="previous" onClick={() => _decrement(page, step)}>Previous</button>
  }

  return (
    <div className="wizard">
      { page === 0 ? <Boom /> : <WizardNavigation evaluateReady={ _evaluateReady } /> }
      <fieldset className={ `step-fields ${ page === 0 ? '' : 'with_bg' }` }>
        <div className={ `${ dataRoute.doubleLayout && 'layoutTwoColumn' }` }>
          { shouldSkip(innovationDependency, innovation) && <SkipComponent /> }
          { _renderFields() }
        </div>
      </fieldset>
      <nav className="crement_btns">
        { (page === pageCount && step + 1 === stepCount) &&
          <div className="termsAndConditions">
            <CheckBox
              checked={ toc }
              onChange={ () => setToc(!toc) }
            />
            <span>I agree to the <a href="https://innovate.upbring.org/terms-calculator" target="_blank" rel="noopener noreferrer">terms and conditions</a></span>
          </div>
        }
        { _renderCrementButtons() }
      </nav>
    </div>
  )
}

//#############
// REDUX STUFF
//#############

const mapState = (state: AppState) => ({
  form: state.form,
  innovation: state.form.innovation,
  readyState: state.route.readyState
})

const mapDispatch = {
  setRoute, createAlert, deleteAlert
}

export default connect(mapState, mapDispatch)(WizardApp)
