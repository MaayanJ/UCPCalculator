import * as React from 'react'

type TIconProps = {
  id?: string
  label?: string
  viewbox?: string
  color?: string
}

export const WarningIcon: React.SFC<TIconProps> = (props: TIconProps) => {

  const {
    id,
    viewbox,
    label
  } = props

  return (
    <div className="box">
      <section className="words">
        <div>
          <h4>{ label }</h4>
          <p>Common, yet minor impact.  Mitigation strategies might be already built in and "routine" for the organization.</p>
        </div>
      </section>
      <section className="icons">
        <svg id={id} version="1.1" viewBox={viewbox} width="73px" height="66px" xmlns="http://www.w3.org/2000/svg">
            <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinejoin="round">
                <g id="4.2.0-Step-4---Risk-Analysis" transform="translate(-656.000000, -420.000000)" stroke="#BFB984" strokeWidth="5">
                    <g id="Group-5" transform="translate(119.000000, 371.000000)">
                        <path d="M573.333333,52 L606.666667,112 L540,112 L573.333333,52 Z M573.333333,72 L573.333333,92 M573.333333,95.3333333 L573.333333,102" id="Group"></path>
                    </g>
                </g>
            </g>
        </svg>
      </section>
    </div>
  )
}

WarningIcon.defaultProps = {
  color: '#BFB984',
  viewbox: '0 0 66 66'
}
