import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Honors & Awards</h1>
            <p className="font-light text-gray-400">Here are some of my honors and awards</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Robot Skills World Champions (WC) - 2020-2021 Change Up" issued="VEX Robotics" desc="Team with highest combined top Programming and top Driving Skills Challenge score (Robot Performance)." />
                <HonorCard name="Think Award (WC) - 2020-2021 Change Up" issued="VEX Robotics" desc="Team with impressive and effective autonomous programming." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}