import React from 'react'
import "../style/home.css";
import { useTypewriter } from 'react-simple-typewriter'
import myPhoto from "../photos/myPhoto.png";


export default function Home() {
    const [text] = useTypewriter(
        {
            words: ['Hello','नमस्ते','নমস্কার','Bonjour','Hola','こんにちは'],
            loop: true,
            typeSpeed: 120
        }
    )

    return (
        <div className='outer'>
            <div className="bgText">
                <h1 className="bg-text">
                    <span>
                        {text}
                    </span>
                    ,<br /> I'm Soujanya</h1>
                <div className="photo">
                    <img src={myPhoto} alt="" />
                </div>
            </div>
            <div className="overlay-text">
                <h1 className="main-title">
                    <span>
                        {text}
                    </span>
                    , <br /> I'm Soujanya</h1>
            </div>
        </div>
    )
}

