import React from 'react'
import "../style/about.css";
import AbouotPhoto from "../photos/AbouotPhoto.png";
import github from "../icons/github.png";
import li from "../icons/li.png";
import ig from "../icons/ig.png";
import x from "../icons/x.png";

export default function About(){
    const handleGithub = () => {
        window.open('https://github.com/rijuuuu','_blank');
    };

    const handleLi = () => {
        window.open('https://www.linkedin.com/in/soujanya-khan-596877250/','_blank');
    };

    const handleIg = () => {
        window.open('https://www.instagram.com/haveyoumet.riju','_blank');
    };

    const handleX = () => {
        window.open('https://x.com/lyadh_lagsee','_blank');
    };

    return(
        <div className="about">
            <div className="aboutPhoto">
                <img src={AbouotPhoto} />
            </div>
            <div className="aboutMe">
                <h1>
                    Welcome Aboard!
                </h1>
                <p>
                Final-year Computer Science undergraduate and Convenor of Luminex, Soujanya Khan is a
                passionate web developer who thrives at the intersection of design and technology. 
                With strong expertise in frontend development, full-stack practices, and collaborative
                tools like Git & GitHub, Soujanya crafts digital experiences that are both functional
                and visually engaging. Beyond the realm of code, a deep curiosity for design and 
                creativity shapes every project, bringing a unique balance of technical precision
                and aesthetic thought. Each line of code is seen not just as syntax, but as a step
                toward building meaningful, user-centric innovation.
                <br /><br />Connect with me on,
                </p>
                <div className="socials">
                    <img 
                        src={github} 
                        onClick={handleGithub}
                        style={{ cursor: 'pointer' }} />
                    <img 
                        src={li}
                        onClick={handleLi}
                        style={{ cursor: 'pointer' }} />
                    <img 
                        src={ig}
                        onClick={handleIg}
                        style={{ cursor: 'pointer' }} />
                    <img 
                        src={x}
                        onClick={handleX}
                        style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}