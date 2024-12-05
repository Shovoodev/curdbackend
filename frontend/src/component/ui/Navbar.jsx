import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 items-center bg-blue-300">
      <div className="flex items-center gap-2">
        <img src="/vite.svg"/> <h1 className="">logo</h1>
      </div>
      <div>
        <ul className=" flex gap-4 text-xl uppercase ">
          <li>home</li>
          <NavLink to="/expenses">Expenses</NavLink>
        </ul>
      </div>
      <div>
        <ul className="flex gap-3 text-md ">
          <NavLink to="/signin">SignIn</NavLink> <NavLink to="/signup">SignUp</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
