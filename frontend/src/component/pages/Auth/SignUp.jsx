import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const SignUp = () => {
  const [data, setData] = useState({ email: "", password: "", username: "" });

  const handleSubmit = async(e) => {
    e.preventDefault();
    await fetch("http://localhost:5500/auth/register", {
        method : "POST" ,
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) })
      console.log(data)
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Input
        label="Enter Username"
        onChange={(e) =>
          setData({ ...data, username: e.target.value })
        }
      />
      <Input
      type="email"
        label="Enter Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <Input
      type="password"
        label="Enter Password"
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />
      <Button type="submit"> Submit </Button>
    </form>
  );
};

export default SignUp;
