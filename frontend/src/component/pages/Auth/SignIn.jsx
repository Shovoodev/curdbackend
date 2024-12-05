import { useState } from "react"
import Button from "../../ui/Button"
import Input from "../../ui/Input"

const SignIn = () => {
    const [userData , setUserData] = useState({email : "" , password : ""})
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5500/auth/login", {
            
        method : "POST" ,
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData) 
    })
    }
  return (
    <form onSubmit={handleSubmit}>
      <Input type="email" label="Enter email" onChange={(e)=>setUserData({...userData , email: e.target.value})}/>
      <Input type="password" label="Enter Password" onChange={(e)=> setUserData({...userData , password : e.target.value})}/>
      <Button type="submit" > SignIn</Button>
    </form>
  )
}

export default SignIn
