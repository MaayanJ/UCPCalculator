import { Alerts } from 'models/alert'
import { Route } from 'models/route'
import { FormState } from './formstate'

export interface Resource {
  key: string
}

export interface Resources {
  isLoading: boolean
  keys: string[]
  data: {
    [key: string]: any
  }
}

export type ModelResource = Alert
export type ModelResources = Alerts

export interface Alert {
  key: string
  status: string
  message: string
  dismissable?: boolean
  dismissAfter?: number
}

export interface AppState {
  alerts: Alerts
  route: Route
  form: FormState
}

export const defaultAppState: AppState = {
  alerts: {
    isLoading: false,
    keys: [],
    data: {}
  },
  route: {
    page: 0,
    step: 0,
    readyState: true
  },
  form: {
    innovation: 0,
    innovationName: '',
    desiredImpact: '',
    primaryStakeholders: '',
    timeFrame: 0,
    numberImpacted: 0,
    alignment: null,
    timeCommitment: 0,
    financialInvestment: 0,
    financialReturn: 0,
    calculatedRoi: 0,
    alignmentOne: [false, 0, 'Strengthening Service Quality'],
    alignmentTwo: [false, 0, 'Building Thought Leadership'],
    alignmentThree: [false, 0, 'Strengthening The Workforce'],
    alignmentFour: [false, 0, 'Strengthening Finances'],
    departmentsAndPersonnel: '',
    margin: -1,
    benefitCost: -1,
    acquisitionProposition: -1,
    customerCompetition: -1,
    strategicProbability: -1,
    complianceProbability: -1,
    reputationalProbability: -1,
    financialProbability: -1,
    strategicImpact: -1,
    complianceImpact: -1,
    financialImpact: -1,
    reputationalImpact: -1
  }
}


//
// Helper Methods
//
export const toArray = (resources: ModelResources): ModelResource[] => {
  return resources.keys.map(key => resources.data[key])
}
