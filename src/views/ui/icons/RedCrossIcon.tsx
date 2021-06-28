import * as React from 'react'

type TIconProps = {
  id?: string
  viewbox?: string
  color?: string
  label?: string
}

export const RedCrossIcon: React.SFC<TIconProps> = (props: TIconProps) => {

  const {
    label
  } = props

  return (
    <div className="box">
      <section className="words">
        <div>
          <h4>{label}</h4>
          <p>Potential for insolvency; the organization's management is needed for control.</p>
        </div>
      </section>

      <section className="icons">
        <svg width="66px" height="66px" viewBox="0 0 66 66" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="4.2.0-Step-4---Risk-Analysis" transform="translate(-659.000000, -756.000000)" stroke="#EF483E" strokeWidth="5">
                    <g id="Group-3" transform="translate(119.000000, 707.000000)">
                        <path d="M573.711987,52.7119875 C573.318768,52.3187676 572.683384,52.3166156 572.288013,52.7119875 L543.711987,81.2880125 C543.318768,81.6812324 543.316616,82.3166156 543.711987,82.7119875 L572.288013,111.288013 C572.681232,111.681232 573.316616,111.683384 573.711987,111.288013 L602.288013,82.7119875 C602.681232,82.3187676 602.683384,81.6833844 602.288013,81.2880125 L573.711987,52.7119875 Z M563.947937,90.1005174 L581.100517,72.9479365 M563.947937,72.9479365 L581.100517,90.1005174" id="Group"></path>
                    </g>
                </g>
            </g>
        </svg>
      </section>

    </div>

  )
}

RedCrossIcon.defaultProps = {
  color: '#5CA2BF',
  viewbox: '0 0 66 66'
}
