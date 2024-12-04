import React from 'react'

const ExpendField = ({placeholder , onChange, type = "text" , label}) => {
  return (
    <div className='flex max-w-[50%] justify-center gap-3 flex-col'>
        <label className='pl-4'> {label}</label>
        <input className='p-3 w-[50%]' onChange={onChange} placeholder={placeholder}  type={type}/>
    </div>
  )
}

export default ExpendField