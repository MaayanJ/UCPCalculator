import * as React from 'react'

type TIconProps = {
  id?: string;
  viewbox?: string;
  color?: string;
}

export const HourglassIcon: React.SFC<TIconProps> = (props: TIconProps) => {

  const {
    id,
    viewbox,
    color
  } = props

  return (
    <div className="hourIcon">
      <svg id={id} version="1.1" viewBox={viewbox} xmlns="http://www.w3.org/2000/svg" className="hourGlass" height="2.5rem" width="2.5rem">
        <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="2.2.0-Step-2.1" transform="translate(-119.000000, -948.000000)" stroke={color} strokeWidth="2">
            <path d="M119,949 L141,949 M128,952.5 L132,952.5 C132,952.5 132,954 132,954 C132,955 130,956 130,956 C130,956 128,955 128,954 C128,954 128,952.5 128,952.5 Z M123,949 C123,949 123,951 123,954 C123,957 128,957.235301 128,960 C128,962.764699 123,963 123,966 C123,969 123,971 123,971 M137,949 C137,949 137,951 137,954 C137,957 132,957.235301 132,960 C132,962.764699 137,963 137,966 C137,969 137,971 137,971 M119,971 L141,971 M126,969 C126,967 130,965 130,965 C130,965 134,967 134,969 C134,969 134,971 134,971 L126,971 L126,969 Z" id="Time"></path>
          </g>
        </g>
      </svg>
      <em>needs more info...</em>
    </div>
  )
}

HourglassIcon.defaultProps = {
  color: '#999999',
  viewbox: '0 0 25 25'
}
