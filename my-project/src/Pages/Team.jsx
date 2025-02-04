import Image from "../Components/image";
import Section100 from "../Components/Sections/Section100";
import example from "../assets/example.jpg";
import H1 from "../Components/text/H1";
import H2 from "../Components/text/H2";
import H3 from "../Components/text/H3";
import P from "../Components/text/P";
import Pattern from "../Components/BG";


function Team()
{
    console.log(example)

    return <Section100 css={"flex h-fit flex-col items-center gap-y-24 py-24"}>

    <H1 label={"Meet the team!"}></H1>
    


    <div className="flex flex-row gap-x-20 justify-center items-center bg w-full py-8 800-md:flex-col 800-md:items-center">
    
    <Image img={example}/>
    <div className="flex flex-col justify-center z-50 bg-slate-700 h-fit px-16 py-8 800-md:px-8 800-md:py-4">
        <H2 label={"Jared Callantine"} css={"[font-size:44px]"}></H2>

        <H3 label={"Full Stack Web Developer"} css={"[font-size:20px]"}></H3>
        <P label={""}/>
    </div>
    
    </div>



    <div className="flex flex-row gap-x-20 w-full justify-center bg-slate-500 py-8">
    
    <Image img={example}/>
    <div className="flex flex-col justify-center">
        <H2 label={"Alex"} css={""}></H2>

        <H3 label={"Full Stack Web Developer"}></H3>
        <P label={""}/>
    </div>
    
    </div>

    <div className="flex flex-row gap-x-20 w-full justify-center bg-slate-500 py-8">
    
    <Image img={example}/>
    <div className="flex flex-col justify-center">
        <H2 label={"Daniel Douglas"} css={""}></H2>

        <H3 label={"Half Stack Web Developer"}></H3>
        <P label={""}/>
    </div>
    
    </div>
     
     

  






    </Section100> 
    
    
    
   
}


export default Team