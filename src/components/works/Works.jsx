import { useState } from "react"
import { dataWork } from "../../dataPortfolio"
import "./works.scss"

 
export default function Works() {
    const [slide, setSlide] = useState(0);
    const handleClick = (way) => {
        (way === "left") ? setSlide(slide > 0 ? slide - 1 : dataWork.length - 1) : setSlide(slide < dataWork.length - 1 ? slide + 1 : 0);
    }
    return (
        <div className="works" id="works">
            <h2>My Skills</h2>
            <div className="slider" style={{ transform: `translateX(-${slide * 100}vw)` }}>
                {
                    dataWork.map((data) => (
                        <div className="container">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={data.icon} alt="" />
                                        </div>
                                        <h2>{data.title}</h2>
                                        <div class="skillContainer">
                                            <div style={{ width: data.rate }} class="skill">{data.rate}</div>
                                        </div>
                                        <p>{data.desc}</p>
                                        <span>Projects</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={data.img} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <img src="assets/arrow.png" alt="" className="arrow left" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" alt="" className="arrow right" onClick={() => handleClick("right")} />
        </div>
    )
}
