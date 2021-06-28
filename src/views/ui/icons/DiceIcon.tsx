import * as React from 'react'

type TIconProps = {
  id?: string;
  viewbox?: string;
  color?: string;
}

export const DiceIcon: React.SFC<TIconProps> = (props: TIconProps) => {

  const {
    id,
    color
  } = props

  return (
    <svg id={id} version="1.1" className="dice_icon" xmlns="http://www.w3.org/2000/svg">
      <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="1.0.0-Homepage" transform="translate(-175.000000, -664.000000)" stroke={color} strokeWidth="2">
          <g id="organizational" transform="translate(79.000000, 632.000000)">
            <path d="M110,42 L111,42 L111,41 L110,41 L110,42 Z M114,42 L115,42 L115,41 L114,41 L114,42 Z M114,38 L115,38 L115,37 L114,37 L114,38 Z M110,38 L111,38 L111,37 L110,37 L110,38 Z M105,51 L106,51 L106,50 L105,50 L105,51 Z M101,47 L102,47 L102,46 L101,46 L101,47 Z M106,42 L97,42 L97,55 L110,55 L110,46 M106,46 L119,46 L119,33 L106,33 L106,46 Z" id="Dice"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

DiceIcon.defaultProps = {
  color: '#EF483E'
}