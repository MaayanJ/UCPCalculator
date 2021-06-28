import * as React from 'react'

import { WarningIcon } from 'views/ui/icons/WarningIcon'
import { GoodIcon } from 'views/ui/icons/GoodIcon'
import { RedCrossIcon } from 'views/ui/icons/RedCrossIcon'

export function calculateRisk(summary: any[] = [-1, -1]) {
  let prob = parseInt(summary[0]) + 1
  let impact = parseInt(summary[1]) + 1

  //console.log("prob > " + prob)
  //console.log("impact > " + impact)

  let risk = -1

  if (prob < 1) return risk

  if (prob === 1) {
    if (impact < 3) risk = 0
    else risk = 1
  }

  if (prob === 2) {
    if (impact < 2) risk = 0
    if (impact === 2) risk = 1
    if (impact > 2) risk = 2
  }

  if (prob === 3) {
    if (impact < 3) risk = 2
    if (impact === 3) risk = 1
  }

  //console.log("risk > " + risk)

  return risk
}

export const _evaluateRisk = (summary: any[] = [-1, -1], label: string = 'Default Risk') => {

  let prob = parseInt(summary[0]) + 1
  let impact = parseInt(summary[1]) + 1

  if (prob < 1){
    return (
      <div className="notAppliciable">
        <section>
          <div>
            <h4>Not appliciable, nedds more information</h4>
          </div>
        </section>
      </div>
    )
  }
  if (prob === 1) {
    if (impact < 3) return <GoodIcon label={ label } />
    else return <WarningIcon label={ label } />
  }

  if (prob === 2) {
    if (impact < 2) return <GoodIcon label={ label } />
    if (impact === 2) return <WarningIcon label={ label } />
    if (impact > 2) return <RedCrossIcon label={ label } />
  }

  if (prob === 3) {
    if (impact < 3) return <RedCrossIcon label={ label } />
    if (impact === 3) return <WarningIcon label={ label } />
  }
}