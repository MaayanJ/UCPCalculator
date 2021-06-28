import * as React from 'react'

import { connect } from 'react-redux'

import { setRoute } from 'controllers/routeController'

import { Route } from 'models/route'

import { BeakerIcon } from 'views/ui/icons/BeakerIcon'
import { OvalIcon } from 'views/ui/icons/OvalIcon'
import { DiceIcon } from 'views/ui/icons/DiceIcon'
import { MegaphoneIcon } from 'views/ui/icons/MegaphoneIcon'


interface Connected {
  setRoute: (payload: Route) => void
}

interface Props {
  handler: any
}

const FourSquare: React.SFC<Props & Connected> = (props: Props & Connected) => {

  const {
    handler,
    setRoute
  } = props

  const _handler = (e: any) => {
    handler(e)
    setRoute({ page: 1, step: 0, readyState: false })
  }

  return (
    <div className="initiatorContainer">
      <button className="initiator mask tl" value={0} onClick={_handler}>
        <div className="pretend">
          <BeakerIcon />
          <h3>Product or service</h3>
        </div>
        <p>A product or service that is new or significantly improved including upgrades in programs, services, technology or other functions</p>
      </button>

      <button className="initiator tr mask" value={1} onClick={_handler}>
        <div className="pretend">
          <OvalIcon />
          <h3>Process</h3>
        </div>
        <p>A new or significantly improved delivery of services method including changes in techniques, equipment and/or software that are only visible internally</p>
      </button>

      <button className="initiator bl mask" value={2} onClick={_handler}>
        <div className="pretend">
          <DiceIcon />
          <h3>Organizational</h3>
        </div>
        <p>A new method in business practice as it relates to entity structure, the creation of a curious culture and adaptations that foster internal idea pathways</p>
      </button>

      <button className="initiator br mask" value={3} onClick={_handler}>
        <div className="pretend">
          <MegaphoneIcon />
          <h3>Marketing</h3>
        </div>
        <p>A new marketing method involving significant changes in technical and/or top-of-funnel strategies, brand partnership and digital innovations</p>
      </button>
    </div>
  )
}

const mapDispatch = {
  setRoute
}

export default connect(null, mapDispatch)(FourSquare)
