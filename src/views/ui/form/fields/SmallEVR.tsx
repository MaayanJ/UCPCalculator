import * as React from 'react'

import { connect } from 'react-redux'

import { Accordion, AccordionPanel, Box } from 'grommet'

import { AppState } from 'models/app'
import { FormState } from 'models/formstate'

import { _switchInnovation } from 'helpers/SwitchInnovation'
import { Summary, Rubric } from '.'

interface Connected {
  form: FormState
}

const SmallEVR: React.FC<Connected> = ({ form }) => {
  const max = [48, 52, 52, 60]

  return (
    <div className="inovation">
      <section className="top">
        <div>
          <h4>Innovation Name</h4>
          <h5>{form.innovationName || ''}</h5>
        </div>
        <div>
          <h4>Innovation Type</h4>
          <h5>{_switchInnovation(parseInt(form.innovation))}</h5>
        </div>
      </section>

      <section className="mid">
        <div>
          <h4>Report Summary</h4>
          <h5>Your innovative idea could be the seed for social change, but cutting across the boundaries of industries, professions and cultures to fuel systemic change can be especially difficult in non-profit spaces--where regulation, risk aversion, and traditional processes can encumber innovation. The good news is that you've now put your idea through our Innovation Calculator to determine the quality of your idea — you now have a strong foundation to collaborating with others around the idea. Download your report now (click button above) to review your ideas overall impact, strategic score, and risk analysis.</h5>
        </div>
      </section>

      <section className="btm">
        <div>
          <Accordion className="accordion">
            <AccordionPanel label="Overall Impact">
              <Box pad="medium">
                <h5>Time frame</h5>
                <div className="progressData">
                  <progress value={parseInt(form['timeFrame'])} max="100"></progress>
                  <p>{form['timeFrame']}</p>
                </div>
                <h5>Initial Investment</h5>
                <div className="progressData">
                  <progress value={parseInt(form['financialInvestment'])} max="2500000"></progress>
                  <p>{form['financialInvestment']}</p>
                </div>
                <h5>Financial Return</h5>
                <div className="progressData">
                  <progress value={parseInt(form['financialReturn'])} max="1000000"></progress>
                  <p>{form['financialReturn']}</p>{/*this is the Financial Return from the begining*/}
                </div>
              </Box>
            </AccordionPanel>
            <AccordionPanel label={`Criteria Evaluation - ${((form.totalRubric / max[parseInt(form.innovation)]) * 100).toFixed(0)}%`}>
              <Box pad="medium">
                <Rubric />
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Risk Analysis">
              <Box pad="medium">
                <Summary />
              </Box>
            </AccordionPanel>
          </Accordion>
        </div>
      </section>
      <h4>Thank you for being an innovator!</h4>

    </div>
  )
}

const mapToState = (state: AppState) => ({
  form: state.form
})

export default connect(mapToState)(SmallEVR)
