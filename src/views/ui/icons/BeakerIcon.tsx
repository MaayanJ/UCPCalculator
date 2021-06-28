import * as React from 'react'

type TIconProps = {
  id?: string;
  viewbox?: string;
  color?: string;
}

export const BeakerIcon: React.SFC<TIconProps> = (props: TIconProps) => {

  const {
    id,
    color
  } = props

  return (
    <svg id={id} className="beaker_icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="1.0.0-Homepage" transform="translate(-157.000000, -444.000000)" stroke={color} strokeWidth="2">
            <g id="product" transform="translate(79.000000, 410.000000)">
              <path d="M84.6,35 L84.6,40.7274401 L79,50.545488 L79,53 L95,53 L95,50.545488 L89.4,40.7274401 L89.4,35 M89,49 C89.5522847,49 90,48.5522847 90,48 C90,47.4477153 89.5522847,47 89,47 C88.4477153,47 88,47.4477153 88,48 C88,48.5522847 88.4477153,49 89,49 Z M85,51 C85.5522847,51 86,50.5522847 86,50 C86,49.4477153 85.5522847,49 85,49 C84.4477153,49 84,49.4477153 84,50 C84,50.5522847 84.4477153,51 85,51 Z M92,44.6047153 C86.1666667,42.2330071 87,47.766993 82,45.3952847 M82,35 L92,35" id="Beaker"></path>
            </g>
          </g>
        </g>
      </svg>
  )
}

BeakerIcon.defaultProps = {
  color: '#EF483E',
}