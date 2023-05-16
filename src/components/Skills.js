import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import python from "../assets/skills/python.svg"
import java from "../assets/skills/java.svg"
import swift from "../assets/skills/swift.svg"
import cplusplus from "../assets/skills/cplusplus.svg"
import javascript from "../assets/skills/javascript.svg"
import react from "../assets/skills/react.svg"
import express from "../assets/skills/express.svg"
import git from "../assets/skills/git.svg"
import github from "../assets/skills/github.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>

                <SkillCard name="python" experience="3 ish years" img={python} />
                <SkillCard name="java" experience="2 years" img={java} />
                <SkillCard name="swift" experience="1 years" img={swift} />
                <SkillCard name="cplusplus" experience="3 years" img={cplusplus} />
                <SkillCard name="javascript" experience="2 months" img={javascript} />
                <SkillCard name="react" experience="couple weeks" img={react} />
                <SkillCard name="express" experience="last week" img={express} />
                <SkillCard name="git" experience="4 years" img={git} />
                <SkillCard name="github" experience="4 years" img={github} />

                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}