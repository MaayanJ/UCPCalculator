import * as React from 'react'
import { connect } from 'react-redux'

import { pages } from 'config/pages'

import { Route } from 'models/route'
import { AppState } from 'models/app'

import AlertList from 'views/ui/alert/AlertsList'

import trinity from './../assets/images/trinity_lines.png'

import WizardApp from './WizardApp'

//import InfoIcon from './ui/icons/InfoIcon'

interface Connected {
  route: Route
}

const Main: React.SFC<Connected> = (props) => {
  const { page, step } = props.route

  return (
    <main>
      <AlertList />

      <div className="background_images">
        <img className="trinity" alt="three stipes" src={trinity}/>
        <img className="background" alt="main_background" src={ `/images/${ pages[page].steps[step].background || '1.png' }` } />
      </div>
      <WizardApp
        data={pages}
        pageCount={pages.length - 1}
        stepCount={pages[page].steps.length - 1}
        route={props.route}
      />
    </main>
  )
}

const mapState = (state: AppState) => ({
  route: state.route
})

export default connect(mapState)(Main)
