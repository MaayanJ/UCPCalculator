import * as React from 'react'

import { InfoIcon } from 'views/ui/icons/InfoIcon'

type TIconProps = {
  id?: string
  viewbox?: string
  color?: string
}

export const Boom: React.SFC<TIconProps> = () => {
  return (
    <div className="boom">
      <div className="header_svg">
        <svg width="757px" height="76px" viewBox="0 0 757 76" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="1.0.0-Homepage" transform="translate(-40.000000, -185.000000)">
              <g id="Group-2" transform="translate(40.000000, 185.000000)">
                <text id="Innovation-Evaluation" fontFamily="ArialMT, Arial" fontSize="50" fontWeight="normal" fill="#3A4958">
                  <tspan x="39" y="75">Innovation Evaluation Calculator</tspan>
                </text>
                <path d="M29,10 L29,0 C45.0162577,0 58,12.9837423 58,29 C58,45.0162577 45.0162577,58 29,58 C12.9837423,58 0,45.0162577 0,29 L10,29 C10,39.4934102 18.5065898,48 29,48 C39.4934102,48 48,39.4934102 48,29 C48,18.5065898 39.4934102,10 29,10 Z" id="innovate_halo" fill="#EF483E" fillRule="nonzero" transform="translate(29.000000, 29.000000) scale(-1, -1) translate(-29.000000, -29.000000) "></path>
              </g>
            </g>
          </g>
        </svg>
        <InfoIcon meta={'You\'ve got an idea that you think will help create a better world. Great! Now what? Welcome to the Innovation Evaluation Calculator.  We designed this tool to help you measure the impact of your innovative social impact idea. This calculator provides a starting off point for your innovation by evaluating its Social Return on Investment (SROI), scalability, outcome measurability, ease of implementation and strategic alignment—in this case, we use Upbring\'s key mission categories. Please select a category below to begin using this calculator and join Upbring Innovation Labs in our mission to turn ideas into real outcomes.'} />
      </div>

      <div className="sub_container">
        <h4>You've got an idea that you think will help create a better world. Great! Now what? Welcome to the Innovation Evaluation Calculator. We designed this tool to help you measure the impact of your innovative social impact idea. This calculator provides a starting off point for your innovation by evaluating its Social Return on Investment (SROI), scalability, outcome measurability, ease of implementation and strategic alignment—in this case, we use Upbring's key mission categories. Please select a category below to begin using this calculator and join Upbring Innovation Labs in our mission to turn ideas into real outcomes.</h4>
        <h1>Step 1</h1>
        <div className="subheading">
          <h2>What type of innovation are you proposing?</h2>
          <InfoIcon meta="Many innovative ideas can be classified by more than one type of innovation. Pick the type that best captures the idea at this stage; the type can change next time you evaluate it." />
        </div>
      </div>
    </div>
  )
}
