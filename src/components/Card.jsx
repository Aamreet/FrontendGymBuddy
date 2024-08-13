import React from 'react'

const Card = ({workout}) => {
  return (
    <>
     <li key={workout.title}>{workout.title}</li>
    </>
  )
}

export default Card