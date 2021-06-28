import * as React from 'react'
import * as Fields from './fields'

import { connect } from 'react-redux'

import { Field } from 'models/field'
import { AppState } from 'models/app'
import { SupportedFormEvent } from 'models/formstate'

import { updateForm, UpdateForm } from 'controllers/formController'

import { _downloadReport } from 'helpers/DownloadReport'
import { RenderMultiHeader } from 'helpers/components/RenderMultiHeader'

import { InfoIcon } from 'views/ui/icons/InfoIcon'
import ProgressIcon from 'views/ui/icons/ProgressIcon'

interface Connected {
  value: any
  innovation: number
  updateForm: UpdateForm
  progress: any
}

const FormField: React.SFC<Field & Connected> = (props: Field & Connected) => {

  const {
    id,
    label = '',
    type,
    value,
    content = {},
    updateForm,
    innovation,
    progress
  } = props

  //##################
  // HELPER FUNCTIONS
  //##################

  /**
   * 
   * @param e A supported form event
   * Function will update the redux state with the target value from the form field.
   * 
   */

  function _updateForm(e: SupportedFormEvent) {
    updateForm(id, e.currentTarget.value)
  }

  /**
   * 
   * @param type Destructured from the config, the type is switched and the proper field is rendered
   * 
   * @returns The field corresponding to the type of field requested by configuration or a default field if nothing is found
   * 
   */

  function _switchField(type: string) {
    switch (type) {
      case 'multi':
        return <Fields.MultiField id={id} value={value} content={content} />
      case 'riskSummary':
        return <Fields.RiskSummary label={label || 'Default Risk'} content={content} />
      case 'SmallEVR':
        return <Fields.SmallEVR />
      case 'calculation':
        return <Fields.Calculation content={content} />
      case 'foursquare':
        return <Fields.FourSquare handler={_updateForm} />
      case 'radio':
        return <Fields.RadioField handler={_updateForm} value={value || -1} content={content} id={id} />
      case 'rightText':
        return <Fields.RightText content={content} />
      case 'ticker':
        return <Fields.TickerField handler={_updateForm} increment={updateForm} id={id} value={value} />
      case 'numberInput':
        return <Fields.NumberInput id={id} value={value} content={content} />
      case 'none':
      case 'heading':
        break
      case 'lg_text':
      case 'sm_text':
      default:
        return <Fields.TextField handler={_updateForm} value={value} type={type} content={content} />
    }
  }

  /**
   * Called if there is an info icon displayed above form field.
   */

  function _renderInfoIcon() {
    return content.tooltip ? <InfoIcon meta={content.tooltip} /> : null
  }

  /**
   * Function is responsible for rendering any data brought in from content section of Field model
   */

  function _renderContent() {

    const {
      heading,
      subheading,
      description,
      topextra,
      pdfDownloadButton = false,
    } = content

    function showInnovation(inn: number) {
      const innovations = ['Product / Service', 'Process', 'Organizational', 'Marketing']
      return innovations[inn]
    }

    return (
      <>
        {heading ? <h1>{heading}</h1> : null}
        {subheading ? <h2>{subheading}</h2> : null}
        {label ? <div className="infoPosition"><h4>{label}</h4> {_renderInfoIcon()} </div> : null}
        {description ? <h4>{description.replace('{innovationType}', showInnovation(innovation))}</h4> : null}
        {topextra ? <h5>{topextra}</h5> : null}
        {pdfDownloadButton ? <button className="pdfbutton" onClick={() => _downloadReport()}>Download Report</button> : null}
      </>
    )
  }

  /**
   * Function is responsible for rendering any information below the form field, almost like a footnote.
   */

  function _renderFootnote() { return content.footnote ? <h5>{content.footnote}</h5> : null }

  return (
    <>
      <RenderMultiHeader data={content.multiHeader || []} />
      <div className={`form_field ${type} ${content.withSeparator && 'withSeparator'}`}>
        {_renderContent()}
        {_switchField(type)}
        {_renderFootnote()}
      </div>
      {content.progressBar && <ProgressIcon earned={progress} />}
    </>
  )
}

//################
// REDUX STUFF
//################

const mapState = (state: AppState, props: Field) => ({
  value: props.id ? state.form[props.id] : null,
  innovation: state.form.innovation,
  progress: state.form.totalRubric || 0
})

const mapDispatch = {
  updateForm
}

export default connect(mapState, mapDispatch)(FormField)
