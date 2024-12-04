import React from 'react'

const Button = ({children , type="submit" }) => {
  return (
    <button type={type} className='p-3 bg-blue-700 text-white border rounded-md flex justify-center items-center'>{children}</button>
  )
}
export default Button