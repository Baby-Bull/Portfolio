import './intro.scss';
import { init } from "ityped";
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Student", "Freelancer", "third role"]
        });
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="background">
                <img src="assets/backgr.jpg" alt="" />
            </div>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/ava2.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Ngo Duc Thang</h1>
                    <h3>A <span id="textRef" ref={textRef}></span></h3>
                </div>
                <a href="#works">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
