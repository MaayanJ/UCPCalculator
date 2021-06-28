import * as React from 'react'

type TIconProps = {
  id?: string;
  viewbox?: string;
  color?: string;
}

export const MegaphoneIcon: React.SFC<TIconProps> = (props: TIconProps) => {

  const {
    color,
    id
  } = props

  return (
    <svg id={id} version="1.1" className="megaphone_icon" xmlns="http://www.w3.org/2000/svg">
      <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="1.0.0-Homepage" transform="translate(-610.000000, -663.000000)" stroke={color} strokeWidth="2">
          <g id="marketing" transform="translate(490.000000, 632.000000)">
            <path d="M130,46 C133,46 138,50 138,50 L138,34 C138,34 133,38 130,38 C130,38 130,46 130,46 Z M124,46 L127,54 L131,54 L128,46 M138,45 C139.657,45 141,43.657 141,42 C141,40.343 139.657,39 138,39 M130,50 C131,49.9999994 133,49 133,47 M121,42 C121,38.8888889 122.7912,38 125,38 L130,38 L130,46 L125,46 C122.7912,46 121,45.1111111 121,42 Z" id="Megaphone"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

MegaphoneIcon.defaultProps = {
  color: '#EF483E'
}
