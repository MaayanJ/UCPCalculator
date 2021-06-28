import * as React from 'react'

type TIconProps = {
  id?: string
  viewbox?: string
  color?: string
}

export const SlashIcon: React.SFC<TIconProps> = (props: TIconProps) => {

  const {
    id,
    viewbox,
    color
  } = props

  return (
    <svg id={id} className="test" version="1.1" viewBox={viewbox} xmlns="http://www.w3.org/2000/svg">
      <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="2.1.0-Step-2.1" transform="translate(-538.000000, -184.000000)" stroke={color} strokeWidth="4">
          <g id="tabs-/-rich" transform="translate(79.000000, 185.000000)">
            <g id="tabs-/-rich-tab,-selected" transform="translate(300.000000, 0.000000)">
              <path d="M154.419884,15.3884849 L194.937512,14.8708574" id="border" transform="translate(174.678698, 15.129671) rotate(-45.000000) translate(-174.678698, -15.129671) "></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

SlashIcon.defaultProps = {
  color: '#EF483E',
  viewbox: "0 0 66 66"
}
