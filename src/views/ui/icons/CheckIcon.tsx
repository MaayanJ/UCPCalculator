import * as React from 'react'

type TIconProps = {
  id?: string;
  viewbox?: string;
  color?: string;
}

export const CheckIcon: React.SFC<TIconProps> = () => {
  return (
<svg width="66px" height="66px" viewBox="0 0 66 66" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="4.2.0-Step-4---Risk-Analysis" transform="translate(-659.000000, -588.000000)" stroke="#5CA2BF" strokeWidth="5">
            <g id="Group-4" transform="translate(119.000000, 539.000000)">
                <path d="M573,112 C589.568542,112 603,98.5685425 603,82 C603,65.4314575 589.568542,52 573,52 C556.431458,52 543,65.4314575 543,82 C543,98.5685425 556.431458,112 573,112 Z M558,79.1428571 L570,86 L585,70" id="Good"></path>
            </g>
        </g>
    </g>
</svg>
  )
}

CheckIcon.defaultProps = {
  color: '#5CA2BF',
  viewbox: '0 0 66 66'
}
