import LogIn from "../Pages/LogIn"



function Button({label, Click})
{
    return <button onClick={Click} className="Button"><span>{label}</span></button>
}

export default Button


