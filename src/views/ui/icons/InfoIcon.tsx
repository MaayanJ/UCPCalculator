import * as React from 'react'

type TIconProps = {
  id?: string
  viewbox?: string
  color?: string
  meta?: string
}

export const InfoIcon: React.SFC<TIconProps> = (props: TIconProps) => {

  const [ open, handleOpen ] = React.useState(false)

  const {
    id,
    viewbox,
    meta,
    color
  } = props

  return (
    <div className="info">
      { open ? <p>{ meta }</p> : null }
      <svg 
        onClick={ () => handleOpen(!open) } 
        //onMouseLeave={ () => handleOpen(false) } 
        onMouseEnter={ () => handleOpen(true) } 
        className="info_icon" 
        id={id} 
        version="1.1" 
        viewBox={viewbox} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="1.0.0-Homepage" transform="translate(-614.000000, -354.000000)" stroke={color} strokeWidth="2">
            <path d="M615,356.990795 C615,355.891309 615.898212,355 616.990795,355 L633.009205,355 C634.108691,355 635,355.898212 635,356.990795 L635,373.009205 C635,374.108691 634.101788,375 633.009205,375 L616.990795,375 C615.891309,375 615,374.101788 615,373.009205 L615,356.990795 Z M625,363 L625,371 M625,359 L625,361" id="Group"></path>
          </g>
        </g>
      </svg>
    </div>
  )
}

InfoIcon.defaultProps = {
  color: '#5CA2BF',
  viewbox: '0 0 66 66'
}
