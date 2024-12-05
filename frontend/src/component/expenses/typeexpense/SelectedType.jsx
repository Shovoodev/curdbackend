import React from 'react'
import Button from '../../ui/Button'

const SelectedType = ({id , value}) => {
  return (
    <Button id={id}>{value}</Button>
  )
}

export default SelectedType