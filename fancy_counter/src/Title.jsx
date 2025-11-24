import React from 'react'


const Title = ({number}) => {
  return (
    <h1 className='title'>{Math.abs(number)<5?"Fancy Counter": <div className="card--limit">Limit: 5! Buy Pro for more</div>}</h1>
  )
}

export default Title