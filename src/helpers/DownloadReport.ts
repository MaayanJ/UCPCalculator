import * as jsPDF from 'jspdf'

import { store } from 'controllers/reduxController'

import redx from 'assets/images/redx.png'
import good from 'assets/images/good.png'
import group from 'assets/images/group.png'
import logo from 'assets/images/upbring_logo.png'

import { calculateRisk } from 'helpers/components/EvaluateRisk'
import { _switchInnovation } from 'helpers/SwitchInnovation'

export function _downloadReport() {

  const {
    form
  } = store.getState()

  var doc = new jsPDF.default()
  let timeFrame = [form['timeFrame'], 240]
  let initialInvestment = [form['financialInvestment'], form['financialReturn']]
  let financialReturn = [form['financialReturn'], 500000]

  const max: any = [48, 52, 52, 60]

  function createBar(data: any[], label: string, x1: number, y1: number) {
      //console.log(data)

    let earned = data[0] || 0 
    let possible = data[1] || 1

    let percentage = earned / possible

    if (percentage > 1) percentage = 1

    doc.setFillColor(242, 242, 242)
    doc.rect(x1, y1, 100, 10, 'F')

    doc.setFillColor(239, 72, 62)
    doc.rect(x1, y1, 100 * percentage, 10, 'F')

    doc.text(label, x1 + 105, y1 + 6)
  }

  let rowPositions = 145

  function createTableRow(fontStyle: 'bold' | 'normal', withBorder: boolean, data: any) {

    if (data[1] === 0 || data[1] === "0") return

    doc.setFontStyle(fontStyle)

    if (withBorder) doc.line(30, rowPositions - 6, 30 + 140, rowPositions - 6)

    doc.text(data[0], 30, rowPositions)
    doc.text(''+ data[1], 30 + 80, rowPositions)
    doc.text(data[2], 30 + 110, rowPositions)

    rowPositions += 10
  }

  function createRiskAnalysis(x1: number, y1: number, data: any[] = ['Risk', 'Lorem ipsum', -1]) {
    doc.setFillColor(242, 242, 242)
    doc.rect(x1, y1, 140, 40, 'F').setFontStyle('bold').setFontSize(12)
    doc.text(data[0], x1 + 2, y1 + 12).setFontStyle('normal').setFontSize(10)

    //console.log("data > " + data)
    //console.log(data[2])

    let splitDescription  = doc.splitTextToSize(data[1], 100)

    doc.text(x1 + 2, y1 + 18, splitDescription)

    if (data[2] === -1) return
    if (data[2] === 0) doc.addImage(good, '.png', 135, y1 + 2, 33, 33)
    if (data[2] === 1) doc.addImage(group, '.png', 135, y1 + 2, 33, 33)
    if (data[2] === 2) doc.addImage(redx, '.png', 135, y1 + 2, 33, 33)
  }

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  doc.setFontSize(12).setFontStyle('bold')

  doc.text('Innovation Evaluation Report', 20, 20)
  doc.addImage(logo, ".png", 95, 10)
  doc.text('Innovation Type', 150, 20).setFontSize(10).setFontStyle('normal')

  doc.text(form['innovationName'], 20, 30)
  doc.text(`${ _switchInnovation(parseInt(form.innovation)) }`, 150, 30).setFontStyle('bold')

  doc.text('Report Summary', 20, 40).setFontSize(10).setFontStyle('normal')
  doc.text('Your idea could be the seed for social change, but cutting across the boundaries of industries,', 20, 45)
  doc.text('professions and cultures to fuel systemic change can be difficult innon-profit spaces --where regulation,', 20, 49)
  doc.text('risk aversion, and traditional processes can encumberinnovation. The good news is that you\'ve ', 20, 53)
  doc.text('now put your idea through our Innovation Calculator to determine the quality of your idea — you now have', 20, 57)
  doc.text('a strong foundation to collaborating with others around the idea.', 20, 61).setFontStyle('bold').setFontSize(12)

  doc.text('Overall Impact - (calculation needed)', 20, 80)
  doc.line(20, 82, 190, 82)

  createBar(timeFrame, timeFrame[0] + ' of ' + timeFrame[1] + ' Months', 20, 85)
  createBar(initialInvestment, '$' + numberWithCommas(initialInvestment[0]), 20, 100)
  createBar(financialReturn, '$' + numberWithCommas(financialReturn[0]), 20, 115)

  doc.text(`Criteria Evaluation - ${((form.totalRubric / max[parseInt(form.innovation)]) * 100).toFixed(0)}%`, 20, 135)
  doc.line(20, 137, 190, 137)


  createTableRow('normal', false, ['Criteria', 'Score', '/ Max Score'])
  createTableRow('normal', true, ['Strategic Alignment', form['alignmentTotal'], '/ 4'])
  createTableRow('normal', false, ['Scalability', form['scalabilityTotal'], '/ 16'])
  createTableRow('normal', false, ['Time to Market', form['timeToMarketTotal'], '/ 20'])
  createTableRow('normal', false, ['Financial Outlook', form['financialTotal'], '/ 16'])
  createTableRow('normal', false, ['Service Delivery', form['serviceTotal'], '/ 16'])
  createTableRow('normal', false, ['Implementation', form['implementationTotal'], '/ 8'])
  createTableRow('normal', false, ['Outcome Measurability', form['outcomeTotal'], '/ 8'])
  createTableRow('normal', false, ['Creativity', form['creativityTotal'], '/ 8'])
  createTableRow('normal', false, ['Stability', form['stabilityTotal'], '/ 4'])
  createTableRow('normal', true, ['Total', form['totalRubric'], `/ ${ max[parseInt(form.innovation)] }`])

  doc.addPage()

  doc.text('Risk Analysis - (calculation needed)', 20, 20)
  doc.line(20, 22, 190, 22) 

  createRiskAnalysis(30, 25, ['Strategic', 'Consider the organization\'s long-term strategies; current strategic plan; partnerships and alliances; reputation and public relations.'
  , calculateRisk([form['strategicProbability'], form['strategicImpact']])])
  createRiskAnalysis(30, 75, ['Compliance', 'Consider the organization\'s accreditation (e.g CARF), contractual obligations; requirements from current or future funding partners; regulations and statutes (e.g. labor law, environmental regulations); and more.'
  , calculateRisk([form['complianceProbability'], form['complianceImpact']])])
  createRiskAnalysis(30, 125, ['Financial', 'Consider the estimated investment ($) required and its relative size to the organization\'s budget.  Also, consider the potential for the organization to recoup its investment and how much (or how little) strain the investment places on the organization.'
  , calculateRisk([form['financialProbability'], form['financialImpact']])])
  createRiskAnalysis(30, 175, ['Other', 'Other areas of risk might include: Health, Staff/Team members, Information Technology/Data infrastructures, etc.'
  , calculateRisk([form['reputationalProbability'], form['reputationalImpact']])])

  doc.save('Innovation Evaluation Report.pdf')
}