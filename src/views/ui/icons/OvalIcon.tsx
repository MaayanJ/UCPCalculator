import * as React from 'react'

type TIconProps = {
  id?: string;
  viewbox?: string;
  color?: string;
}

export const OvalIcon: React.SFC<TIconProps> = (props: TIconProps) => {

  const {
    id,
    color
  } = props

  return (
    <svg id={id} version="1.1" className="oval_icon" xmlns="http://www.w3.org/2000/svg">
      <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="1.0.0-Homepage" transform="translate(-624.000000, -443.000000)" stroke={color} strokeWidth="2">
          <g id="process" transform="translate(490.000000, 410.000000)">
            <path d="M148.5,50 C149.880712,50 151,48.8807119 151,47.5 C151,46.1192881 149.880712,45 148.5,45 C147.119288,45 146,46.1192881 146,47.5 C146,48.8807119 147.119288,50 148.5,50 Z M142,36 L144,34 M139.5,41 C140.880712,41 142,39.8807119 142,38.5 C142,37.1192881 140.880712,36 139.5,36 C138.119288,36 137,37.1192881 137,38.5 C137,39.8807119 138.119288,41 139.5,41 Z M140,47 L148,39 M137.5,52 C138.880712,52 140,50.8807119 140,49.5 C140,48.1192881 138.880712,47 137.5,47 C136.119288,47 135,48.1192881 135,49.5 C135,50.8807119 136.119288,52 137.5,52 Z M150.5,39 C151.880712,39 153,37.8807119 153,36.5 C153,35.1192881 151.880712,34 150.5,34 C149.119288,34 148,35.1192881 148,36.5 C148,37.8807119 149.119288,39 150.5,39 Z M144,52 L146,50" id="Oval"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

OvalIcon.defaultProps = {
  color: '#EF483E',
}