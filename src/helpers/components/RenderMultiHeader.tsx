import * as React from 'react'

interface Props {
  data: string[]
}

export const RenderMultiHeader: React.SFC<Props> = (props: Props) => {

  const { 
    data = [] 
  } = props

  if (data === null || data.length < 1) return null

  return (
    <div className="multiHeader">
      { data.map((header: string) => { return <span key={ header }>{ header }</span> }) }
    </div>
  )
}
