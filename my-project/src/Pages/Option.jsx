import { Link } from 'react-router-dom';

function Option()
{
return <div className=' flex flex-col items-center justify-center gap-y-16 h-[75vh] SlideUp '>
<h1 className="[opacity:1] ">Please Select Your Preference</h1>
<div className="flex flex-row justify-center w-full gap-x-12 ">
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