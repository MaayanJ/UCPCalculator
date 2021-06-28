import * as React from 'react'

type TIconProps = {
  id?: string;
  viewbox?: string;
  color?: string;
  label?: string;
}

export const GoodIcon: React.SFC<TIconProps> = (props: TIconProps) => {

  const {
    label,
    id,
    color
  } = props

  return (
    <div className="box">

      <section className="words">
        <div>
          <h4>{ label }</h4>
          <p>Risk(s) should be monitored but not prevent the organization from moving forward with the idea.</p>
        </div>
      </section>

      <section className="icons">
        <svg id={id} version="1.1" xmlns="http://www.w3.org/2000/svg" width="7rem" >
          <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="4.2.0-Step-4---Risk-Analysis" transform="translate(-659.000000, -588.000000)" stroke={color} strokeWidth="5">
              <g id="Group-4" transform="translate(119.000000, 539.000000)">
                <path d="M573,112 C589.568542,112 603,98.5685425 603,82 C603,65.4314575 589.568542,52 573,52 C556.431458,52 543,65.4314575 543,82 C543,98.5685425 556.431458,112 573,112 Z M558,82 L570,91 L585,70" id="Good"></path>
              </g>
            </g>
          </g>
        </svg>
      </section>
      
    </div>
  )
}

GoodIcon.defaultProps = {
  color: '#5CA2BF'
}
