import React from 'react'

const ExpendField = ({placeholder , value  ,  onChange, type = "text" , label}) => {
  return (
    <div className='flex justify-center gap-3 flex-col'>
        <label className='pl-4'> {label}</label>
        <input className='p-3 shandow border hover:bg-gray-300' value={value} onChange={onChange} placeholder={placeholder}  type={type}/>
    </div>
  )
}

export default ExpendField