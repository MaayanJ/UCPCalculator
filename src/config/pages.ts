import {
  Page
} from 'models/page'

export const pages: Page[] = [{
  pageName: 'Type of innovation',
  steps: [{
    label: '',
    fields: [{
      id: 'innovation',
      type: 'foursquare',
      content: {}
    }]
  }]
},
{
  pageName: 'Impact',
  steps: [{
    background: '2.jpg',
    label: 'What impact will your innovation have?',
    fields: [{
      id: 'none',
      type: 'heading',
      content: {
        heading: 'Step 2',
        subheading: 'What impact will your innovation have?',
        description: 'You are now evaluating your {innovationType} idea. Please answer the following questions to help us better evaluate your idea.',
      }
    },
    {
      id: 'innovationName',
      label: 'Innovation Name',
      type: 'sm_text',
      required: true,
      content: {
        max: 50
      }
    },
    {
      id: 'desiredImpact',
      label: 'Desired Impact',
      type: 'lg_text',
      required: true,
      content: {
        max: 250
      }
    },
    {
      id: 'primaryStakeholders',
      label: 'Primary Stakeholder(s)',
      type: 'lg_text',
      content: {
        tooltip: 'When considering your innovation, a stakeholder is anyone that will benefit from your idea being implemented.  Be as detailed as possible. For example, instead of a generic answer like \'children\',  we suggest \'100 girls in foster care in Dallas , TX ages 12-17\' or \'100 speciall-needs pre-school Teachers  and their 500 preschoolers in Austin, TX',
        max: 250
      }
    },
    {
      id: 'timeFrame',
      label: 'Timeframe (months)',
      type: 'ticker',
      content: {
        min: 1,
        max: 120
      }
    },
    {
      id: 'numberImpacted',
      label: 'No. of People Impacted',
      type: 'ticker',
      content: {
        max: 1000
      }
    },
    {
      id: 'alignment',
      label: 'Does the idea align with your organization\'s mission?',
      type: 'radio',
      required: true,
      content: {
        optionsStyle: 2,
        tooltip: 'If your idea does not align with your organization mission, then we may want  to rethink its purpose--innovative ideas need organizational buy-in to succeed. Please consider how your idea can better align with your organization\'s mission, select \'Yes\' , or be prepared for a low score!'
      }
    }
    ]
  },
  {
    label: 'cont\'d...',
    background: '3.jpg',
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Step 2 (cont\'d)'
      }
    },
    {
      id: 'timeCommitment',
      label: 'Time Commitment (hours)',
      type: 'ticker',
      content: {
        footnote: 'Total estimated time for research, plan and launch',
        max: 1000
      }
    },
    {
      id: 'financialInvestment',
      label: 'Financial Investment',
      type: 'numberInput',
      required: true,
      content: {
        max: 100000,
        footnote: 'Total amount of money needed to launch and fund it through first year'
      }
    },
    {
      id: 'financialReturn',
      label: 'Financial Return',
      type: 'numberInput',
      required: true,
      content: {
        max: 100000,
        footnote: 'Estimated financial return over the course of the provided timeframe'
      }
    },
    {
      id: 'departmentsAndPersonnel',
      label: 'Key Departments and Personnel (optional)',
      type: 'lg_text',
      content: {
        footnote: 'You can enter multiple departments and/or personnel, separated by commas',
        max: 250
      }
    },
    {
      id: 'calculatedRoi',
      label: '',
      type: 'calculation',
      content: {
        subheading: 'Return on Investment',
        dependencies: ['financialInvestment', 'financialReturn'],
        formula: '({1}-{0})/{0}',
        resultId: 'calculatedRoi',
        resultType: 'percentage',
        float: 0
      }
    }
    ]
  }
  ]
},
{
  //when you land on step 3, what currently displays correlates to step 3.5 in the sketch file
  pageName: 'Criteria',
  steps: [{
    background: '4.jpg',
    label: 'Step 3',
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Step 3',
        subheading: 'Criteria - Strategic Alignment',
        description: 'Select as many as 3 strategies below. Allocate how much your idea impacts the strategy by entering a percentage in the numeric fields. Then, select the level of impact your idea makes on the strategic direction.'
      }
    },
    {
      id: 'alignmentOne',
      label: '',
      type: 'multi',
      content: {
        multiHeader: ['Upbring Strategies', '', 'Alignment with Strategy'],
        checkbox: 'Strengthening Service Quality',
      }
    },
    {
      id: 'alignmentTwo',
      label: '',
      type: 'multi',
      content: {
        checkbox: 'Building Thought Leadership',
      }
    },
    {
      id: 'alignmentThree',
      label: '',
      type: 'multi',
      content: {
        checkbox: 'Strengthening The Workforce',
      }
    },
    {
      id: 'alignmentFour',
      label: '',
      type: 'multi',
      content: {
        checkbox: 'Strengthening Finances',
      }
    }
    ]
  },
  {
    label: 'Criteria - Scalability',
    background: '5.jpg',
    innovationDependency: [0, 1, 2],
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Step 3 (cont\'d)',
        subheading: 'Criteria - Scalability'
      }
    },
    {
      id: 'disruptiveness',
      label: 'Disruptiveness',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Does this idea have the potential to "disrupt" (high risk, high reward) or is it a low risk, low reward incremental improvement?',
        optionsStyle: 0
      }
    },
    {
      id: 'productMarketFit',
      label: 'Product-market Fit',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Are we in a good market with a product that satisfies the market?',
        optionsStyle: 0
      }
    },
    {
      id: 'testability',
      label: 'Testability',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Can we test the idea relatively quickly, economically and effectively using our existing networks and ability to prototype?',
        optionsStyle: 0
      }
    },
    {
      id: 'overheadResource',
      label: 'Overhead / Resource Usage',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Is our overhead predictable and consistent?  Or, is it likely to fluctuate and remain high (based on product and industry)?',
        optionsStyle: 0
      }
    },
    ]
  },
  {
    label: 'Step 3',
    background: '6.jpg',
    innovationDependency: [0],
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Step 3 (cont\'d)',
        subheading: 'Criteria - Time to Market'
      }
    },
    {
      id: 'speedToProductionStage',
      label: 'Speed to Production Stage',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Are we likely to push to a production level in ≤ 3 months or will it be closer to 24 months?',
        optionsStyle: 0
      }
    },
    {
      id: 'flexibilityToPivot',
      label: 'Flexibility to Pivot',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Is there a high innovation complexity and lots of market/supplier changes? Or, is the innovation complexity low and market/supplier changes are easily incorporated into the innovation?',
        optionsStyle: 0
      }
    }
    ]
  },
  {
    label: 'Criteria - Financial Outlook',
    background: '7.jpg',
    innovationDependency: [0],
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Step 3 (cont\'d)',
        subheading: 'Criteria - Financial Outlook'
      }
    },
    {
      id: 'cashFlow',
      label: 'Cash Flow',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Do the product and industry see predictable, consistent customer acquisition periods? Or, dramatic seasonality?  Will the organization require to maintain large amounts of cash on hand to support operational costs?',
        optionsStyle: 0
      }
    },
    {
      id: 'margin',
      label: 'Margin',
      type: 'radio',
      required: true,
      content: {
        topextra: 'What is the likelihood of generating a positive net income by the end of the estimated timeframe?',
        optionsStyle: 0
      }
    },
    {
      id: 'benefitCost',
      label: 'Benefit / Cost Outlook',
      type: 'radio',
      required: true,
      content: {
        topextra: 'When we consider both the monetized and unmonetized benefits AND costs, how likely is it that the benefits will exceed the costs within two (2) years?',
        optionsStyle: 0
      }
    },
    {
      id: 'acquisitionProposition',
      label: 'Customer Acquisition - Value Proposition',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Are we actually solving a problem? How much "pain" do potential customers feel?',
        optionsStyle: 0
      }
    },
    {
      id: 'customerCompetition',
      label: 'Customer Acquisition - Competition Exists',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Are we entering a treacherous red sea or a clear blue sea?  That is, are there numerous known competitors or does it seem we’re one of the first to enter the market?',
        optionsStyle: 0
      }
    }
    ]
  },
  {
    label: 'Step 3',
    background: '8.jpg',
    innovationDependency: [1, 2],
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Step 3 (cont\'d)',
        subheading: 'Criteria - Service Delivery'
      }
    },
    {
      id: 'keyMarkerContribution',
      label: 'Key Marker Contribution',
      type: 'radio',
      required: true,
      content: {
        topextra: 'How much does the innovation potentially contribute to an individual’s "Key Markers", such as of Education, Health, Safety, Vocation, and Life Skills? (Note: not how MANY, but how much. A significant impact in one Key Marker area can garner "Very High".)',
        optionsStyle: 0
      }
    },
    {
      id: 'srio',
      label: 'SROI',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Is the impact on staff or our target population wide and far across the organization or limited to one program/team?  Will it impact dozens of people, hundreds, thousands? How soon will it impact them?',
        optionsStyle: 0
      }
    }
    ]
  },
  {
    label: 'Step 3',
    background: '9.jpg',
    innovationDependency: [1, 2, 3],
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Step 3 (cont\'d)',
        subheading: 'Criteria - Implementation'
      }
    },
    {
      id: 'speedToImplementation',
      label: 'Speed to Implementation',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Are we likely to push to a production level in ≤ 1 months or will it be closer to 12 months?',
        optionsStyle: 0
      }
    },
    {
      id: 'flexibilityToPivotImplementation',
      label: 'Flexibility to Pivot',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Is there a high innovation complexity and lots of market/supplier changes? Or, is the innovation complexity low and market/supplier changes are easily incorporated into the innovation?',
        optionsStyle: 0
      }
    }
    ]
  },
  {
    label: 'Step 3',
    background: '10.jpg',
    innovationDependency: [1, 2, 3],
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Step 3 (cont\'d)',
        subheading: 'Criteria - Outcome Measurability'
      }
    },
    {
      id: 'reportingDetail',
      label: 'Reporting Detail',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Are the intended outcomes broad and unclear, or specific and narrow?',
        optionsStyle: 0
      }
    },
    {
      id: 'methodOfCollection',
      label: 'Method of Collection',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Will focus groups or surveys be needed, or is there an automated method available?  Something in between?',
        optionsStyle: 0
      }
    },
    {
      id: 'timeliness',
      label: 'Timeliness',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Will outcomes be measured monthly or can they be obtained in real time?  Something in between?',
        optionsStyle: 0
      }
    },
    {
      id: 'systemsAndTech',
      label: 'Systems and Technology',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Is the technology to measure outcomes high cost or even unknown?  Or, rather, is it readily accessible or already in place?',
        optionsStyle: 0
      }
    }
    ]
  },
  {
    label: 'Step 3',
    background: '11.jpg',
    innovationDependency: [3],
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Step 3 (cont\'d)',
        subheading: 'Criteria - Creativity'
      }
    },
    {
      id: 'originality',
      label: 'Originality',
      type: 'radio',
      required: true,
      content: {
        topextra: 'How novel or unique is the idea?',
        optionsStyle: 0
      }
    },
    {
      id: 'clarity',
      label: 'Clarity',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Does the idea rest on an unusually high degree of assumptions? Can it be conveyed and understood with ease?',
        optionsStyle: 0
      }
    }
    ]
  },
  {
    label: 'Step 3',
    background: '12.jpg',
    innovationDependency: [3],
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Step 3 (cont\'d)',
        subheading: 'Criteria - Stability'
      }
    },
    {
      id: 'longitude',
      label: 'Longitude',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Is this a niche idea answering a one-time unique need or customer demand? Does the idea have some market stability over time, or is it a fad?',
        optionsStyle: 0
      }
    },
    {
      id: 'productMarketFitStability',
      label: 'Product Market Fit',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Are we in a good market with a product that satisfies the market?',
        optionsStyle: 0
      }
    },
    {
      id: 'stickiness',
      label: 'Stickiness',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Does the idea have a particular emotional appeal or draw? Over time, how likely is it that customers will view this as a necessity?',
        optionsStyle: 0
      }
    },
    {
      id: 'overheadResourceUsageStability',
      label: 'Overhead / Resource Usage',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Is our overhead predictable and consistent, or is it likely to fluctuate and remain high (based on product and industry)?',
        optionsStyle: 0
      }
    }
    ]
  }
  ]
},
{
  pageName: 'Risk Analysis',
  steps: [{
    background: '14.jpg',
    doubleLayout: true,
    label: 'Risk Analysis',
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Step 4',
        subheading: 'What is the likelihood of risk occuring in these categories?',
      }
    },
    {
      id: 'strategicProbability',
      label: 'Strategic',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Consider the organization\'s long-term strategies; current strategic plan; partnerships and alliances; reputation and public relations.',
        optionsStyle: 1
      }
    },
    {
      id: 'complianceProbability',
      label: 'Compliance',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Consider the organization\'s accreditation (e.g CARF), contractual obligations; requirements from current or future funding partners; regulations and statutes (e.g. labor law, environmental regulations); and more.',
        optionsStyle: 1
      }
    },
    {
      id: 'financialProbability',
      label: 'Financial',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Consider the estimated investment ($) required and its relative size to the organization\'s budget.  Also, consider the potential for the organization to recoup its investment and how much (or how little) strain the investment places on the organization.',
        optionsStyle: 1
      }
    },
    {
      id: 'reputationalProbability',
      label: 'Other',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Other areas of risk might include: Health, Staff/Team members, Information Technology/Data infrastructures, etc.',
        optionsStyle: 1
      }
    },
    {
      id: 'rightText',
      label: '',
      type: 'rightText',
      content: {
        rightTextType: 'prob'
      }
    }
    ],
  },
  {
    doubleLayout: true,
    label: 'Risk Analysis',
    background: '15.jpg',
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Step 4',
        subheading: 'What happens if you don\'t deal with the risk in each category?',
      }
    },
    {
      id: 'strategicImpact',
      label: 'Strategic',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Consider the organization\'s long-term strategies; current strategic plan; partnerships and alliances; reputation and public relations.',
        optionsStyle: 1
      }
    },
    {
      id: 'complianceImpact',
      label: 'Compliance',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Consider the organization\'s accreditation (e.g CARF), contractual obligations; requirements from current or future funding partners; regulations and statutes (e.g. labor law, environmental regulations); and more.',
        optionsStyle: 1
      }
    },
    {
      id: 'financialImpact',
      label: 'Financial',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Consider the estimated investment ($) required and its relative size to the organization\'s budget.  Also, consider the potential for the organization to recoup its investment and how much (or how little) strain the investment places on the organization.',
        optionsStyle: 1
      }
    },
    {
      id: 'reputationalImpact',
      label: 'Other',
      type: 'radio',
      required: true,
      content: {
        topextra: 'Other areas of risk might include: Health, Staff/Team members, Information Technology/Data infrastructures, etc.',
        optionsStyle: 1
      }
    },
    {
      id: 'rightText',
      label: '',
      type: 'rightText',
      content: {
        rightTextType: 'impact'
      }
    }
    ],
  },
  {
    label: '',
    background: '4.jpg',
    fields: [{
      id: 'none',
      label: '',
      type: 'heading',
      content: {
        heading: 'Innovation Evaluation Report',
        subheading: '',
        pdfDownloadButton: true
      }
    },
    {
      id: '',
      label: '',
      type: 'SmallEVR',
      content: {

      }
    }
    ]
  }
  ]
}
]