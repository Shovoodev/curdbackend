
const Input = ( { id , name, type = "text" , value , onChange , children , label}) => {
  return (
    <div className="flex max-w-[50%] justify-center gap-3 flex-col">
    <label className=" items-center"> {label}</label>
    <input className="shadow max-w-[50%] p-2" type={type} name={name} onChange={onChange} value={value} id={id}>{children}</input>
    </div>

  )
}

export default Input