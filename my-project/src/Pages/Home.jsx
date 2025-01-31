import React from 'react'
import Section75 from '../Components/Sections/Section75';
import H1 from '../Components/text/H1';
import Button3 from '../Components/Buttons/Button3';
import { useNavigate } from 'react-router-dom';




function Home() {
const navigate = useNavigate()

const click = () =>
  {
    navigate("/Option")
  }



  return (
    <Section75 css={"flex flex-col justify-center items-center gap-y-16"}>
    
    <H1 label={"Welcome to UniScout"} />
    <Button3 label={"Need Help?"} onClick={click}/>
    
    </Section75>


  );
}

export default Home;