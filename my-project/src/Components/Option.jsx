import { Link } from 'react-router-dom';

function Option()
{
return <div className='h-full flex flex-col justify-evenly'>
<h1 className="[opacity:1] text-5xl 1000-md:text-4xl ">Please Select Your Preference</h1>
<div className="flex flex-row justify-around ">
<Link to="/Chat" className="[opacity:1] Button">
      <span>Guest</span>
    </Link>
<Link to="/LogIn" className="[opacity:1] Button">
      <span>Log In</span>
    </Link>
</div>
</div>
}


export default Option