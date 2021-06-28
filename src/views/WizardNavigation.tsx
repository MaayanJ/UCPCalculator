import * as React from 'react'
import { connect } from 'react-redux'

import { setRoute } from 'controllers/routeController'

import { _switchInnovation } from 'helpers/SwitchInnovation'

import { Route } from 'models/route'
import { Page } from 'models/page'
import { AppState } from 'models/app'

import { pages } from 'config/pages'

import { SlashIcon } from 'views/ui/icons/SlashIcon'

interface Connected {
  innovation: any
  setRoute: (payload: Route) => void,
  route: Route,
}

interface Props {
  evaluateReady: any
}

const WizardNavigation: React.SFC<Props & Connected> = (props: Props & Connected) => {

  const { 
    setRoute,
    route,
    innovation
  } = props

  //###################
  // Helper functions
  //###################

  /**
   * 
   * @param pages List of all pages for the application
   * 
   * This function will render pages, determine if it is the selected page, allow
   * the function access to change the route to another page, and finally allows
   * the function to display innovationName based on redux state.
   * 
   * @returns A list of elements that can do all of the above. ^^
   */

  function _renderPages(pages: Page[]){
    return pages.map((page, index) =>
      <li key={ index }>
        <button className={ route.page === index ? "selected" : "" } onClick={ () => index <= route.page && setRoute({ page: index, step: 0 }) }>
          <span>{`Step ${(index + 1) + " | " + ( index === 0 ? _switchInnovation(parseInt(innovation)) : page.pageName )}`}</span>
          { pages.length - 1 !== index ? <SlashIcon /> : null }
        </button>
      </li>
    )
  }

  return (
    <nav className="navigation">
      <ul>
        { _renderPages(pages) }
      </ul>
    </nav>
  )
}

const mapDispatch = {
  setRoute
}

const mapState = (state: AppState) => ({
  route: state.route,
  innovation: state.form.innovation
})

export default connect(mapState, mapDispatch)(WizardNavigation)
