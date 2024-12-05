import React, { useEffect, useState } from 'react'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import SelectedType from './SelectedType'

const TypeOfExpenses = () => {
    
  const [typeValue , setTypeValue] = useState([])
  const [isLoading , setIsLoading ] = useState(false)
  const refreshAllType = async() => {
    setIsLoading(true)
      await fetch("http://localhost:5500/alltypes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTypeValue(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => {
    setIsLoading(true);
    refreshAllType()
   setTypeValue(false)
  }, [setTypeValue]);
  return (
    <div>
      <Input  label= "Select your Types"/>
      <Button> Add Expense Type</Button>
      {isLoading ? (
          <p>Loading...</p>
        ) : (
          typeValue?.map((id , value)=> {
            return <SelectedType key={id}> { value}</SelectedType>
          }) 
        )}
    </div>
  )
}
export default TypeOfExpenses