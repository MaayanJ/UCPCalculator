import * as React from 'react'

interface Props {
  content: any
}

const RightText: React.SFC<Props> = (props) => {

  const {
    content
  } = props

  function _probabilityText() {
    return (
      <>
        <h4>Probablity</h4>
        <hr />
        <p><b>High</b> - risk occurs every year </p>
        <p><b>Medium</b> - risk occurs every 2-3 years</p>
        <p><b>Low</b> - risk occurs once every 5 years </p>
      </>
    )
  }

  function _impactText() {
    return (
      <>
        <h4>Impact</h4>
        <hr />
        <p><b>High</b> - The organization will have to eliminate a program/business unit or take even more drastic action.  If not, the organization will suffer catastrophic failure.</p>
        <p><b>Medium</b> - The organization's programs/business units will continue, but performance in said programs/business units has been significantly impacted and costs will have risen.</p>
        <p><b>Low</b> - The impact on the orgization is minimal and manageable with contingencies</p>
      </>
    )
  }

  return (
    <div className='rightbox'>
      { content.rightTextType === "impact" ? _impactText() : _probabilityText() }
      { content.topextra || '' }
    </div>
  )
}

export default RightText
