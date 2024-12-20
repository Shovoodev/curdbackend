
import {  Routes , Route } from "react-router"
import Navbar from "./component/ui/Navbar"
import LandingPage from "./component/pages/LandingPage"
import SignIn from "./component/pages/Auth/Signin"
import SignUp from "./component/pages/Auth/SignUp"
import Expenses from "./component/expenses/Expenses"
import EditExpense from "./component/expenses/EditExpense"
function App() {

  return (
    <>  
    <Navbar/>
      <Routes>
        <Route index element= {<LandingPage/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/expenses" element={<Expenses/>}/>
        <Route path="/edit/:id" element={<EditExpense/>}/>
      </Routes>
    </>
  )
}

export default App
