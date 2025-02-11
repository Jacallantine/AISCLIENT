import Section100 from "../Components/Sections/Section100"
import H1 from "../Components/text/H1"
import H2 from "../Components/text/H2"
import arrow from "../assets/arrow.svg"
import health from "../assets/health.svg"
import {useState} from "react"


function QuickTips()
{

        const [isOpen, setIsOpen] = useState(false);
        const [isOpen2, setIsOpen2] = useState(false);

    return <Section100 css={"flex flex-col justify-center items-center"}>
    <H1 label={"Quick Tips"}/>
    
    <div onClick={()=>setIsOpen(!isOpen)} className="flex flex-col w-2/3 h-fit gap-y-6 bg-blue-900 hover:bg-blue-800 [transition:300ms] py-6 px-4 [cursor:pointer] [border:2px_solid_gray] ">

    <div className="flex flex-row items-center justify-between">
    <div className="flex flex-row gap-x-3 items-center">
    <img src={health} alt="" className="[opacity:1] h-[50px] w-[50px]"/>
            <H2 label = {"Mental Health"} css={"[font-size:36px]"}/>
         </div>

        <div>
            <img src={arrow} alt="" className={`${isOpen ? "" : "[transform:rotatez(-90deg)]"} transition-transform duration-300 [opacity:1] h-[50px] w-[50px] `}/>
        </div>
    </div>

         



        <ul className={`${isOpen ? "flex" : "hidden"} h-fit flex flex-col gap-y-4 justify-start items-start transition-transform duration-300`}>
        
        <li className="[opacity:1] h-fit hover:bg-[transparent] flex items-start gap-x-1 [margin:0]"><span className="whitespace-nowrap min-w-[300px] [font-weight:600]">Time Management & Prioritization –</span>Use planners or digital tools (like Notion or Google Calendar) to keep track of assignments, deadlines, and study sessions. Break tasks into smaller steps to avoid feeling overwhelmed.</li>
        <li className="[opacity:1] h-fit hover:bg-[transparent] flex items-start gap-x-1 [margin:0]"><span className="whitespace-nowrap min-w-[300px] [font-weight:600]">Regular Exercise & Sleep –</span>Aim for at least 30 minutes of physical activity a few times a week and maintain a consistent sleep schedule to boost energy, focus, and overall well-being.</li>
        <li className="[opacity:1] h-fit hover:bg-[transparent] flex items-start gap-x-1 [margin:0]"><span className="whitespace-nowrap min-w-[300px] [font-weight:600]">Social Support & Community -</span>Stay connected with friends, family, or student organizations to maintain a support system. Talking about stress or challenges can help relieve mental pressure.</li>
      
     
        </ul>
    
    
    </div>


    <div onClick={()=>setIsOpen2(!isOpen2)} className="flex flex-col w-2/3 h-fit gap-y-6 bg-blue-900 hover:bg-blue-800 [transition:300ms] py-6 px-4 [cursor:pointer] [border:2px_solid_gray] ">

    <div className="flex flex-row items-center justify-between">
    <div className="flex flex-row gap-x-3 items-center">
    <img src={health} alt="" className="[opacity:1] h-[50px] w-[50px]"/>
            <H2 label = {"Mental Health"} css={"[font-size:36px]"}/>
         </div>

        <div>
            <img src={arrow} alt="" className={`${isOpen2 ? "" : "[transform:rotatez(-90deg)]"} transition-transform duration-300 [opacity:1] h-[50px] w-[50px] `}/>
        </div>
    </div>

         



        <ul className={`${isOpen2 ? "flex" : "hidden"} h-fit flex flex-col gap-y-4 justify-start items-start transition-transform duration-300`}>
        
        <li className="[opacity:1] h-fit hover:bg-[transparent] flex items-start gap-x-1 [margin:0]"><span className="whitespace-nowrap min-w-[300px] [font-weight:600]">Time Management & Prioritization –</span>Use planners or digital tools (like Notion or Google Calendar) to keep track of assignments, deadlines, and study sessions. Break tasks into smaller steps to avoid feeling overwhelmed.</li>
        <li className="[opacity:1] h-fit hover:bg-[transparent] flex items-start gap-x-1 [margin:0]"><span className="whitespace-nowrap min-w-[300px] [font-weight:600]">Regular Exercise & Sleep –</span>Aim for at least 30 minutes of physical activity a few times a week and maintain a consistent sleep schedule to boost energy, focus, and overall well-being.</li>
        <li className="[opacity:1] h-fit hover:bg-[transparent] flex items-start gap-x-1 [margin:0]"><span className="whitespace-nowrap min-w-[300px] [font-weight:600]">Social Support & Community -</span>Stay connected with friends, family, or student organizations to maintain a support system. Talking about stress or challenges can help relieve mental pressure.</li>
      
     
        </ul>
    
    
    </div>
    
  
    
    </Section100>
}


export default QuickTips